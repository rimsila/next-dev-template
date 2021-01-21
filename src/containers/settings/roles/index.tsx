import TreeForm from '@/components/TreeForm';
import { useLocalStorageState } from 'ahooks/es';
import { Form } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import { roles } from './dataRole';

export default () => {
  const { refresh } = useModel('@@initialState');
  const [form] = Form.useForm();
  const [role, setRole] = useLocalStorageState<any[]>('role', []);

  const handleSubmit = (values) => {
    console.log('submit values', values);
  };

  const onCheck = (
    checkedKeys: string[],
    info: { halfCheckedKeys: any[]; checkedNodes: any[] },
  ) => {
    const newRole = [...checkedKeys, ...info?.halfCheckedKeys];
    console.log('info', info);

    form.setFieldsValue({
      roles: checkedKeys,
    });
    handleSubmit(newRole);
    setRole(newRole);
    refresh();
  };
  return (
    <TreeForm
      {...{
        onCheck,
        roles,
        fromProps: {
          form,
          initialValues: {
            roles: role,
          },
        },
      }}
    />
  );
};
