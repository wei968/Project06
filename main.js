// main.js
import { createApp } from 'vue';
import App from './App.vue';

// 引入 Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 的样式

// 引入中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';

// 引入 ECharts
import * as echarts from 'echarts'; // 引入 ECharts

const app = createApp(App);

// 使用 Element Plus，并设置中文语言
app.use(ElementPlus, { locale: zhCn });

// 全局挂载 ECharts
app.config.globalProperties.$echarts = echarts;

// 挂载 Vue 应用
app.mount('#app');
