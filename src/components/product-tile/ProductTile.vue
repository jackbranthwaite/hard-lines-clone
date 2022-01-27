<template>
  <div class="product-tile-container">
    <div class="image-container">
      <img
        src="../../static/brewpack-2021(winter).jpg"
        alt=""
        class="main-image"
      />
    </div>
    <div class="information-container">
      <div class="title-container">
        <p class="title">The Brew Pack!</p>
      </div>
      <div class="price-container">
        <p class="price">$36.00</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
.product-tile-container {
  padding-left: 20px;
  padding-right: 20px;
}
.main-image {
  height: 200px;
  width: 200px;
}
.title {
  font-size: 14px;
}
.price {
  font-size: 14px;
  font-weight: 700;
}
</style>
