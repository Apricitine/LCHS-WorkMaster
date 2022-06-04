import { createApp } from 'vue';
import App from './App.vue';

const WorkMasterApp = createApp(App);

WorkMasterApp.config.errorHandler = (error:any):void => {
  console.error("c% color: red;", "Oh crap. Something happened... :(");
}
WorkMasterApp.mount('#app');
