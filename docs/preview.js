import Vue from 'vue'   
import VueRouter from 'vue-router'
import routes from './router.config'

import App from './PreviewApp.vue'
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

import DemoList from './component/DemoList.vue'
import MobileNav from './component/MobileNav.vue'
import Icon from './component/Icon.vue'

import 'packages/icui-css/src/index.css' 

import iCUi from 'packages'

const components = [Nav, NavLink, Header, Footer, ZanDoc, Block, Content, Container, FooterNav, Simulator, DemoBlock, DocBlock, DemoList, MobileNav, Icon]
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

Vue.use(installComponents)  


const routesConfig = routes(true);
routesConfig.push({
  path: '/',
  component: DemoList.default || DemoList
});

const router = new VueRouter({
  mode: 'history',
  base: '/preview',
  routes: routesConfig
});

Vue.use(iCUi)
Vue.use(VueRouter)

router.beforeEach((to, from, next) => {
  const container = document.querySelector('.examples-container');
  if (container) {
    document.querySelector('.examples-container').scrollTop = 0;
  }
  next()
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})