import { createApp } from 'vue';
import App from './App.vue';
import router from './route/index';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUoopz44L_t9ugGvg3cUo7uEVg0zwcTx4",
  authDomain: "lchs-workmaster.firebaseapp.com",
  projectId: "lchs-workmaster",
  storageBucket: "lchs-workmaster.appspot.com",
  messagingSenderId: "746712589995",
  appId: "1:746712589995:web:131506c2bbfbe59b9c39ee",
  measurementId: "G-QCK7E23BGH"
};

const GoogleContextApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(GoogleContextApp);


const WorkMasterApp = createApp(App);
WorkMasterApp.mount('#app');
WorkMasterApp.use(router);
