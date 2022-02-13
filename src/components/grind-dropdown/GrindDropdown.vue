<template>
  <div class="grind-dropdown_wrapper">
    <p class="grind-dropdown_label">{{ label }}</p>
    <div class="grind-dropdown_container">
      <div class="grind-dropdown_title_container">
        <button class="grind-dropdown_title_button" @click="openDropdown">
          <p class="grind-dropdown_title_text">{{ title }}</p>
          <i class="arrow" :class="open ? 'up' : 'down'"></i>
        </button>
      </div>
      <div v-if="open" class="grind-dropdown_content_container">
        <ul>
          <li>Espresso/Whole Beans</li>
          <li>Espresso/Espresso</li>
          <li>Espresso/Stovetop</li>
          <li>Filter/Whole Beans</li>
          <li>Filter/V60</li>
          <li>Filter/Aeropress</li>
          <li>Filter/Cafeterie</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  setup() {
    const open = ref(false)
    const openDropdown = () => {
      open.value = !open.value
    }

    return {
      open,
      openDropdown
    }
  }
})
</script>

<style lang="scss" scoped>
.grind-dropdown_wrapper {
  padding-bottom: 40px;
  padding-top: 40px;
}
.grind-dropdown_container {
  align-items: center;
  border: 1px solid #000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  width: 240px;
}
.grind-dropdown_label {
  font-size: 22px;
}
.grind-dropdown_title_text {
  padding-right: 20px;
}
.grind-dropdown_title_button {
  align-items: center;
  cursor: pointer;
  display: flex;
}
.arrow {
  border: solid #000;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 4px;
}
.up {
  transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
}
li {
  border-radius: 4px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #f1f1f1;
  }
}
</style>
