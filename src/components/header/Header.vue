<template>
  <header class="header">
    <div class="logo">
      <img
        src="../../assets/images/logo.jpg"
        alt="Logo for hard lines coffee"
      />
    </div>
    <div class="menu">
      <nuxt-link class="menu-item" to="#">SUBSCRIPTIONS</nuxt-link>
      <div v-for="item in menuItems" :key="item" class="dropdown-container">
        <menu-dropdown :item="item" />
      </div>

      <nuxt-link class="menu-item" to="#">BOOK A TABLE</nuxt-link>
    </div>
  </header>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { menuItems } from '~/menuItems.js'

export default defineComponent({
  data() {
    return {
      menuItems
    }
  },
  mounted() {
    this.menuItems = menuItems
  }
})
</script>


<style lang="scss" scoped>
@import '~assets/styles/config';

.header {
  @include type(14px, 18px);

  align-items: center;
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
.menu {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.logo {
  height: auto;
  max-width: 219px;
}
.menu-item {
  text-decoration: none;
}
</style>
