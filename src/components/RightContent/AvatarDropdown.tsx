/* eslint-disable react-hooks/exhaustive-deps */
import { useCommon } from '@/hooks';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useHistory, useModel } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const history = useHistory();
  const { logOut, loadingLogOut } = useModel('useAuth', (m) => ({
    logOut: m.logOut,
    loadingLogOut: m.loadingLogOut,
  }));
  const { initialState, refresh } = useModel('@@initialState');
  const { onImgError, isImgDefault } = useCommon();
  useEffect(() => {
    if (!initialState?.currentUser) {
      refresh();
    }
  }, []);

  const onMenuClick = useCallback(
    (event: {
      key: React.Key;
      keyPath: React.Key[];
      item: React.ReactInstance;
      domEvent: React.MouseEvent<HTMLElement>;
    }) => {
      const { key } = event;
      if (key === 'logout') {
        logOut();
        return;
      }
      if (key === 'settings') {
        history.push('/settings');
      }
    },
    [],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || loadingLogOut) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          settings
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        logout
      </Menu.Item>
    </Menu>
  );

  const { data: userData } = currentUser;
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          className={styles.avatar}
          onError={onImgError}
          src={userData?.avatar}
          icon={isImgDefault && <UserOutlined />}
          alt="avatar"
        />
        <span className={`${styles.name} anticon`}>{userData?.fullName}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
