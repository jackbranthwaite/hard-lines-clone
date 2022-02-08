<template>
  <div class="homepage-container">
    <div class="title-section-container">
      <h1 class="title">Freshly Roasted Coffee</h1>
      <p class="paragraph">
        The very best in speciality coffee, from the fan favourite - House
        Party, to regularly rotating single origin coffees. Buy online and get
        brewing at home. All coffee can be ground to preference!
      </p>
    </div>
    <div class="separation-line-container">
      <separation-line />
    </div>
    <div class="products-container">
      <product-tile />
      <product-tile />
      <product-tile />
      <product-tile />
      <product-tile />
      <product-tile />
      <product-tile />
      <product-tile />
      <product-tile />
      <product-tile />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import ProductTile from '~/components/product-tile/ProductTile.vue'
import SeparationLine from '~/components/seperation-line/SeparationLine.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProductTile,
    SeparationLine
  },
  head: {
    title: 'Hard Lines Coffee'
  }
})
</script>
<style lang="scss" scoped>
@import '~assets/styles/config';

.homepage-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  max-width: 1920px;
  padding-left: 30px;
  padding-right: 30px;
  width: 90vw;
  @include tablet {
    padding-left: 50px;
    padding-right: 50px;
  }
  @include xxlarge {
    padding-left: 90px;
    padding-right: 90px;
  }
}
.title-section-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
}
.title {
  color: $orange;
  font-size: 32px;
  font-weight: 900;
  margin: 0;
}
.paragraph {
  font-size: 14px;
  max-width: 35vw;
  text-align: center;
}
.separation-line-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.products-container {
  column-gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;

  @include xlarge {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include xxlarge {
    column-gap: 60px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 60px;
  }
}
</style>
