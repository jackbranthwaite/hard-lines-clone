<template>
  <header class="header">
    <div class="logo"></div>
    <div class="menu">
      <nuxt-link class="menu-item" to="#">SUBSCRIPTIONS</nuxt-link>
      <menu-dropdown title="SHOP" />
      <nuxt-link class="menu-item" to="#">BOOK A TABLE</nuxt-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '~assets/styles/config';

.header {
  @include type(14px, 18px);

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  max-width: 90vw;
}
.logo {
  background-color: $orange;
  height: 100px;
  width: 100px;
}
.menu-item {
  text-decoration: none;
}
</style>
