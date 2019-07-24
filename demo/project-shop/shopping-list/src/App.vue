<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h2>{{ title }}</h2>
    <add-item-component></add-item-component>
    <items-component :items="items"></items-component>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<script>
import AddItemComponent from './components/AddItemComponent'
import ItemsComponent from './components/ItemsComponent'
import ChangeTitleComponent from './components/ChangeTitleComponent'

var items = [{text: 'Banana', checked: true},
              {text: 'Apples', checked: false}]

export default {
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
  },
  data () {
    return {
      items: this.items
    }
  },
  methods: {
    addItem: function () {
      var text;
      text = this.text.trim();
      this.items.push({
        text: text,
        checked: false
      })
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
