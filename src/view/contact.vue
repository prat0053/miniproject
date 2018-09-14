<template>
<section>
    <div class="signin_container">
      <div class="signin_cover-image">
          <img src="../assets/images/banner.jpg">
        <div class="signincover_text">
          <h1><b>WEL COME</b> TO AVE</h1>
          <h3>SIGN IN OR REGISTER</h3>
        </div>
      </div>
    </div>
 


  <div class="signin-register-container">
    <div class="signinrow">
            <div class="signincolumn">
          <h3>SIGN IN</h3>
          <form>
            <div class="signcontainer">

              <input type="text" placeholder="Your Email.." name="email" required><br>
              <input type="password" placeholder="Your password" name="psw" required>
            </div>

            <div>
              <button type="submit" class="signbtn">Sign in</button>
              <span class="psw"><a href="#">Forgot your password &rarr;</a></span>
            </div>

          </form>
        </div>
     
     
        <div class="signincolumn">
          <h3>REGISTER</h3>
          <div class="signcontainer">
            <input type="text" placeholder="Your Email" name="email" required>
            <input type="password" placeholder="Your Password" name="psw" required>
            <input type="password" placeholder="Confirm Password" name="psw-repeat" required><br>
            <input type="checkbox">&nbsp; Sign up exclusive updates, discounts, new arrivals, contents, and more!<br><br>
            <button type="submit" class="signbtn">CREATE ACCOUNT</button>
            <div class="privacypolicy">
              <a href="#">By clicking 'Creating Account' you<br> agree to our Privacy Policy &rarr;</a>
            </div>
          </div>
        </div>
         </div>
    </div>
     </section>
    
</template>

<script>
export default {
  name: "contact"
};
</script>