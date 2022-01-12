<template>
  <div class="dropdown-container">
    <div class="dropdown-title">
      <nuxt-link class="title-link" :to="titleLink"
        >{{ title }} &#9662;</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    contents: {
      type: Array,
      default: () => []
    },
    titleLink: {
      type: String,
      default: '#'
    }
  },
  setup() {}
})
</script>

<style lang="scss" scoped>
.title-link {
  text-decoration: none;
}
</style>
