<template>
  <span>
    <button :disabled='isStarted && !isPaused' @click="start">
      <i class="glyphicon glyphicon-play"></i>
    </button>
    <button :disabled='isPaused || !isStarted' @click="pause">
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button :disabled='!isStarted' @click="stop">
      <i class="glyphicon glyphicon-stop"></i>
    </button>
  </span>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'
  // import { start, pause, stop } from '../vuex/actions'
  // import { isStarted, isStopped, isPaused } from '../vuex/getters'
  export default {
    // vuex: {
    //   getters: {
    //     isStarted, isStopped, isPaused
    //   },
    //   actions: {
    //     start, pause, stop
    //   },
    // },
    computed: mapGetters(['isStarted', 'isStopped', 'isPaused']),
    methods: mapActions(['start', 'stop', 'pause'])
  }
</script>

<style scoped>
  button:disabled i {
    color: gray;
  }
</style>
