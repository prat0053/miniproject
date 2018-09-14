<template>


<div class="mainheader">
    <div class="header-container">
    <div class="header-content">
      <div class="brand">Currency : GBP</div>
      <div class="register_signin">

        <a href=""><router-link to="/contact">Register</router-link></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href=""><router-link to="/contact">Signin</router-link></a>
      
      &nbsp;&nbsp;&nbsp;&nbsp;
      
        <a><i class="fal fa-shopping-cart"></i>Empty</a>
      </div>
    </div>
  </div>

<nav>
    <ul>
      <li><a href="#"><router-link to="/"><b>AVENUE</b> FASHION </router-link></a></li>
    </ul>
  </nav>

  <nav class="headernav-content">
    <ul>

      
      <li>
        <a href="#"> <router-link to="/mens">MENS</router-link></a>
        <ul class="fallback">
          <li><a href="#">Casual</a></li>
          <li><a href="#">Hoodies & Sweatshirts</a></li>
          <li><a href="#">Polo Shirts</a></li>
        </ul>
      </li>
      <li>
        <a href="#"><router-link to="/womens">WOMENS</router-link></a>
        <ul class="fallback">
          <li><a href="#">Jackets</a></li>
          <li><a href="#"></a>Casual</li>
          <li><a href="#">Polo Shirts</a></li>
          <li><a href="#">Shirts</a></li>
        </ul>
      </li>
      <li><a href="#"><router-link to="/brand">THE BRAND</router-link></a></li>
      <li><a href="#"><router-link to="/localstores">LOCAL STORES</router-link></a></li>
      <li><a href="#"> <router-link to="/lookbook">LOOK BOOK</router-link></a></li>
      <li><a> <input type="text" name="Search" placeholder="Search"></a></li>
    

    </ul>
  </nav>

    <router-link to="/product"></router-link> 
    <router-link to="/contact"></router-link>
     
   
    <a href=""></a>
</div>


    
</template>

<script>
export default {
    
    
    name : 'mainheader',
    
}
</script>
