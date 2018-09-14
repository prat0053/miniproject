// Vue.component('product', {
//   template: `
//     <div class="product>">
//                   <div class="product-image">
//                       <img v-bind:src="image">
//                   </div>
//                   <div class="product-info">
//                       <h1>{{product}}</h1>
//                       <p v-if="inStock">AVAILIBILITY : In Stock</p>
//                       <p v-else>AVAILIBILITY :Out of Stock</p>
//                       <P>PRODUCT COE : #879654</P>
//                       <P>TAGS : Clasic, Casual V-neck,Loose</P>
  
//                       <P>use ESLint please install eslint by running 'npm install eslint' in the workspace folder
//                           Exam_Project
//                           or globally using 'npm install -g eslint'. You need to reopen the workspace after installing
//                           eslint.</P>
//                       <ul>
//                           <li v-for="detail in details">{{detail}}</li>
//                       </ul>
//                       <button v-on:click="addToCart">ADD TO CART</button>
//                       <div>
//                           <p>Cart({{cart}})</p>
//                       </div>
//                   </div>
//               </div>
    
//     `,
//   data () {
//     return {
//       product: 'AVE CLASSIC SWEATSHIRT',
//       image: '../Exam_Project/images/products/product.jpg',
//       inStock: true,
//       details: [
//         'Elasticate cuffs',
//         'Caual fit',
//         '100% Cotton',
//         'Free shipping 4 days delivery'
//       ],

//       cart: 0
//     }
//   },
//   methods: {
//     addToCart: function () {
//       this.cart += 1
//     }
//   }
// }),
// var app = new Vue({
//     el: "#app",
// });
