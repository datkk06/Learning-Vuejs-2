<template lang="jade">
  div#app.container
    h2
      span {{ 'Pomodoro' | uppercase | addspace }}
      controls-component
    state-title-component(v-bind:isworking='isworking')
    countdown-component
    kittens-component(v-show='!isworking' transition='expand')
</template>

<script>
import ControlsComponent from './components/ControlsComponent'
import CountdownComponent from './components/CountdownComponent'
import KittensComponent from './components/KittensComponent'
import StateTitleComponent from './components/StateTitleComponent'
import store from './vuex/store'
import { isWorking } from './vuex/getters'
import { mapGetters } from 'vuex'

export default {
  store,
  components: {
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent
  },
  vuex: {
    getters: {
      isworking: isWorking
    }
  },
  computed: mapGetters({
    isWorking: 'isWorking'
  }),
  store
}
</script>

<style scoped>
  /* always present */
  .expand-transition {
    transition: all .5s ease;
    overflow: hidden;
  }

  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
</style>
