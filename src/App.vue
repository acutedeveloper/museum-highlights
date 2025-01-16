<script setup>
import SpacePage from "./views/SpacePage.vue";
import GlobalNavigation from "./components/GlobalNavigation.vue";
</script>

<template>
  <GlobalNavigation/>
  <SpacePage/>
</template>

<style lang="scss" scoped>
.global-navbar {
  display: flex;
  justify-content: space-between;
  background-color: #cdcdcd;
  padding: 1rem 1rem;
  font-size: 2rem;
  color: #454545;

  &__logo {
    display: flex;
    gap: 1rem;
  }
}
</style>
