// eslint.config.js
import antfu from '@antfu/eslint-config'

export default await antfu(
  {
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    rules: {
      'curly': 'consistent',
      'no-console': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
          message: 'Unexpected property on console object was called',
        },
      ],
    },
  },
)
