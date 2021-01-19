import { Button } from '@material-ui/core';
import React from 'react';
import { useModel } from 'umi';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState');
  const { logOut } = useModel('useAuth', (m) => ({
    logOut: m.logOut,
  }));

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <div className={className}>
      <Button onClick={logOut} variant="text" color="secondary" className={styles.action}>
        logout
      </Button>
    </div>
  );
};
export default GlobalHeaderRight;
