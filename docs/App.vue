<template>
  <div class="app">
    <zan-doc :simulator="simulator" :config="config">
      <router-view></router-view>
    </zan-doc>
  </div>
</template>

<script>
import 'highlight.js/styles/color-brewer.css';
import docConfig from './doc.config';

export default {
  data() {
    return {
      config: docConfig['zh-CN'],
      simulator: this.getSimulatorPath()
    };
  },
  methods: {
    getSimulatorPath() {
      const dir = this.$route.path.split('/').pop();
      if (dir === 'quickstart') {
        return '/preview';
      } else {
        return `/preview/component/${dir}`;
      }
    }
  }
};
</script>

<style lang="postcss">
.zan-doc-content--quickstart {
  h3:not(:first-of-type) {
    margin-top: 35px;
  }
}
</style>