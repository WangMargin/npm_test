<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
		<bevaloading></bevaloading>
		<toptips></toptips>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import beva  from "beva_wangyc"
export default {
  name: 'App',
  components: {
    HelloWorld,
		"bevaloading":beva.loading,
		"toptips":beva.toptips
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
