
北控三兴信息技术有限公司web前端框架  

### 说明
本框架是北控三兴web前端框架，本框架可以生成2套代码，集成了bootstrap3.3.7,和jquery1.9.1,如有其他搭配稍后会做解释

+ 由webpack2.x构建的多页面应用
+ 是由gulp构建兼容ie8的多页面应用

### 安装
`npm install yo generator-bksx -g`

### 使用webpack2.x构建步骤
+ 在要创建项目的目录下执行`yo bksx`,会生成相应的项目结构

```
├─app ---- 存放项目原文件
│  ├─css ---- 存放样式文件 
│  ├─dll ---- 存放常用的包文件和不修改的文件
│  │  └─fonts
│  ├─images ---- 存放项目图片
│  ├─pages ---- 存放项目页面
│  │  ├─mk1 ---- 模块文件  ---- 每个模块里面至少有个page.html和page.js
│  │  └─mk2 ---- 模块文件  ---- 每个模块里面至少有个page.html和page.js
│  ├─public ---- 存放项目的公共代码
│  └─script ---- 存放js文件
├─libs ---- 存放不用npm安装的第三方包
├─bin ---- 存放项目打包之后的文件
└─webpack-config ---- webpack配置文件
    └─base

```


+ 像以前的方式写代码,因为打包之后没有pages文件夹，在页面中有页面跳转的连接或js连接，css连接请注意。图片可以直接以开发文件地址写

+ 本框架集成了bootstrap和jquery，如果不喜欢这样的搭配方式，可以修改`otherLib.js`文件,然后执行`npm run dll`(只要修改了`otherLib.js`,请执行`npm run dll`),这个配置会生成相应的文件,那么引用相应资源时，请在页面采用连接的方式引用，就别使用require或import方式了

+ 代码编写完之后，执行`npm run build` 然后执行`npm run server`,访问项目地址,项目端口号是9000,可以在`webpack-config`文件夹下的`devServer.config.js`进行修改,本框架式热启动，修改文件之后刷新浏览器即可，不需重启服务，但是最后版本发布文件，请再次执行`npm run build`

+ 在开发项目中可以使用`yo bksx:page 参数`命令,此命令是生成模块文件，参数是文件夹的名字，执行命令之后会在app/pages文件下生成相应的文件夹目录结构，其中有两个文件`page.html`和`page.js`  

+ 在开发项目中可以使用`yo bksx:data 参数`命令，此命令是在相应文件下(page.js)生成请求代码
```javascript
$.ajax({
    url: '',
    type:'',
    data:'',
    success:function(){
    },
    error:function(jqXHR,textStatus,errorThrown){
    }
});
```

### 使用gulp构建步骤
+ 在要创建项目的目录下执行`yo bksx:ie8`,会生成相应的项目结构
+ 略(未调试完成，稍等片日)



