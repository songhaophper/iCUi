<template>
  <transition name="ic-toast-fade">
    <div class="ic-toast-wrapper" v-if="show">
      <div :class="['ic-toast', 'ic-toast--text']">
        <div class="ic-toast__text">{{content}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
const COMPONENT_NAME = 'ic-toast'
export default {
  name: COMPONENT_NAME,
  props: {
    
  },
  data() {
    	return {
				show: false,
				content: '',
				duration: 1500
			}
  },

  computed: {
    
  }
};
</script>
