// console.log("woaini")
require.config({
    paths: {
      jquery: "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      parabola: "parabola",
      index: "index"//主页模块
    //   banner: "banner"
    },
    //jquery-cookie 依赖于jquery
    shim: {
      //设置依赖关系
      "jquery-cookie": ["jquery"],
      //某一个模块，不遵从AMD
      parabola: {
        exports: "_",
      },
    },
  })

  require(["index"],function(register){
    //加载jons
    register.register()
    // register.xyy()
   
  })