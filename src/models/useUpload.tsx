import { usersApi } from '@/services/users';
import { useSetState } from 'ahooks/es';
import { message } from 'antd';
import type { UploadProps } from 'antd/lib/upload';
import imageCompression from 'browser-image-compression';
import { useModel } from 'umi';

type IState = {
  uploadPercent: number;
  isUploading: boolean;
};

export default function useUploadModel() {
  const [state, setState] = useSetState<IState>({
    uploadPercent: 0,
    isUploading: false,
  });

  const { refresh: refreshUser } = useModel('@@initialState');
  const limitSize = 100;

  // * ------------ beforeUpload --------------
  const beforeUpload = (file?: any) => {
    const isImages = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isImages) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLimitSize = file.size / 1024 / 1024 < limitSize;

    if (!isLimitSize) {
      message.error(`Image must smaller than ${limitSize}MB!`);
    }
    return isImages && isLimitSize;
  };

  // * ------------ uploadAvatar --------------
  const uploadAvatarProps: UploadProps = {
    multiple: false,
    // @ts-ignore
    onStart(file: { name: any }) {
      setState({ isUploading: true });
      console.log('onStart', file, file.name);
    },

    onSuccess(ret: { error: any }) {
      if (!ret?.error) {
        refreshUser();
      }
      setState({ isUploading: false });
    },

    onProgress({ percent }) {
      setState({ uploadPercent: Number(percent) });
    },

    async customRequest({ data, file, onError, onProgress, onSuccess }) {
      const formData = new FormData();
      if (data) {
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
      }
      const options = {
        maxSizeMB: 5,
        maxWidthOrHeight: 300,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        formData.append('avatar', new File([compressedFile], file.name));
      } catch (error) {
        console.log(error);
      }

      usersApi
        .uploadAvatar(formData, {
          onUploadProgress: ({ total, loaded }) => {
            onProgress({ percent: Number(Math.round((loaded / total) * 100).toFixed(2)) }, file);
          },
        })
        .then(({ data: response }) => {
          onSuccess(response, file);
        })
        .catch(onError);

      return {
        abort() {
          console.log('upload progress is aborted.');
        },
      };
    },
  };

  // console.log('state');

  return {
    beforeUpload,
    uploadAvatarProps,
    ...state,
  };
}
