<template>
  <nav class="global-navbar">
    <div class="global-navbar__logo">
      <div>
        <FontAwesomeIcon icon="earth-africa"/>
      </div>
      <div>Natural History Museum</div>
    </div>

    <div class="global-navbar__menu">
      <FontAwesomeIcon icon="bars"/>
    </div>
  </nav>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';

// Add the icon to the library
library.add(faBars, faEarthAfrica);

export default {
  name: "GlobalNavigation",
  components: {
    FontAwesomeIcon,
  }
}
</script>
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