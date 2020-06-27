<template>
	<div class="show-toast" v-if="statue">
		<img class="icon" :src="icon" alt="">
		<p class="des" v-if="des">{{des}}</p>
	</div>
</template>

<script>
	export default {
		name: "showtoast",
		props:{
			config:Object
		},
		data() {
			return {
				icon:require("../../assets/images/success.png"), // 展示图片 默认为success 
				des:'', // 默认文字说明 默认为空
				time:1500,
				statue:true,
			}
		},
		methods:{
			handleShowToast(config){	
				console.log(config)
				// return
				if(config){
					// icon
					if(config.icon == undefined||config.icon == ''||config.icon =='success'){
						this.$data.icon = require("../../assets/images/success.png")
					}else if(config.icon =='fail'){
						this.$data.icon = require("../../assets/images/fail.png")
					}else{
						this.$data.icon = config.icon
					}
					// des
					if(config.des==undefined||config.des==" "){
						this.$data.des = ""
					}else{
						this.$data.des = config.des
					}
					// time
					if(config.time==""||config.time==undefined||config.time==null){
						this.$data.time = 1500
					}else{
						this.$data.time = config.time
					}
				}
				let that = this
				setTimeout(res=>{
					that.$data.statue = false
					console.log("toast 隐藏了")
				},that.$data.time)
			}
		},
		mounted() {
			this.handleShowToast(this.config)			
		}
	}
</script>

<style scoped="scoped">
	.show-toast {
		position: fixed;
		width: 6.66rem;
		height: auto;
		background-color: rgba(0,0,0,0.8);
		border-radius: 0.4rem;
		left: 50%;
		margin-left: -3.33rem;
		top: 40vh;
		padding:0.8rem 0.53rem;
		box-sizing: border-box;
		color: #ffffff;
		text-align: center;
	}
	.icon {
		width: 3.2rem;
		height: 3.2rem;
		margin: 0 auto;
		display: block;
	}
	.des {
		font-size: 0.74rem;
		margin-top: 0.53rem;
		width: 100%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>
