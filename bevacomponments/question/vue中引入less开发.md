### vue中引入less开发 按照文档设置成功还是报错 【@ ./node_modules/vue-style-loader!】

##### 一、准备条件 npm 一下 同时npm less 和 less-loader

```javascript
npm install less less-loader --save
```

##### 二、将 less 直接引入style

```css
<style lang="less" > </style>
```

##### 三、问题

 <font color="#ff6767"> `在开发的过程中发现一个问题，在成功 npm install 后发现，总是在报错，一直显示style-css 错误 `</font>

如图

![question(E:\学习发布自己开发的组件到npm上边\bevacomponments\question\question(1).png)](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\images\question(1).png)

之后调研挖掘后发现，好像是因为npm的两个版本和vue中的style-css解析冲突了。找到问题解决问题！

###### 解决问题

我们直接替换了 less-loader 的版本，使用其之前的比较老的稳定版本 4.1.0 
我们使用npm 直接进行替换指定版本即可： npm install less-loader@4.1.0

![question(E:\学习发布自己开发的组件到npm上边\bevacomponments\question\question(2).png)](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\images\question(2).png)

替换完成后如果还不行，那么我们直接 重新 npm run dev 启动项目即可。

![success](E:\学习发布自己开发的组件到npm上边\bevacomponments\question\success.jpg)