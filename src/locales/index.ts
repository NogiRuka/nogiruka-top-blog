import type { Locale } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh-CN',
  messages,
})

const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob('./lang/*.yml'))
    .map(([path, loadLocale]) => [path.match(/([\w-]*)\.yml$/)?.[1], loadLocale]),
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>

const availableLocales = Object.keys(localesMap)

console.log(`output->availableLocales`, availableLocales)




