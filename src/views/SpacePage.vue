<template>
  <div class="space-page">

    <h1 class="space-page__title">
      Space
    </h1>

    <!-- Add the museum highlight cards based on the data provided below -->
    <div class="space-page__highlights-grid">
      <div v-for="highlight in getHighlightsAndPartnersData"
                :key="highlight.name">
              <MuseumHighlight
                  v-if="highlight.type === 'highlight'"
                :highlightData="highlight"
                highlightIcon="space"
              />
              <PartnerHighlight
                v-if="highlight.type === 'partner'"
                :highlightData="highlight"
                highlightIcon="space"
                />
      </div>

    </div>

  </div>
</template>

<script>

import MuseumHighlight from "../components/MuseumHighlight.vue";
import _ from "lodash";
import PartnerHighlight from "../components/PartnerHighlight.vue";

export default {
  name: 'SpacePage',
  components: {
    PartnerHighlight,
    MuseumHighlight,
  },
  mixins: [],
  props: {},
  data() {
    return {
      spaceHighlights: [
        {
          date: '2020-04-20 12:20:00',
          description: 'Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.',
          id: 1,
          image: '',
          name: 'Asteroids',
        },
        {
          date: '2020-05-20 15:50:00',
          description: 'A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
          id: 9,
          image: '',
          name: 'Comets',
        },
        {
          date: '2020-05-01 9:22:00',
          description: 'The term planet is ancient, with ties to history, astrology, science, mythology, and religion.',
          id: 7,
          image: '',
          name: 'Planets',
          news: {
            date: '2020-08-18 18:00:00',
            title: 'Attend our talk about Jupiter with Dr. Hogarth',
          },
          quiz: 'https://planetquiz.space',
        },
        {
          date: '2020-07-05 4:10:00',
          description: 'A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.',
          id: 12,
          image: '',
          name: 'Meteor showers',
          news: {
            title: 'The Lyrids will peak at on April 21-22 2021, at night',
          }
        },
      ],
      spacePartners: {
        observatory: {
          createdAt: '2020-06-01 11:45:00',
          info: 'The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.',
          image: '',
          name: 'Mauna Kea Observatories',
        },
      },
    };
  },
  computed: {
    // Merge data and partners API
    getHighlightsAndPartnersData() {

      /*
      * We are going to merge the highlights and partners data arrays
      *
      * The final output I would like is:
      *
      * [{
      *   type: highlight,
      *   data: {...highlight data}
      * },{
      *   type: partner,
      *   data: {...partner data}
      * }]
      *
      * We're adding a new 'type' property to allow us to switch components
      * */

      const newHighlightsArray = _.orderBy(this.spaceHighlights, ['date'], ['desc']).map((highlight) => {
        const objectWithType = {
          type: 'highlight', ...highlight
        }
        return objectWithType;
      })

      const partnersKeysArray = Object.keys(this.spacePartners);
      const newPartnersArray = partnersKeysArray.map((partner) => {
        const newPartnerObject = {
          type: 'partner', partner, ...this.spacePartners[partner]
        }

        // Cleaning up the keys for easier sorting
        newPartnerObject.date = newPartnerObject.createdAt
        delete newPartnerObject.createdAt

        return newPartnerObject;
      })

      const combinedDataArray = [...newPartnersArray, ...newHighlightsArray]

      const orderedCombinedDataArray = _.orderBy(combinedDataArray, ['date'], ['desc'])

      return orderedCombinedDataArray;
    }
  },
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>
.space-page {

  padding: 1rem;

  &__title {
    color: #2c3791;
    font-size: 24px;
    font-weight: 600;
  }

  &__highlights-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 425px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>