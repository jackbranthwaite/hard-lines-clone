<template>
  <content-wrapper>
    <div class="product-page_container">
      <div class="product-page_breadcrumb_container">
        <breadcrumbs />
      </div>
      <div class="product-page_product-section_container">
        <div class="product-page_image_container">
          <img
            src="../../static/brewpack-2021(winter).jpg"
            alt=""
            class="main-image"
          />
        </div>
        <div class="product-page_product_container">
          <div class="product-page_product_title">The Brew Pack!</div>
          <div class="product-page_product_price">$36.00</div>
          <div class="product-page_product_grind-container">
            <grind-dropdown title="Select Roast/Grind" label="Roast/Grind:" />
          </div>
          <div class="product-page_product_amount-container">
            <!-- Build a simple select field -->
          </div>
          <styled-button title="ADD TO CART" @add-item="addToCart" />
          <div class="product-page__product_description">
            <p class="">
              The Hard Lines brew Pack is here! 4 x 250g single origins coffee
              delivered to your door. A great intro to a range of different
              coffees and tasting notes. Share with the house or guzzle them for
              yourself! Enjoy! <br /><br />This pack contains.<br /><br />House
              Party - Brazil Fazenda do Salto- The house roast and the fan
              favourite! <br /><br />Ethiopia Sawana Kebele - Watermelon
              Bubblegum! <br /><br />The Big Blend- Big sticky toffee and apple
              notes! <br /><br />Pery Chilcon Flores - Orange Blossom & Red
              Berries!
            </p>
          </div>
        </div>
      </div>
      <div class="product-page_also_container">
        <div class="product-page_also_title">You might also like</div>
        <div class="product-page_also_sub-container">
          <product-tile />
          <product-tile />
        </div>
      </div>
    </div>
  </content-wrapper>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import Breadcrumbs from '~/components/breadcrumbs/Breadcrumbs.vue'
import ContentWrapper from '~/components/content-wrapper/ContentWrapper.vue'
import GrindDropdown from '~/components/grind-dropdown/GrindDropdown.vue'
import ProductTile from '~/components/product-tile/ProductTile.vue'
import StyledButton from '~/components/styled-button/StyledButton.vue'

export default defineComponent({
  components: {
    ContentWrapper,
    StyledButton,
    GrindDropdown,
    ProductTile,
    Breadcrumbs
  },
  setup() {
    const cart = ref(false)
    const addToCart = () => {
      cart.value = true
      console.log('Added to cart - link me up!')
    }

    return {
      cart,
      addToCart
    }
  }
})
</script>
<style lang="scss" scoped>
@import '~assets/styles/config';

.product-page_product-section_container {
  display: flex;
  width: 100%;
}
.product-page_image_container {
  margin-top: 50px;
  width: 40%;
}
.product-page_product_container {
  padding-left: 42px;
  padding-top: 50px;
  width: 60%;
}
.product-page_also_container {
  padding-top: 50px;
}
.product-page_product_title {
  font-size: 30px;
  font-weight: 900;
}
.product-page_product_price {
  color: $orange;
  font-size: 22px;
  padding-top: 40px;
}
.product-page_also_title {
  font-size: 24px;
  font-weight: 900;
}
.product-page_also_sub-container {
  column-gap: 30px;
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 30px;
  row-gap: 30px;

  @include xlarge {
    column-gap: 60px;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 60px;
  }
  @include xxlarge {
    column-gap: 60px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 60px;
  }
}
</style>
