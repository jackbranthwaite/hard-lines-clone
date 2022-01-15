<template>
  <footer class="footer-container">
    <div class="newsletter-container">
      <h2 class="subsrcibe">SIGN UP TO OUR WEEKLY NEWSLETTER</h2>
      <p class="sub-subscribe">
        Get the latest updates, subscriber only deals and really really really
        good stuff!
      </p>
    </div>
    <div class="menu-container">
      <ul v-for="(link, i) in bottomMenuItems" :key="i" class="menu-list">
        <li class="list-item">
          <nuxt-link to="#" class="list-link">{{ link }}</nuxt-link>
        </li>
      </ul>
      <div class="living-wage-container"></div>
    </div>
    <div class="opening-container">
      <div class="opening-one">
        <nuxt-link class="location" to="#"
          >Hard Lines Cafe, St Canna Court CF5 1GX</nuxt-link
        >
        <div class="times">
          Mon - Fri | 8:00–17:00<br />Saturday | 9:00–17:00<br />Sunday |
          9:00–16:00
        </div>
      </div>
      <div class="opening-two">
        <nuxt-link class="location" to="#"
          >Hard Lines Cafe, St Canna Court CF5 1GX</nuxt-link
        >
        <div class="times">
          Mon - Fri | 8:00–17:00<br />Saturday | 9:00–17:00<br />Sunday |
          9:00–16:00
        </div>
      </div>
      <div class="social-container"></div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { bottomMenuItems } from '~/menuItems'

export default defineComponent({
  setup() {},
  data() {
    return {
      bottomMenuItems: {
        type: Array,
        default: () => []
      }
    }
  },
  mounted() {
    this.bottomMenuItems = bottomMenuItems
  }
})
</script>


<style lang="scss" scoped>
@import '~assets/styles/config';

.footer-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  max-width: 1920px;
  padding-left: 90px;
  padding-right: 90px;
  width: 90vw;
}
.newsletter-container {
  padding-right: 50px;
  width: 33%;
}
.menu-container {
  padding-left: 50px;
  width: 33%;
}
.opening-container {
  padding-left: 50px;
  width: 33%;
}
.list-link {
  color: $orange;
  line-height: 2.5;
}
.list-link:hover {
  opacity: 0.6;
}
.location {
  color: $orange;
}
.location:hover {
  opacity: 0.6;
}
.opening-one {
  padding-bottom: 50px;
}
</style>
