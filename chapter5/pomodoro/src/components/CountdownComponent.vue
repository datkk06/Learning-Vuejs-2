<template lang='jade'>
  .well
    .pomodoro-timer
      span {{ min | leftpad }}:{{ sec | leftpad }}
</template>

<script>
  // import { getMinutes, getSeconds } from '../vuex/getters'
  import { mapGetters } from 'vuex'
  export default {
    // vuex: {
    //   getters: {
    //     min: getMinutes,
    //     sec: getSeconds
    //   }
    // },
    computed: mapGetters({
      min: 'getMinutes',
      sec: 'getSeconds'
    })
  }
</script>

<style scoped>
</style>
