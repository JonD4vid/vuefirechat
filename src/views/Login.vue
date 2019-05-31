<template>
  <div id="app">
    <h3>Plase Login with your google account to continue</h3>
    <button @click="login">Login with google</button>
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
export default {
    methods:{
        login(){
            var provider= new firebase.auth.GoogleAuthProvider(); 
       
       
       firebase.auth().signInWithPopup(provider).then(result =>{
           var token = result.credential.accessToken;
           var user = result.user;

this.$router.push('/')

       }).catch(function(error) {
           var errorCode = error.code;
           var errorMessage= error.message;
           var email = error.email;
           var credential = error.credential;

       })
       }

       }
    }

</script>


