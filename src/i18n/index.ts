import { createI18n } from 'vue-i18n';

import enUS from './en-US/en-US';
import zhTW from './zh-TW/zh-TW';
import zhCN from './zh-CN/zh-CN';
import viVN from './vi-VN/vi-VN';

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'en-US': enUS,
    'zh-TW': zhTW,
    'zh-CN': zhCN,
    'vi-VN': viVN
  }
});

export default i18n;
