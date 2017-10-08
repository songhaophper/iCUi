export default {
  'loading': r => require.ensure([], () => r(require('./demos/loading.vue')), 'loading.vue'),
  'switch-option': r => require.ensure([], () => r(require('./demos/switch-option.vue')), 'switch-option.vue'),
  'toast': r => require.ensure([], () => r(require('./demos/toast.vue')), 'toast.vue'),
  'alert': r => require.ensure([], () => r(require('./demos/alert.vue')), 'alert.vue'),
  'confirm': r => require.ensure([], () => r(require('./demos/confirm.vue')), 'confirm.vue')
};
