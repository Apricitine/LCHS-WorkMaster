import { createApp, ref, TransitionGroup } from 'vue';
import App from '@/App.vue';
import router from './route/index';
import { createPinia } from 'pinia';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const pinia = createPinia();
const WorkMasterApp = createApp(App);

WorkMasterApp.use(router).use(pinia).use(autoAnimatePlugin);
WorkMasterApp.config.compilerOptions.isCustomElement = (t: string) => {
  return <boolean>t.startsWith("container");
}
WorkMasterApp.mount('#app');