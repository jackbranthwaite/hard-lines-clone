<template>
  <div class="notification-header-container">
    <notification
      v-if="!notificationClicked"
      @close="notificationClicked = true"
    />
    <content-wrapper>
      <header class="header">
        <div class="logo">
          <nuxt-link to="/">
            <img
              src="../../assets/images/logo.jpg"
              alt="Logo for hard lines coffee"
            />
          </nuxt-link>
        </div>
        <div class="menu">
          <nuxt-link class="menu-item" to="#">SUBSCRIPTIONS</nuxt-link>
          <div v-for="(item, key) in menuItems" :key="key" class="menu-item">
            <menu-dropdown :item="item" />
          </div>
          <nuxt-link class="menu-item" to="#">BOOK A TABLE</nuxt-link>
          <nuxt-link to="#" class="sign-in">SIGN IN</nuxt-link>
        </div>
      </header>
    </content-wrapper>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ContentWrapper from '../content-wrapper/ContentWrapper.vue'
import MenuDropdown from '../menu-dropdown/MenuDropdown.vue'
import Notification from '../notification/Notification.vue'
import { menuItems } from '~/menuItems.js'

export default defineComponent({
  components: {
    MenuDropdown,
    Notification,
    ContentWrapper
  },
  data() {
    return {
      menuItems,
      notificationClicked: false
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
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  max-width: 1920px;
}
.menu {
  align-items: center;
  display: flex;
}
.logo {
  height: auto;
  max-width: 219px;
}
.menu-item {
  font-size: 14px;
  padding-right: 15px;
  text-decoration: none;
}
.sign-in {
  align-self: center;
  color: $orange;
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
}
</style>
