define(["jquery"], function ($) {
    function xx(){
        $("#tit-1 span").click(function () {
            $("#tit-1 span").css({
                background: "none",
                color: "rgb(255, 68, 68)"
            })
            $(this).css({
                background: " linear-gradient(to right, rgb(255, 134, 0), rgb(255, 30, 0))",
                color: "rgb(255, 251, 249)",
            })
        })
    
    
        $("#big-2-u li").mouseenter(function () {
            $(this).find(".qwer").css("display", "block")
        })
        $("#big-2-u li").mouseleave(function () {
            $(this).find(".qwer").css("display", "none")
        })
    
        //
    
    
        var iNow = 1; //用于代表显示的图片的下标
        var timer = null;
        $("#left-R").mouseenter(function () {
            $("#left-R i").css("display", "block")
            clearInterval(timer)
        })
    //     function xx(){
    //         iNow--
    //         tab()
    //         console.log(1)
    //     }
    //     function xxx(){
    //         iNow++
    //        tab()
    //        console.log(2)
    //     //    console.log(2)

    //    }
    //    xx = antiShake(xx, 500)
    //    xxx = antiShake(xxx, 500)
       //icon-jiantou
    //    var cla = document.getElementsByClassName("icon-jiantou")
        $("#left-R i").eq(0).click(function () {
            clearInterval(timer)
            setTimeout(function(){
                 iNow--
            tab()
            },1000)
             
        })
        $("#left-R i").eq(1).click(function () {
            clearInterval(timer)
            setTimeout(function(){
                iNow++
           tab()
           },1000)
            
        })
        // cla[0].onclick = xx
        // cla[1].onclick = xxx

        // function antiShake(funcName, delay){
        //     var timer = null;
      
        //     return function(){
        //       console.log()
        //       var argus = [...arguments];
        //       // console.log(arguments)
        //       var _this = this;
        //       // console.log(this)
        //       clearTimeout(timer);
        //       timer = setTimeout(function(){
        //         //this指向  参数
        //         funcName.apply(_this, argus)
        //       }, delay);
        //     }
        //   }


        $(" #big-2-banner").mouseenter(function () {
            clearInterval(timer)
            $("#left-R i").css("display", "block")
    
        })
        $(" #big-2-banner").mouseleave(function () {
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 4000);
            $("#left-R i").css("display", "none")
    
        })
    
        $("#bottm-big2 li i").click(function () {
            clearInterval(timer)
    
            $(this).css("class", "active")
            var ne = $(this).index()
            iNow = ne + 1;
            tab()
        })
    
        timer = setInterval(function () {
            iNow++;
            tab();
        }, 4000);
    
    
    
        function tab() {
            $(" #big-2-banner ul li ").css("float", "left")
            var aa = $("#bottm-big2 li i");
            $("#bottm-big2 li i").removeClass().eq(iNow - 1).addClass("active");
            if (iNow == aa.size() + 1) {
                aa.eq(0).addClass("active");
            }
    
            $("#big-2-banner ul").animate({ left: iNow * -520 }, 1000, function () {
                if (iNow == aa.size()) {
                    iNow = 0;
                    $("#big-2-banner ul").css("left", 0);
                } else if (iNow == 0) {
                    iNow = 5
                    $("#big-2-banner ul").css("left", iNow * -520);
                }
    
            })
        }
        // tab()
    
        var INow = 0;
    
        var ttime = null;
        ttimer = setInterval(function () {
            INow++
    
            Ttab()
        }, 3000);
    
    
    
        function Ttab() {
            var iii = document.getElementById("iii")
    
            iii.innerText = INow
    
    
    
            $("#banner-21 ul").animate({ left: INow * -520 }, 1000, function () {
                if (INow == 5) {
                    iii.innerText = INow + 1
    
                    INow = 0;
                    $("#banner-21 ul").css("left", 0);
                } else if (INow == 0) {
                    INow = 5
                    $("#banner-21 ul").css("left", INow * -520);
                }
    
    
            })
        }

        $.ajax({
            url: "../js/img-1.json",
            success: function (rga) {
                // console.log(rga)
                // var arr = JSON.(rga)
                // console.log(arr.length)
                var le = ``
                // var ajj = parseInt(Math.random()*100)
                // console.log(ajj)
                for (var i = 0; i < rga.length; i++) {
                    var ajj = parseInt(Math.random() * 100)
    
                    le +=
                        `
                    <li>
                    <a href=""><img src="${rga[i].img}" alt=""></a>
                    <span>${rga[i].span}</span>
                    <em>${rga[i].em}</em>
                    <div>
                    <a href="">😊  ${ajj}人 说好</a>
                    </div>
                </li>
               `
                }
                $("#lastImg ul").html(le)
            },
            error: function (msz) {
                console.log(msz)
            }
        })
    
        $.ajax({
            url: "../js/img-2.json",
            success: function (rga) {
                // console.log(rga)
    
                var le = ``
                for (var i = 0; i < rga.length; i++) {
                    le += ` 
                           
                           <div>
                    <h5>${rga[i].h5}</h5>
                    <li>
                        <img src="${rga[i]["img"].img}" alt="">
                        <img src="${rga[i]["img"].img_2}" alt="">
                        <img src="${rga[i]["img"].img_3}" alt="">
                    </li>
                </div>
    `
                }
                $("#a1122").html(le)
                // $("#last-3-1").html(`            <h3><img src="../images/Details page2/ban19.png" alt=""><span>与品质生活不期而遇</span></h3>`)
            },
            error: function (msz) {
                console.log(msz)
            }
        })
    
        $.ajax({
            url: "../js/img-2.json",
            success: function (rga) {
                // console.log(rga)
    
                var le = ``
                for (var i = 0; i < rga.length; i++) {
                    le += ` 
                           
                           <div>
                    <h5>${rga[i].h5}</h5>
                    <li>
                        <img src="${rga[i]["img"].img}" alt="">
                        <img src="${rga[i]["img"].img_2}" alt="">
                        <img src="${rga[i]["img"].img_3}" alt="">
                    </li>
                </div>
    `
                }
                $("#aa22").html(le)
                // $("#last-3-1").html(`            <h3><img src="../images/Details page2/ban19.png" alt=""><span>与品质生活不期而遇</span></h3>`)
            },
            error: function (msz) {
                console.log(msz)
            }
        })
    
        $.ajax({
            url: "../js/img-3.json",
            success: function (rga) {
                // console.log(rga)
    
                var le = ``
                for (var i = 0; i < rga.length; i++) {
                    le += ` 
                    <li>
                        <span>${rga[i].span}</span>
                        <em id="emm">${rga[i].em}</em>
                        <img src="${rga[i].img}" alt="">
                    </li>
                            `
                }
                $("#good-u").html(le)
                // $("#aa22").html(le)
                // $("#last-3-1").html(`            <h3><img src="../images/Details page2/ban19.png" alt=""><span>与品质生活不期而遇</span></h3>`)
            },
            error: function (msz) {
                console.log(msz)
            }
        })
    
        $.ajax({
            url: "../js/img-4.json",
            success: function (rgb) {
                var le = ``
                for (var i = 0; i < rgb.length; i++) {
                    // var i = 0; 
                    // console.log(rgb[i].img)
                    le += `
                    <li>
                   <img src="${rgb[i].img}" alt="">
                   <span id="spp1">${rgb[i].span1}</span>
                   <em>${rgb[i].em}</em>
                   <i>${rgb[i].i}</i>
                   <p>¥<span>${rgb[i].pspan}</span></p>
                   <span id="spp2">${rgb[i].span2}</span>
               </li>
                    `
    
                }
                $("#uuu1").html(le)
    
            },
            error: function (msz) {
                console.log(msz)
            }
        })
    
        $.ajax({
            url: "../js/img-5.json",
            success: function (rgb) {
                var le = ``
                for (var i = 0; i < rgb.length; i++) {
                    // var i = 0; 
                    // console.log(rgb[i].img)
                    le += `
                    <li>
                   <img src="${rgb[i].img}" alt="">
                   <span id="spp1">${rgb[i].span1}</span>
                   <em>${rgb[i].em}</em>
                   <i>${rgb[i].i}</i>
                   <p>¥<span>${rgb[i].pspan}</span></p>
                   <span id="spp2">${rgb[i].span2}</span>
               </li>
                    `
    
                }
                $("#unu1").html(le)
    
            },
            error: function (msz) {
                console.log(msz)
            }
        })
    
    
    
        document.onscroll = function (e) {
            var ev = e || window.event
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrolltop > 218) {
                $("#stickY").css("display", "block")
            } else {
                $("#stickY").css("display", "none")
    
            }
    
            // console.log(scrolltop)
    
        }
        $("#big-2-u li").mouseenter(function(){
            $(this).css({
                "background":"rgb(254,225,218)",
                 "transition"  :"1s" 
            })
        }).mouseleave(function(){
            $(this).css({
                "background":"none",
                 "transition"  :"1s" 
            })
        })
    }
    return {
        xx:xx
    }

})
