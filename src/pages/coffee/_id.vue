<template>
  <content-wrapper>
    <div class="product-page_container">
      <div class="product-page_breadcrumb_container">
        <p>breadcrumb</p>
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
            <grind-dropdown title="Select Roast/Grind" />
          </div>
          <div class="product-page_product_amount-container">
            <!-- Build a simple select field -->
          </div>
          <styled-button title="ADD TO CART" @add-item="addToCart" />
          <div class="product-page__product_description">
            The Hard Lines brew Pack is here! 4 x 250g single origins coffee
            delivered to your door. A great intro to a range of different
            coffees and tasting notes. Share with the house or guzzle them for
            yourself! Enjoy! This pack contains. House Party - Brazil Fazenda do
            Salto- The house roast and the fan favourite! Ethiopia Sawana Kebele
            - Watermelon Bubblegum! The Big Blend- Big sticky toffee and apple
            notes! Pery Chilcon Flores - Orange Blossom & Red Berries!
          </div>
        </div>
      </div>
      <div class="product-page_also_container">
        <div class="product-page_also_title">You might also like</div>
      </div>
    </div>
  </content-wrapper>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import ContentWrapper from '~/components/content-wrapper/ContentWrapper.vue'
import GrindDropdown from '~/components/grind-dropdown/GrindDropdown.vue'
import StyledButton from '~/components/styled-button/StyledButton.vue'

export default defineComponent({
  components: {
    ContentWrapper,
    StyledButton,
    GrindDropdown
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
