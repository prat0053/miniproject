<template>
<div>




     
       <div class="top-brands-vue">
       
         
               
                  <div id="root" class="">

                      <tabs class="">
                        <tab name="POPULAR" :selected="true">
                            <div class="home-mid-nav-vue">
                                <popular></popular>
                         </div>
                        </tab>
                         
                        <tab name="NEW ARRIVALS">
                <div class="home-mid-nav-vue">
                         <figure>
                        <img src="../assets/images/brand-1.jpg">
                        <img src="../assets/images/brand-2.jpg">
                        <img src="../assets/images/brand-3.jpg">
                    </figure>
                </div>
                        </tab>
                        <tab name="BEST SELLERS">
                             <div class="home-mid-nav-vue">
                           <div class="home-categories">
          
            
                <div class="home-categories-flex">
                    <div class="home-categories-flex-image">
                        <img src="../assets/images/man.jpg">
                    </div>
                        <div class="home-categories-flex-text">
                            <h2>MEN'S LOOKBOOK</h2>
                            <p>I think front end development can get away from you easy because you'll
                                usually be
                                working with a framework and
                                your own Javascript code as well as HTML and CSS. </p>
                          <div class="home-categories-flextext-button">
                                   <a href="#">VIEW NOW</a>
                                </div>
                        </div>
                    
                </div>



                <div class="home-categories-flex">
                    <div class="home-categories-flex-image">
                        <img src="../assets/images/woman.jpg">
                    </div>
                        <div class="home-categories-flex-text">
                            <h2>MEN'S LOOKBOOK</h2>
                            <p>I think front end development can get away from you easy because you'll
                                usually
                                be
                                working with a framework and
                                your own Javascript code as well as HTML and CSS. </p>
                           <div class="home-categories-flextext-button">
                                    <span><a href="#">VIEW NOW</a></span>
                                </div>
                        </div>
                   
                </div>

                <div class="home-categories-flex">
                    <div class="home-categories-flex-image">
                        <img src="../assets/images/you.jpg">
                    </div>
                        <div class="home-categories-flex-text">
                            <h2>MEN'S LOOKBOOK</h2>
                            <p>I think front end development can get away from you easy because you'll
                                usually
                                be
                                working with a framework and
                                your own Javascript code as well as HTML and CSS. </p>
                                <div class="home-categories-flextext-button">
                                    <span><a href="#">VIEW NOW</a></span>
                                </div>
                            
                        </div>
                    
                </div>
                        
            </div>
            </div>
                        </tab>
                         <tab name="SPECIAL OFFERS">
                        
                        </tab>
                         <tab name="COMING SOON">
                        
                        </tab>




                      </tabs>

                    </div>
                 
            
         
         </div>

     

 </div>



</template>

<script>
import popular from "@/components/popular.vue";
export default {
  name: "lookbook",
  components: {
    popular
  }
};
</script>