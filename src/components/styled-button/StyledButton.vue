<template>
  <div class="styled-button_container">
    <button class="styled-button_button" @click="$emit('add-item')">
      {{ title }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {}
})
</script>

<style scoped lang="scss">
@import '~assets/styles/config';

.styled-button_button {
  background-color: $orange;
  border-radius: 4px;
  color: $white;
  cursor: pointer;
  font-weight: 800;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
