<template>
  <div class="separation-line"></div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
@import '~assets/styles/config';

.separation-line {
  background-color: #f0efe5;
  height: 2px;
  justify-self: center;
  margin-bottom: 25px;
  margin-top: 25px;
  width: 90vw;
  z-index: 100;
}
</style>
