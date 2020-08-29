;//拖拽代码
function Dragmove(box) {
  box.onmousedown = function (e) {
    var eve = e || window.event
    var l = eve.clientX - box.offsetLeft
    var t = eve.clientY - box.offsetTop
    document.onmousemove = function (e) {
      var eve = e || window.event
      box.style.left = eve.clientX - l + "px"
      box.style.top = eve.clientY - t + "px"
    }
  }
  document.onmouseup = function () {
    document.onmousemove = null;
  }
};
//以浏览器为限制对象拖拽
function browserMove(box) {
  box.onmousedown = function (e) {
    var eve = e || window.event
    var l = eve.clientX - box.offsetLeft
    var t = eve.clientY - box.offsetTop
    document.onmousemove = function (e) {
      var eve = e || window.event
      var i = eve.clientX - l
      if (i <= 0) {
        i = 0;
      }
      var windowWitch = document.documentElement.clientWidth || document.body.clientWidth
      if (i >= windowWitch - box.offsetWidth) {
        i = windowWitch - box.offsetWidth
      }
      var k = eve.clientY - t

      if (k <= 0) {
        k = 0;
      }
      var windowWitch = document.documentElement.clientHeight || document.body.clientHeight
      if (k >= windowWitch - box.offsetHeight) {
        k = windowWitch - box.offsetHeight
      }
      box.style.left = i + "px"
      box.style.top = k + "px"
    }
  }
  document.onmouseup = function () {
    document.onmousemove = null;
  }
};
//阻止冒泡写法
function stopThorough(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}
//随机颜色
function randomColor() {
  var str = "rgba(" +
    parseInt(Math.random() * 256) +
    ","
    +
    parseInt(Math.random() * 256) +
    ","
    +
    parseInt(Math.random() * 256) +
    ","
    +
    "1)"
  return str

}
//获取css样式节点
function getStyle(node, cssStyle) {
  return node.currentStyle
    ? node.currentStyle[cssStyle]
    : getComputedStyle(node)[cssStyle];
}
//单数变双数
function addZero(num) {
  if (num < 10) {
    return "0" + num
  } else {
    return num
  }
}
//日期周转字符串
function wek(num) {
  var arr = ["日", "一", "二", "三", "四", "五", "六"]
  return arr[num]
}
//获取当前时间
function showTime() {
  var d = new Date()
  var year = d.getFullYear()
  var month = addZero(d.getMonth() + 1)
  var week = wek(d.getDay())
  var date = d.getDate()
  addZero(date)

  var hours = addZero(d.getHours());
  var min = addZero(d.getMinutes());
  var sec = addZero(d.getSeconds());
  return year + " 年 " + month + " 月 " + date + " 号 周" + week + " " + hours + ":" + min + ":" + sec
}
;//排序
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - (i + 1); j++) {
      //前后两两进行比较
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
//排序2
function changeSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}
//创建dome2级
function DoM2(a, b, c) {
  if (a.addEventListener) {
    a.addEventListener(b, c)
  } else {
    a.attachEvent("on" + b, c)
  }
}
//删除domo2级
function DoM_2(a, b, c) {
  if (a.removeEventListener) {
    a.removeEventListener(b, c)
  } else {
    a.detachEvent('on' + b, c);
  }
}
//圆形旋转
function Round(node, nod) {
  var X = 500;
  var Y = 500;
  var r = 200;
  var i = 0;
  setInterval(function () {
    i++;
    var radian = (i * Math.PI) / 180;
    // console.log(Math.PI)
    var a = Math.sin(radian) * r;
    // console.log(Math.sin)
    var b = Math.cos(radian) * r;
    node.style.left = X + a + "px";
    node.style.top = Y - b + "px";
    //每隔30毫秒创建一个节点添加到页面，显示轨迹
    var newDiv = document.createElement("div");
    newDiv.style.left = node.offsetLeft + "px";
    newDiv.style.top = node.offsetTop + "px";
    nod.appendChild(newDiv);
  }, 30);
}

//运动 要有全局返回值
function Motion(dq, OBJ, fun) {
  clearInterval(dq.timer)
  dq.timer = setInterval(function () {
    var asa = true
    for (var cs in OBJ) {
      var md = OBJ[cs]
      var s = null
      if (cs == "opacity") {
        s = parseInt(parseFloat(getStyle(dq, cs)) * 100)
      } else {
        s = parseInt(getStyle(dq, cs))
      }
      var spee = (md - s) / 8
      spee = spee > 0 ? Math.ceil(spee) : Math.floor(spee)

      s += spee
      if (cs == "opacity") {
        dq.style.opacity = s / 100
        dq.style.filter = `alpha(opacity=${s})`
      } else {
        dq.style[cs] = s + "px"
      }
      if (s != md) {
        asa = false;
      }
      if (asa) {
        // alert(1)
        // console.log(111)
        clearInterval(dq.timer)
        // alert(1)
        fun && fun.call(dq)
      }

    }
  }, 30)
}

//再次抛物线
function parabolaa(aa, ff, gg, bb, cc, dd, ee,) {
  var bool = new Parabola({
    el: aa, //选择我们哪个物体需要进行抛物线运动
    targetEl: bb,///终点
    offset: [ff, gg],//初始位置和最终，到达的偏移的坐标
    duration: 3000,//整个动画所用的时间
    curvature: 0.005,//抛物线弯曲的曲率，越接近于0，就越平缓 

    callback: function () {
      alert("运动结束了");//这个函数是在整个动画结束的时候调用
    },
    stepCallback: function () {
      var node = document.createElement("div");//这是在运动过程中不断去调用的函数
      node.style.left = cc.offsetLeft + "px";//cc
      node.style.top = cc.offsetTop + "px";//
      dd.appendChild(node);//dd
    },
  });
  if (ee) {
    ee[0].onclick = function () {
      bool.start();
    };
    ee[1].onclick = function () {
      bool.stop();
    };
    ee[2].onclick = function () {
      bool.reset();
    };
    ee[3].onclick = function () {
      bool.setOptions({
        targetEl: null,
        offset: [ff, gg],//初始位置和最终，到达的偏移的坐标
      });
    };
  } else {
    bool.start();
  }

}
//碰撞
function powe(node1, node2) {
  var l1 = node1.offsetLeft;
  var r1 = node1.offsetLeft + node1.offsetWidth;
  var t1 = node1.offsetTop;
  var b1 = node1.offsetTop + node1.offsetHeight;

  var l2 = node2.offsetLeft;
  var r2 = node2.offsetLeft + node2.offsetWidth;
  var t2 = node2.offsetTop;
  var b2 = node2.offsetTop + node2.offsetHeight;

  if (l2 > r1 || r2 < l1 || t2 > b1 || b2 < t1) {
    return false;
  } else {
    return true;
  }
}