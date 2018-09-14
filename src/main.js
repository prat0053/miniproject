// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')

Vue.component('tabs', {
  template: `
      <div>
          <div class="tabs">
            <ul>
              <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
              </li>
            </ul>
          </div>

          <div class="tabs-details">
              <slot></slot>
          </div>
      </div>
  `,

  data () {
    return {tabs: []}
  },

  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
})

Vue.component('tab', {

  template: `

      <div v-show="isActive"><slot></slot></div>

  `,

  props: {
    name: { required: true },
    selected: {default: false}
  },

  data () {
    return {
      isActive: false
    }
  },

  computed: {

    href () {
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  },

  mounted () {
    this.isActive = this.selected
  }
})

new Vue({
  el: '#root'
})

Vue.component('product', {
  template: `
    <div class="product>">
                  <div class="product-image">
                      <img v-bind:src="image">
                  </div>
                  <div class="product-info">
                      <h1>{{product}}</h1>
                      <p v-if="inStock">AVAILIBILITY : In Stock</p>
                      <p v-else>AVAILIBILITY :Out of Stock</p>
                      <P>PRODUCT COE : #879654</P>
                      <P>TAGS : Clasic, Casual V-neck,Loose</P>
                        <P>use ESLint please install eslint by running 'npm install eslint' in the workspace folder
                          Exam_Project<br>
                          or globally using 'npm install -g eslint'. You need to reopen the workspace after installing
                          eslint.</P>
                      <ul>
                          <li v-for="detail in details">{{detail}}</li>
                      </ul>
                      <button v-on:click="addToCart">ADD TO CART</button>
                      <div>
                          <p>Cart({{cart}})</p>
                      </div>
                  </div>
              </div>
        `,
  data () {
    return {
      product: 'AVE CLASSIC SWEATSHIRT',
      image: './assets/images/products/product-1.jpg',
      inStock: true,
      details: [
        'Elasticate cuffs',
        'Caual fit',
        '100% Cotton',
        'Free shipping 4 days delivery'
      ],
      cart: 0
    }
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    }
  }
})
new Vue({
  el: '#pro'
})
