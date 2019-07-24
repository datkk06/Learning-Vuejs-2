<template lang="jade">
  div
    h2 {{ title }}
    add-item-component(:items='items')
    items-component(:items='items')
    .footer
      hr
      change-title-component
</template>

<script>
import AddItemComponent from './AddItemComponent'
import ChangeTitleComponent from './ChangeTitleComponent'
import ItemsComponent from './ItemsComponent'

export default {
  components: {
    AddItemComponent,
    ChangeTitleComponent,
    ItemsComponent
  },
  props: ['title', 'items']
}
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>

