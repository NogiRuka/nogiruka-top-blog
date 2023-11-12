import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
// const messages = Object.fromEntries(
//   Object.entries(
//     import.meta.glob('./lang/*.y(a)?ml'))
//     .map(([key, value]) => {
//       const yaml = key.endsWith('.yaml')
//       return [key.slice(14, yaml ? -5 : -4), (value as any).default]
//     }),
// )

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages,
})

export default i18n
