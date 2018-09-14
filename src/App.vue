<template>

  <div id="app">
   
    <mainheader></mainheader>
   
    <router-view/>
    
    <mainfooter></mainfooter>
   
  </div>
</template>

<script>

import mainheader from '@/components/header.vue';
import mainfooter from '@/components/footer.vue';
import popular from '@/components/popular.vue';

export default {
  name: 'App',
  components: {
    mainheader,
    mainfooter,
    popular
  }
}
</script>

<style>
/* #app {
  /font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
  
} */


</style>

<style>
@import url("https://cdn.jsdelivr.net/npm/vue");
@import url('./assets/css/master.css');
/* @import url('../js/productview.js'); */
@import url('https://www.w3schools.com/w3css/4/w3.css');
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous');
</style>


