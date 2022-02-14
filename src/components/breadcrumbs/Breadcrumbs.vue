<template>
  <div class="breadcrumbs_container" v-if="breakApart">
    <ul class="breadcrumbs_list" v-for="(crumb, i) in breakApart" :key="i">
      <li>
        <nuxt-link class="breadcrumb" :to="`/${crumb}`"
          >{{ crumb }}....
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, useRoute, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const params = ref(null)
    const crumbs = ref([])
    const fullPath = route?.value.fullPath

    const breakApart = fullPath.split('/')

    return {
      params,
      crumbs,
      breakApart
    }
  }
})
</script>
<style lang="scss" scoped>
.breadcrumbs_container {
  display: flex;
}
.breadcrumbs_list {
  list-style: none;
}
.breadcrumb {
  text-decoration: none;
}
</style>
