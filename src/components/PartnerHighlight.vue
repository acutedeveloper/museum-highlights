<template>
  <div class="partner-highlight">
    <div class="partner-highlight__banner">
      <h3>{{ partner }}</h3>
    </div>
    <!-- Display the available information for the highlight -->
      <HighlightsIcon :icon-label="highlightIcon"/>

    <div class="partner-highlight__image-wrapper">
      <button class="partner-highlight__refresh-image-button" @click="refreshImage">Refresh image</button>
      <img ref="highlightImage" class="partner-highlight__highlight-image" src="https://picsum.photos/seed/picsum/600/500" alt="Image"/>
      <svg class="partner-highlight__spinner" width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
        <path
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            class="svg-spinner"/>
      </svg>
    </div>
    <div class="partner-highlight__content">
      <h2>{{ name }}</h2>
      <p>{{ info }}</p>
      <template v-if="Object.keys(metadata).length > 0">
        <div class="spacer-1"></div>
        <h3>Additional Info</h3>
        <ul>
          <li v-for="(value, key) in metadata" :key="key">{{ key }}: {{ value }}</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>

import HighlightsIcon from "./HighlightsIcon.vue";
export default {
  name: 'partnerHighlight',
  components: {
    HighlightsIcon
  },
  mixins: [],
  props: {
    highlightData: Object,
    highlightIcon: String
  },
  data() {
    return {};
  },
  computed: {
    partner() {
      return this.highlightData.partner
    },
    name() {
      return this.highlightData.name || '';
    },
    info() {
      return this.highlightData.info || '';
    },
    date() {
      return this.highlightData.date || '';
    },
    metadata() {
      // We are going to delete standard keys from the main data object to create our metadata object
      const meta = Object.assign({}, this.highlightData);
      delete meta.createdAt;
      delete meta.type;
      delete meta.info;
      delete meta.name;
      delete meta.partner;
      delete meta.image;

      return meta;
    },

  },
  methods: {
    async refreshImage(){
      this.$refs.highlightImage.classList.add('partner-highlight__highlight-image--hidden');

      /*

      try {
        const newImage = await getNewImage();

        // Assuming that the data returned from getNewImage contains a key 'imageUrl'

        this.$refs.highlightImage.src = newImage.imageUrl;
        this.$refs.highlightImage.classList.remove('partner-highlight__highlight-image--hidden');
      } catch (error) {
        // Assume this error will be logged to Sentry
        console.error('partnerHighlight Refresh Image request error', error);
        this.$refs.highlightImage.classList.remove('partner-highlight__highlight-image--hidden');
      }

      */

      // Dummy code to simulate refresh
      setTimeout(() => {
        this.$refs.highlightImage.src = "https://picsum.photos/600/500";
        this.$refs.highlightImage.classList.remove('partner-highlight__highlight-image--hidden');
      }, 500)
    }
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

.spacer-1 {
  height: 1rem;
}

.svg-spinner {
  transform-origin: center;
  animation: spinner .75s infinite linear
}

@keyframes spinner {
  100% {
    transform: rotate(360deg)
  }
}

.partner-highlight {

  position: relative;

  h3 {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 0.5rem;
    border-top: 2px solid #EEEEEE;
    padding-top: 0.5rem;
  }

  &__spinner {
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 24px);
    z-index: 0;
  }

  &__banner {
    background-color: #454545;
    padding: 0.5rem;
    color: #fff;
    h3 {
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  &__icon {
    position: absolute;
    height: 3rem;
    width: 3rem;
    right: -0.5rem;
    top: -0.5rem;
    z-index: 2;
    color: yellow;
  }

  &__image-wrapper {
    aspect-ratio: 16 / 9;
    background-color: hsl(240, 4%, 85%);
    position: relative;
  }

  &__refresh-image-button {
    position: absolute;
    display: block;
    background-color: hsl(250, 84%, 54%);
    transition: background-color ease-in-out 0.3s;
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #FFFFFF;
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid hsl(250, 84%, 67%);
    z-index: 2;

    &:hover {
      background-color: hsl(250, 84%, 38%);
    }
  }

  &__highlight-image {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: opacity ease-in-out 0.3s;
    z-index: 1;

    &--hidden {
      opacity: 0;
    }
  }

  &__content {

    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #DEDEDE;

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

}
</style>
