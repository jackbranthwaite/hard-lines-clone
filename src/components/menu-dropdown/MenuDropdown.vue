<template>
  <div v-if="item" class="dropdown-container">
    <div class="dropdown-title">
      <nuxt-link class="title-link" :to="item.link"
        >{{ item.title }} &#9662;</nuxt-link
      >
    </div>

    <ul class="link-list">
      <li v-for="(subLink, i) in item.links" :key="i">
        <nuxt-link :to="subLink.link" class="sublink">{{
          subLink.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style lang="scss" scoped>
.dropdown-container {
  display: inline-block;
  position: relative;
}
.title-link {
  text-decoration: none;
}
.sublink {
  text-decoration: none;
}
ul {
  height: 0;
  opacity: 0;
  position: absolute;
  transition: all ease 0.5s;
}
/* stylelint-disable no-descending-specificity */
.dropdown-container:hover ul {
  height: 200px;
  opacity: 1;
}
</style>
