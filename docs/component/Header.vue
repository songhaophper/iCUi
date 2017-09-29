<template>
  <div class="zan-doc-header">
    <div class="zan-doc-header__top">
      <a class="zan-doc-header__logo"></a>
      <ul class="zan-doc-header__top-nav">
        <li v-for="(value, key) in nav">
          <a :href="value" :class="{ active: key === active }">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zan-doc-header',

  props: {
    nav: Object,
    active: String
  }
};
</script>

<style lang="postcss">
@import '../style/variable.css';

.zan-doc-header {
  width: 100%;

  &__top {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 $zan-doc-padding;
    height: $zan-doc-header-top-height;
    line-height: $zan-doc-header-top-height;
    box-shadow: 0 1px 4px rgba(0,0,0,.1);

    &-nav {
      flex: 1;
      text-align: right;

      li {
        display: inline-block;
      }

      a {
        margin: 0 20px;
        font-size: 15px;
        display: block;
        color: $zan-doc-text-color;

        &:hover,
        &.active {
          color: $zan-doc-blue;
        }
      }
    }
  }

  &__logo {
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506656813140&di=16d80d655f27b147de13009154ce32a6&imgtype=0&src=http%3A%2F%2F91.gdown.baidu.com%2Fimg%2F0%2F512_512%2F340319f030fed78b65be049027f43724.png);
    background-size: contain;
    background-repeat: no-repeat;
  }


  &__bottom {
    height: $zan-doc-header-bottom-height;
    line-height: $zan-doc-header-bottom-height;

    &-nav {
      text-align: center;

      li {
        display: inline-block;
      }

      a {
        color: #fff;
        opacity: .8;
        display: block;
        padding: 0 20px;
        font-size: 14px;

        &.active {
          background-color: rgba(255, 255, 255, .1);
        }

        &:hover,
        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
