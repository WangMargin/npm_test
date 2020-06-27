<template>
	<div class="top-tips" :class="kidsClass" >
		<h1>这里是toptips 组件</h1>
	</div>
</template>

<script>
	export default {
		name:"toptips",
		props:{
			kidsData:Object
		},
		data(){
			return {
				kidsClass:'warning'
			}
		},
		methods:{
			
		},
		mounted() {
			console.log("【获取当前父组件传递过来的数据】",this.kidsData)
		}
	}
</script>

<style scoped="scoped">
	.top-tips {
		background-color: #ffffff;
		color: #333333;
	}
	.warning {
		background-color: orange;
		color: #ffffff;
	}
	.safe {
		background-color: green;
		color: #ffffff;
	}
</style>
