<template>
  <div class="breadcrumbs_container" v-if="params">
    <ul></ul>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  useRoute,
  useRouter
} from '@nuxtjs/composition-api'
import { ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const params = ref(null)

    const crumbs = computed(() => {
      const fullPath = route.value?.fullPath
      params.value = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')

      return crumbs
    })

    return {
      params
    }
  }
})
</script>
