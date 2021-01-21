import ProForm from '@ant-design/pro-form';
import { Button, message } from 'antd';
import React from 'react';
import UploadAvatar from './UploadAvatar';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <ProForm
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <UploadAvatar />
        <Button type="text"> Drag or Click on image to Upload</Button>
      </ProForm.Group>
    </ProForm>
  );
};
