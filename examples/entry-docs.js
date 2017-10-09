export default {
  'quickstart': r => require.ensure([], () => r(require('./docs/quickstart.md')), 'quickstart.md'),
  'loading': r => require.ensure([], () => r(require('./docs/loading.md')), 'loading.md'),
  'switch-option': r => require.ensure([], () => r(require('./docs/switch-option.md')), 'switch-option.md'),
  'radio': r => require.ensure([], () => r(require('./docs/radio.md')), 'radio.md'),
  'toast': r => require.ensure([], () => r(require('./docs/toast.md')), 'toast.md'),
  'alert': r => require.ensure([], () => r(require('./docs/alert.md')), 'alert.md'),
  'confirm': r => require.ensure([], () => r(require('./docs/confirm.md')), 'confirm.md'),
  'slider': r => require.ensure([], () => r(require('./docs/slider.md')), 'slider.md'),
  'qrcode': r => require.ensure([], () => r(require('./docs/qrcode.md')), 'qrcode.md'),
};
