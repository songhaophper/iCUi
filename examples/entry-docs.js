export default {
  'quickstart': r => require.ensure([], () => r(require('./docs/quickstart.md')), 'quickstart.md'),
  'loading': r => require.ensure([], () => r(require('./docs/loading.md')), 'loading.md'),
  'toast': r => require.ensure([], () => r(require('./docs/toast.md')), 'toast.md'),
  'alert': r => require.ensure([], () => r(require('./docs/alert.md')), 'alert.md'),
};
