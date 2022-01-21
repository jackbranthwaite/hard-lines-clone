<template>
  <div class="product-tile-container">
    <div class="image-container"></div>
    <div class="information-container"></div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
.image-container {
  height: 20vw;
  max-height: 380px;
  max-width: 380px;
  width: 20vw;
}
</style>
