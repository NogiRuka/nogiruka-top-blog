// uno.config.ts
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  rules: [['text-nowrap', { 'text-wrap': 'nowrap' }]],
  shortcuts: [
    // shortcuts to multiple utilities
    ['border-test', 'border-1 border-red border-solid rounded-lg'],
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        icon: FileSystemIconLoader('./src/assets/svg', (svg) => svg.replace(/#FFF/, 'currentColor')),
      },
      scale: 1.5,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
