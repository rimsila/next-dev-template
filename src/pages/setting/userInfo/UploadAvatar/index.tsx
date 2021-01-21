import { useCommon } from '@/hooks';
import { UploadOutlined } from '@ant-design/icons';
import { Progress, Spin } from 'antd';
import ImgCrop from 'antd-img-crop';
import Dragger from 'antd/lib/upload/Dragger';
import React from 'react';
import { useModel } from 'umi';

export default () => {
  const { uploadAvatarProps, beforeUpload, uploadPercent, isUploading } = useModel('useUpload');
  const { initialState, loading } = useModel('@@initialState');
  const { onImgError, isImgDefault } = useCommon();
  const avatar = initialState?.currentUser?.data?.avatar;
  return (
    <>
      <ImgCrop
        {...{ rotate: true, beforeCrop: beforeUpload, cropperProps: { cropShape: 'round' } }}
      >
        <Dragger
          {...{
            ...uploadAvatarProps,
            name: 'avatar',
            listType: 'picture-card',
            style: {
              padding: 10,
              width: 120,
              height: 120,
              marginBottom: 20,
            },
          }}
        >
          {loading && <Spin />}

          {!loading &&
            (avatar && isImgDefault === false ? (
              <img
                onError={onImgError}
                src={avatar}
                alt="avatar"
                style={{ borderRadius: '50%', width: 100 }}
              />
            ) : (
              <UploadOutlined />
            ))}
        </Dragger>
      </ImgCrop>
      {isUploading && <Progress percent={Number(uploadPercent)} size="small" />}
    </>
  );
};
