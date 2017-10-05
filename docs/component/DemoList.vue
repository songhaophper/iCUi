<template>
  <div class="side-nav">
    <h2 class="zanui-desc">Vue 移动端组件</h2>
    <div class="mobile-navs">
      <template v-for="(item, index) in data">
        <div class="mobile-nav-item" v-if="item.showInMobile" :key="index">
          <mobile-nav v-for="(group, index) in item.groups" :group="group" :base="base" :nav-key="index" :key="index"></mobile-nav>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import docConfig from '../doc.config.js';
import MobileNav from './MobileNav.vue';

export default {
  name: 'demo-list',
  data() {
    return {
      highlights: [],
      navState: [],
      data: docConfig['zh-CN'].nav,
      base: '/component'
    };
  },

  components: {
    MobileNav
  }
};
</script>

<style>
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 15px 20px;
    position: relative;
    z-index: 1;

    .zanui-title,
    .zanui-desc {
      text-align: center;
      font-weight: normal;
      user-select: none;
    }

    .zanui-title {
      
    }

    .zanui-desc {
      font-size: 14px;
      color: #666;
      margin-bottom: 50px;
    }
  }
</style>
