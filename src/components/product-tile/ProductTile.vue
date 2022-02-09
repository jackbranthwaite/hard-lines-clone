<template>
  <nuxt-link :to="productLink" style="text-decoration: none">
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
  </nuxt-link>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    productLink: {
      type: String,
      default: '/'
    }
  },
  setup() {}
})
</script>

<style lang="scss" scoped>
.main-image {
  height: auto;
  width: 380px;
}
.title {
  font-size: 14px;
  padding-top: 10px;
}
.price {
  font-size: 15px;
  font-weight: 700;
  padding-top: 15px;
}
</style>
