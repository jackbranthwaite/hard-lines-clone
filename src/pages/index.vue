<template>
  <div class="a-div">
    <div class="title-section-container">
      <h1 class="title">Fresh Roasted Coffee</h1>
      <p class="paragraph">
        The very best in speciality coffee, from the fan favourite - House
        Party, to regularly rotating single origin coffees. Buy online and get
        brewing at home. All coffee can be ground to preference!
      </p>
    </div>
    <div class="line-seperation"></div>
    <div class="products-container">
      <product-tile v-for="i in productTotal" :key="i" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import ProductTile from '~/components/product-tile/ProductTile.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProductTile
  },
  setup() {
    const productTotal = ref(36)

    return {
      productTotal
    }
  },
  head: {
    title: 'Hard Lines Coffee'
  }
})
</script>
<style lang="scss" scoped>
@import '~assets/styles/config';

.title-section-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title {
  color: $orange;
}
.paragraph {
  max-width: 30vw;
}
.line-separation {
  background-color: $off--white;
  height: 3px;
  width: 90vw;
}
</style>
