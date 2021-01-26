import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { COMPANY_NAME } from '../src/constants';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // Daybreak blue
  colorWeak: false,
  title: COMPANY_NAME,
  pwa: false,
  iconfontUrl: '',
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  headerTheme: 'light',
};

export default Settings;
