<template>
	<div class="beva-loading">
		<h3 class="">这里是的loading组件</h3>
		<img class="loading-icon" src="../../assets/images/loading.png" alt="">
	</div>
</template>

<script>
	export default {
		name: 'loading',
		data() {
			return {

			}
		}
	}
</script>
<style scoped="scoped">
	.beva-loading {
		background-color: rgba(0,0,0,0.7);
		border-radius: 0.4rem;
		color: #ffffff;
		position: fixed;
		z-index: 99;
		width: 7.46rem;
		height: auto;
		padding: 0.8rem;
		text-align: center;
		top: 20vh;
		box-sizing: border-box;
		margin-left: -3.73rem;
		left: 50%;
	}

	.loading-icon {
		width: 4rem;
		height: 4rem;
		/* transform: rotate(50deg); */
		animation: rotatingright 1s linear infinite;
	}
	/*自定义动画类----顺时针旋转（使用这个动画的时候才设置动画执行时间）*/
	@keyframes rotatingright {
		transform-origin: 50% 50%;

		0% {
			transform: rotate(0deg);

		}

		50% {
			transform: rotate(180deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	/*自定义动画类----逆时针旋转（使用这个动画的时候才设置动画执行时间）*/
	@-webkit-keyframes rotatingleft {

		0% {
			-webkit-transform: rotate(0deg);
		}

		50% {
			-webkit-transform: rotate(-180deg);
		}

		100% {
			-webkit-transform: rotate(-360deg);
		}
	}
</style>
