<template>
  <div v-if="item" class="dropdown-container">
    <div class="dropdown-title">
      <nuxt-link class="title-link" :to="item.link"
        >{{ item.title }} &#9662;</nuxt-link
      >
      <div v-for="(subLink, i) in item.links" :key="i" class="link-list">
        <ul>
          <li>
            <nuxt-link :to="subLink.link" class="sublink">{{
              subLink.title
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
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
.title-link {
  text-decoration: none;
}
.sublink {
  text-decoration: none;
}
</style>
