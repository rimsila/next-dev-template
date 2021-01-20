import TreeForm from '@/components/TreeForm';
import { useLocalStorageState } from 'ahooks/es';
import { Form } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import { roles } from './data';

export default () => {
  const { refresh } = useModel('@@initialState');
  const [form] = Form.useForm();
  const [role, setRole] = useLocalStorageState<any[]>('role', roles);

  // const handleSubmit = (values) => {
  //   console.log(values);
  //   setRole(values);
  // };

  const onCheck = (checkedKeys: any) => {
    console.log('onCheck', checkedKeys);
    form.setFieldsValue({
      roles: checkedKeys,
    });
    setRole(checkedKeys);
    refresh();
  };

  return (
    <TreeForm
      {...{
        onCheck,
        roles,
        fromProps: {
          // onFinish: handleSubmit,
          form,
        },
      }}
    />
  );
};
