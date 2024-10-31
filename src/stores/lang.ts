import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { useI18n } from 'vue-i18n';

// 因為引入i18n，只能在 vue 的 setup() 裡使用
export const useLangStore = defineStore('lang', () => {
  // i18n 裡的 locale 是computed
  const { availableLocales, locale } = useI18n();

  const localeList = computed(() => {
    const list = availableLocales.slice(); // 複製 availableLocales 陣列

    // 根據 order 陣列排序 locales
    const order = ['zh-TW', 'zh-CN', 'en-US', 'vi-VN'];
    list.sort((a, b) => {
      return order.indexOf(a) - order.indexOf(b);
    });

    // 將不在 order 陣列中的元素移到最後，同時保持它們的原始順序
    const orderedList = list.filter((item) => order.includes(item));
    const unorderedList = list.filter((item) => !order.includes(item));
    return orderedList.concat(unorderedList);
  });

  function setLang(lang?: string): void {
    if (!lang) return;
    lang = lang.toString();

    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    sessionStorage.setItem('lang', lang);

    locale.value = lang;
  }

  return {
    locale,
    localeList,
    setLang
  };
});
