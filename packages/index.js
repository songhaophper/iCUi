import Loading from './loading';
import Toast from './toast';
const version = '0.0.1';
const components = [
  Loading,
  Toast
];
const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Loading,
  Toast
};
export default {
  install,
  version
};
