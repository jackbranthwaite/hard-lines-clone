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
    <div class="opening-container"></div>
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
.footer-container {
  display: flex;
}
</style>
