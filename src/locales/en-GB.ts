import common from './km-KH/common';
import component from './km-KH/component';
import globalHeader from './km-KH/globalHeader';
import menu from './km-KH/menu';
import pages from './km-KH/pages';
import pwa from './km-KH/pwa';
import settingDrawer from './km-KH/settingDrawer';
import settings from './km-KH/settings';

// ant design not yet have km-KH so I replace GB to KH

export default {
  'navBar.lang': 'ភាសា',
  'layout.user.link.help': 'ជួយ',
  'layout.user.link.privacy': 'ភាពឯកជន',
  'layout.user.link.terms': 'ល័ក្ខខ័ណ្ឌ',
  'app.preview.down.block': 'ទាញយកទំព័រនេះទៅគំរោងមូលដ្ឋាន',
  'app.welcome.link.fetch-block': 'ទទួលបានប្លុកទាំងអស់',
  'app.welcome.link.block-list': 'ផ្អែកលើការអភិវឌ្ឍន៍ប្លុកបង្កើតទំព័រស្តង់ដារយ៉ាងរហ័ស',
  ...pages,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...common,
};
