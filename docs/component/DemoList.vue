<template>
  <div class="side-nav">
    <h1 class="zanui-title">iCUi Wap</h1>
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
      padding-top: 60px;
      height: 0;
      overflow: hidden;
      background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506656813140&di=16d80d655f27b147de13009154ce32a6&imgtype=0&src=http%3A%2F%2F91.gdown.baidu.com%2Fimg%2F0%2F512_512%2F340319f030fed78b65be049027f43724.png) center center no-repeat;
      background-size: 60px 60px;
      margin-bottom: 10px;
    }

    .zanui-desc {
      font-size: 14px;
      color: #666;
      margin-bottom: 50px;
    }
  }
</style>
