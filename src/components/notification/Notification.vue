<template>
  <div class="notification-container">
    <nuxt-link to="#" style="font-weight: 100; text-decoration: none">
      <p class="notification-text">
        🚚 Free Delivery On All Orders Over £30 | 25% Off the first month on all
        coffee subscriptions - Use SAVE25 at checkout!📦
      </p>
    </nuxt-link>
    <button class="close-button" @click="$emit('close')">x</button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
@import '~assets/styles/config';

.notification-container {
  align-items: center;
  background: $orange;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 100vw;
}
.notification-text {
  color: $off--white;
  font-size: 14px;
  margin: 0;
  padding: 0;
}
.close-button {
  cursor: pointer;
  margin-right: 10px;
  position: absolute;
  right: 0;
}
</style>
