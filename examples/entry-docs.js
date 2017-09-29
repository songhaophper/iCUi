export default {
  'quickstart': r => require.ensure([], () => r(require('./docs/quickstart.md')), 'quickstart.md'),
  'loading': r => require.ensure([], () => r(require('./docs/loading.md')), 'loading.md'),
};
