import './public-path.js'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
    {
        name: 'sub-app1',
	      entry: '//localhost:3012', // 运行微应用的地址
	      container: '#container', // 展示的DOM容器 id
	      activeRule: genActiveRule('/sub-app1'), // 跳转路径
    },{
        name: 'sub-app2',
        entry: '//localhost:3013',
        container: '#container',
        activeRule: genActiveRule('/sub-app2'),
    },
],
{
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterMount: [
      app => {
        console.log('after mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
       // app.render({appContent: '', loading: false});
      },
    ],
  }
  );
// 启动 qiankun
start();

