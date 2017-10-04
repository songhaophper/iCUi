<template>
  <transition name="ic-toast-fade">
    <div class="ic-toast-wrapper" v-show="visible">
      <div :class="['ic-toast', 'ic-toast--' + displayStyle]">
        <div v-if="displayStyle === 'text'" class="ic-toast__text">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>

<script>


const TOAST_TYPES = ['text', 'html', 'loading', 'success', 'fail'];
const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading'];

export default {
  name: 'ic-toast',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: value => TOAST_TYPES.indexOf(value) > -1
    },
    message: {
      type: String,
      default: ''
    },
    forbidClick: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    displayStyle() {
      return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    }
  }
};
</script>
