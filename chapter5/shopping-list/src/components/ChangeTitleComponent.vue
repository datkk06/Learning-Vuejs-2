// <template lang="jade">
//   div
//     em Change the title of your shopping list here
//     input(v-model='title' @keyup='tryChangeTitle')
// </template>

// <script>
//   import { changeTitle } from '../vuex/actions'

//   export default {
//     vuex: {
//       actions: {
//         changeTitle
//       }
//     },
//     methods: {
//       tryChangeTitle() {
//         this.changeTitle(this.title, this.id)
//       }
//     },
//     props: ['id', 'title']
//   }
// </script>

<template>
  <div>
    <em>Change Title of your shopping</em>
    <input type="text" :value="title" @input="onInput({ title: $event.target.value, id: id})">
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'id'],
  methods: mapActions({
    onInput: 'changeTitle'
  })  
}
</script>

