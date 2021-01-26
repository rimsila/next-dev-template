import type { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // Daybreak blue
  colorWeak: false,
  title: 'YbizTech',
  pwa: false,
  iconfontUrl: '//at.alicdn.com/t/font_2221049_ku7i16j3o4j.js',
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  headerTheme: 'light',
};

export default Settings;
