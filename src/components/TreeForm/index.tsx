import { LAYOUT_FORM_SINGLE, LAYOUT_FORM_TWO } from '@/constants';
import { Col, Form, Row, Tree } from 'antd';
import type { FormProps } from 'antd/lib/form';
import React from 'react';

type IProps = {
  onCheck?: (checkedKeys?: any, info?: any) => void;
  roles: any[];
  fromProps?: FormProps;
};

export default (props: IProps) => {
  const { onCheck, roles, fromProps } = props;
  return (
    <Form {...LAYOUT_FORM_TWO} scrollToFirstError {...fromProps}>
      <Row>
        <Col span={24}>
          <Form.Item label="Roles" {...LAYOUT_FORM_SINGLE} valuePropName="checkedKeys" name="roles">
            <Tree treeData={roles} onCheck={onCheck} checkable height={300} defaultExpandAll />
          </Form.Item>
        </Col>
      </Row>
      <Row />
    </Form>
  );
};
