<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar, faDragon } from '@fortawesome/free-solid-svg-icons';

// Add the icon to the library
library.add(faStar, faDragon);

export default {
  name: 'HighlightsIcon',
  props: {
    iconLabel: String,
  },
  components: {
    FontAwesomeIcon,
  },
}
</script>

<template>
  <div class="highlight-icon highlight-icon--space" v-if="iconLabel === 'space'">
    <FontAwesomeIcon icon="star" />
  </div>
  <div class="highlight-icon highlight-icon--dinosaur" v-if="iconLabel === 'dinosaur'">
    <FontAwesomeIcon icon="dragon" />
  </div>
</template>
<style lang="scss" scoped>

.highlight-icon {
  position: absolute;
  z-index: 10;
  right: 0;
  top: 0;

  &--space {
    color: #d1b30e;
    width: 48px;
    height: 48px;
    right: -1rem;
    top: -1rem;
    transform: rotate(30deg);

    .svg-inline--fa {
      width: 100%;
      height: 100%;
    }
  }

  &--dinosaur {
    background-color: #167808;
    border-radius: 50%;
    color: #ffffff;
    width: 48px;
    height: 48px;
    right: -0.5rem;
    top: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .svg-inline--fa {
      width: 60%;
      height: 60%;
    }
  }

}
</style>