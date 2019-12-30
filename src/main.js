/**
 * 入口文件(清单文件)
 * 
 */
// 全局模块
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局配置
Vue.config.productionTip = false

// 全局样式
  // 重置样式
  import 'normalize.css'
  // 自定义全局样式
  import '@/assets/styles/common.less'

// Vue插件安装
Vue.use(ElementUI); // 参数1类型: obj/func


// 初始化全局实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
