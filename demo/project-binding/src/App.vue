<template lang="jade">
  div#app
    ul.nav.nav-tabs(role="tablist")
      li(role="presentation")
        a(href="ID" aria-controls="ID" role="tab", data-toggle="tab") TITLE
    div.tab-content
      div.tab-pane(role="tabpanel" id="ID") SHOPPING LIST COMPONENT
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'

export default {
  components: {
    ShoppingListComponent
  },
  data () {
    return {
      shoppinglists: [
        {
          id: 'groceries',
          title: 'Groceries',
          items: [{text: 'Bananas', checked: false}, {text: 'Apples', checked: false}]
        },
        {
          id: 'clothes',
          title: 'Clothes',
          items: [{text: 'black address', checked: false}, {text: 'all stars', checked: false}]
        }
      ]
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
