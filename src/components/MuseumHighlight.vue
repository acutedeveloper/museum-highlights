<template>
  <div class="museum-highlight">
    <!-- Display the available information for the highlight -->
    <div class="museum-highlight__image-wrapper">
      <img class="museum-highlight__image" src="https://picsum.photos/seed/picsum/600/500" alt="Image"/>
    </div>
    <div class="museum-highlight__content">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
    <div v-if="news">
      Latest {{ name }} news
      <hr>
      {{ news.date }}
    </div>
    <div v-if="quiz">
      <hr>
      Quiz
    </div>
    <h3>Data</h3>
    <ul>
      <li v-for="(value, key) in metadata" :key="key">{{ key }}: {{ value }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'MuseumHighlight',
  components: {},
  mixins: [],
  props: {
    highlightData: Object
  },
  data() {
    return {};
  },
  computed: {
    name() {
      return this.highlightData.name || '';
    },
    description() {
      return this.highlightData.description || '';
    },
    date() {
      return this.highlightData.date || '';
    },
    news() {
      return this.highlightData.news || '';
    },
    quiz() {
      return this.highlightData.quiz || '';
    },
    metadata() {
      // We are going to delete each key from the main data array to create our metadata object
      const meta = Object.assign({}, this.highlightData);
      delete meta.date;
      delete meta.quiz;
      delete meta.name;
      delete meta.description;
      delete meta.news;
      delete meta.id;
      delete meta.image;

      return meta;
    },
    newsDate() {
      // Highlight's news item date
    },
  },
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>
.museum-highlight {
  &__image-wrapper {
    aspect-ratio: 16 / 9;
    background-color: red;
  }

  &__image {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__content {

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
</style>
