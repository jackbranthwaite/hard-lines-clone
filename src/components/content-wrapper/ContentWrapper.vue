<template>
  <div class="content-wrapper_container">
    <slot />
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
@import '~assets/styles/config';

.content-wrapper_container {
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
</style>
