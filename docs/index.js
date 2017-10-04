import Vue from 'vue'   
import VueRouter from 'vue-router'
import routes from './router.config'
import App from './App.vue'
import ZanDoc from './component/ZanDoc.vue'
import Nav from './component/Nav.vue'
import NavLink from './component/NavLink.vue'
import Block from './component/Block.vue'
import Header from './component/Header.vue'
import Footer from './component/Footer.vue'
import FooterNav from './component/FooterNav.vue'
import Content from './component/Content.vue'
import Container from './component/Container.vue'
import Simulator from './component/Simulator.vue'
import DocBlock from './component/DocBlock.vue'
import DemoBlock from './component/DemoBlock.vue'
import icui from 'packages'
import 'packages/icui-css/src/index.css'
import isMobile from './is-mobile';
const components = [Nav, NavLink, Header, Footer, ZanDoc, Block, Content, Container, FooterNav, Simulator, DemoBlock, DocBlock]
const installComponents = function (Vue) { 
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) installComponents(window.Vue)
export default {
  installComponents
}
export {
  installComponents
}
Vue.use(icui)
Vue.use(installComponents)  
Vue.use(VueRouter) 

const routesConfig = routes();
routesConfig.push({
  path: '/',
  redirect: '/component/quickstart'
});

const router = new VueRouter({
  mode: 'hash',
  base: '/doc',
  routes: routesConfig
});

router.beforeEach((route, redirect, next) => {
  if (isMobile) {
    window.location.replace('/preview');
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
  window.syncPath();
});

window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App)
})