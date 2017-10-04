export default {
  'loading': r => require.ensure([], () => r(require('./demos/loading.vue')), 'loading.vue'),
  'toast': r => require.ensure([], () => r(require('./demos/toast.vue')), 'toast.vue'),
};
