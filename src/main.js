import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


  var firebaseConfig = {
    apiKey: "AIzaSyD5zrqbOKdUCuzBbqc5_2BXX1fgfi45BI8",
    authDomain: "vuefirechat-4d09d.firebaseapp.com",
    databaseURL: "https://vuefirechat-4d09d.firebaseio.com",
    projectId: "vuefirechat-4d09d",
    storageBucket: "vuefirechat-4d09d.appspot.com",
    messagingSenderId: "402484501831",
    appId: "1:402484501831:web:85f25ac84e4add30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

window.db= db;



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
