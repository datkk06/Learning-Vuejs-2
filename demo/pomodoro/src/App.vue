<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <controls-component></controls-component>
    <state-title-component></state-title-component>
  </div>
</template>

<script>
import ControlsComponent from './components/ControlsComponent'
import KittensComponent from './components/KittensComponent'
import StateTitleComponent from './components/StateTitleComponent'

export default {
  name: 'App',
  components: {
    ControlsComponent,
    KittensComponent,
    StateTitleComponent
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
