# 开发组件上传到 npm 

# 我们以后直接可以用了，简单教程一看就会

##### 摘要

项目的GitHub地址：

## 一. 首先我们需要做好准备工作

* 1. 注册一个 <font color="orange">npm</font> 账号。[点击前往注册](https://www.npmjs.com/) 【注册流程就不给详细赘述了（狗头）】
  2. 保证当前环境下安装了 <font color="orange">vue、webpack、node</font>  ，我们以下的工作将会该环境下进行。【没有安装的朋友就要多几步操作，自行百度走个安装流程了】。我这里用的版本分别为 <font color="orange">【vue 2.9.6】【webpack 4.42.0】【node v11.2.0】</font> 
  3. 创建一个新的基于 <font color="orange">webpack</font> 的vue项目。这个项目将会是我们的组件项目了，下边开始表演。

## 二、创建一个vue组件项目

* 1. 开始创建 <font color="orange">vue init webpack 你的项目名称</font>
  2. 然后一路推进，按需生成项目
  3. 如右图![1593255360(1)](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\1593255360(1).jpg)
  4. 项目初始化完成 <font color="orange">npm install </font> 
  5. 开始开发吧 <font color="orange">npm run dev </font> 

## 三、在项目中建立vue组件

###### 下边是我这里自行建立的组件文件格式

![mulu](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\mulu.png)

###### 组件开发代码示例 以 <font color="orange">【 loading 】 </font> 组件为例

vue

```vue
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
			return {}
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

```

index.js

```javascript
import loading from "./Loading.vue"
export default loading
```



## 四、开发完毕vue组件后，我们需要配置 组件同目录下的<font color="orange">beva.js</font> 

```javascript
import toptips from "./Toptips"
import showtoast from "./ShowToast"
import loading from "./Loading"
let beva = {
	toptips,
	showtoast,
	loading,
}
export default beva
```

其实很简单，就是声明一个变量 beva <font color="orange">【变量可以随意的】 </font>  ，然后把组件都指定到这个<font color="orange">【beva】 </font>变量中。

## 五、配置index.js

###### 还记得之前的 项目根级目录下生成的<font color="orange">【index.js】 </font> 么？

配置这个<font color="orange">【index js】 </font> 更简单，我们直接把第四步 <font color="orange">【beva js】 </font> import 引用过来就可以了！

###### index.js 代码示例

```javascript
import beva from "./src/packages/beva.js"
export default beva
```

此时我们的代码组件代码以及配置文件便开发完毕了。下边要开始上传到 <font color="orange">npm </font> 上边了！

## 六、组件上传至 <font color="orange">npm</font> 上

* 1.首先在<font color="orange">Git bash </font>登陆 <font color="orange">npm </font> 
  * npm login
  * 然后根据提示输入 npm 的信息密码即可

* 2.上传组件包至 <font color="orange">npm </font> 【注意啊：再上传包的时候需要每次更新版本号！！！就在 项目根目录的 package.json 文件中 修改 version 字段即可！！！】
  * npm publish
  * 下图为上传成功展示

![npmpublish](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\npmpublish.jpg)

* 3.【注意注意注意】
  * 这里有一个问题。如果你是新注册的 npm 账号，那么很可能没有激活你注册的账号，这时候就会发生文章最下边的 报错!!!!!!

## 七、分布成功后我们来进行测试一下

* 此时我们需要再新建一个项目【可以参考 `第二步`】

* 新项目创建好后，我们引入我们自己开发的 npm 包包 【没错就是我们的包包，不是MK更不是CK（狗头）】

  *  <font color="orange">npm install beva_wangyc --save </font>

*  然后在新项目中调用 如下图

* ![test](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\test.jpg)

  ![show](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\show.jpg)
## 八、其他问题
  ### 1. 在测试发包的时候发现 报错 403

  ```javascript
  npm ERR! publish Failed PUT 403
  npm ERR! code E403
  npm ERR! you must verify your email before publishing a new package: https://www.npmjs.com/email-edit 
  ```

  需要去验证我们的邮箱，很低级的错误！！！ 我们直接返回npmjs.org 进行一下验证。

  

  

  

  

  

  

  

  

  

  

  

  

  

  