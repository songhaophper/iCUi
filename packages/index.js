import Loading from './loading';
import SwitchOption from './switch-option';
import Toast from './toast';
import Alert from './alert';
import Confirm from './confirm';
import Slider from './slider';
const version = '0.0.1';
const components = [
  Loading,
  SwitchOption,
  Toast,
  Alert,
  Confirm,
  Slider
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
  SwitchOption,
  version,
  Loading,
  Toast,
  Alert,
  Confirm,
  Slider
};
export default {
  install,
  version
};
