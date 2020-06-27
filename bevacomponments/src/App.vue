<template>
	<div id="app">
		<h1>hello</h1>
		<loading></loading>
		<showtoast></showtoast>
		<toptips></toptips>
	</div>
</template>

<script>
	import beva from "./packages/beva.js"
	export default {
		name: 'App',
		components:{
			"loading":beva.loading,
			"showtoast":beva.showtoast,
			"toptips":beva.toptips
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
