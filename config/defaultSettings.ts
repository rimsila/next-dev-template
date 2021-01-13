import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // Daybreak blue
  colorWeak: false,
  title: 'Next Dev Template',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: false,
};

export default Settings;
