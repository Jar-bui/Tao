define(["jquery", "jquery-cookie"], function ($) {

    function YZZ(){
        $("#Look").mouseenter(function () {
            // alert(1)
            $(".bannrBox").add(".Look_banner").css("display", "block")
        }).mouseleave(function () {
            $(".bannrBox").add(".Look_banner").css("display", "none")
        }).mousemove(function (e) {
            var scc = scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    
            var l = e.clientX - $(this).offset().left - 100;
            var t = e.clientY - $(this).offset().top +100;
            // console.log(e.screenY)
            // console.log(e.clientY)
    
            l = Math.max(0, l)
            l = Math.min(252, l)
            t = Math.max(0, t)
            t = Math.min(249, t)
            $(".bannrBox").css({
                left: l,
                top: t
            })
            $(".Look_banner img").css({
                left: -2 * l,
                top: -2 * t
            })
        })
    
        var BigLI = $("#Banner_btm li")
        for (let i = 0; i < BigLI.length; i++) {
            $("#Banner_btm li").eq(i).mouseenter(function () {
                $("#Banner_btm li img").css(
                    "border-color", ""
                )
                $("#Banner_btm li img").eq(i).css(
                    "border-color", "rgb(247, 0, 46)"
                )
    
                var Look = document.getElementById("Look")
                var Img = Look.getElementsByTagName("img")
                // console.log(Img)
                // Img[0].src= `../images/下载项目图片${i+1}.jpeg`
                // Img[1].src= `../images/下载项目图片${i+1}.jpeg`
                $.ajax({
                    type: "get",
                    url: "../js/jaba.json",
                    success: function (msz) {
                        // console.log(msz)
                        Img[0].src = msz[i + i].img
                        Img[1].src = msz[i + i + 1].img
                    },
                    error: function (msg) {
                        console.log(msg)
                    }
                })
            })
    
            // $("#Banner_btm li").eq(i).mouseleave(function () {
            //     $("#Banner_btm li img").eq(i).css(
            //         "border-color", ""
            //     )
            // })
        }
    
    
        $(".user-nav li").mouseenter(function () {
            $(this).find(".user-navdingbox").css("display", "block")
            $(this).find("a").eq(0).css("color", "#999")
        }).mouseleave(function () {
            $(this).find(".user-navdingbox").css("display", "none")
            $(this).find("a").eq(0).css("color", "white")
    
        })
        var sum = 0;
        var cqq = document.getElementById("qqq")
        cqq.oninput = function(){
            // alert(1)
            var t = this.value
            var box3 = /^[0-9]$/;
            if(box3.test(t)){
              t = t
            }else{
                this.value = ""
            }
        }
    
        $("#sf-1 span").eq(0).click(function(){
            sum++
            // alert(1)
            if(!$("#qqq").val()){
                if(sum > 50){
                        $("#qqq").val(50)
                }else{
                    $("#qqq").val(sum)
    
                }
            }else{
                var akk = $("#qqq").val()
                var add = parseInt(akk)
                add += 1
                $("#qqq").val(add)
            }
            
    
        })
        $("#sf-1 span").eq(1).click(function(){  
            sum--
            console.log($("#qqq").val())
            if(!$("#qqq").val()){
                if(sum < 0){
                $("#qqq").val(0)
                }else{
                $("#qqq").val(sum)
     
                }
            }else{
                var akk = $("#qqq").val()
                akk -= 1
                $("#qqq").val(akk)
                
            }
            if( $("#qqq").val() <= 0){
                $("#qqq").val(0)
     
            }
        })
        $("#shope li").click(function(){
            // if()
            // console.log($(this).attr("class"))
            if(!$(this).attr("class")){
                $(this).addClass("class","wwe")
                 $(this).css("border" ,"1px solid #e3393c")
    
            }else{
                 $(this).attr("class","")
                 $(this).css("border" ,"1px solid #ccc")
            }
    
        })
      
        $("#s-2 li").eq(0).click(function(){
            // alert(1)
            $("#s-2 li").css("border","")
            $("#emMa").html("9599.00")
            $(this).css("border" ,"1px solid #e3393c")
    
        })
        $("#s-2 li").eq(1).click(function(){
            $("#s-2 li").css("border","")
            $("#emMa").html("10899.00")
            $(this).css("border" ,"1px solid #e3393c")
    
        })
        $("#s-2 li").eq(2).click(function(){
            // alert(2)
            $("#s-2 li").css("border","")
            $("#emMa").html("12699.00")
            $(this).css("border" ,"1px solid #e3393c")
    
        })


        
    }
 
    return {
       YZZ:YZZ,
        // xyy:xyy
    }
})