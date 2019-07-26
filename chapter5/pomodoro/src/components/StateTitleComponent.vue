<template lang='jade'>
  h3 {{ isworking ? workingtitle : restingtitle }}
</template>

<script>
  import { isWorking } from '../vuex/getters'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        workingtitle: 'Work!',
        restingtitle: 'Rest!'
      }
    },
    // vuex: {
    //   getters: {
    //     isworking: isWorking
    //   }
    // },
    computed: mapGetters({
      isWorking: 'isWorking'
    })
  }
</script>

<style scoped>
</style>

