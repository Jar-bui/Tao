define(["jquery"], function ($) {

    function xxx(){
        $("#xxxland p").eq(0).click(function () {
            // alert(1)
            $("#xxxland p").css("border", "none")
            $(this).css("border-bottom", "2px solid black")
            // $("#c++").html("");
            $("#yzz").html("")
            var lee = ``
            lee += `
                <div id="inp-1">
                        <span>
                            <i class="iconfont icon-new-yonghu"></i>
                        </span>
                        <input type="text" name="" id="" placeholder="会员名/邮箱/手机号">
                    </div>
                    <div id="inp-2">
                        <span>
                            <i class="iconfont icon-icon_pwd"></i>
                        </span>
                        <input type="text" name="" id="" placeholder="请输入登陆密码">
                    </div>
                    <div id="inp-footer">
                        <button>登陆</button>
                        <div id="ZFB">
                            <!-- <div id="wb"> -->
                            <span class="iconfont icon-weibo">
    
                                <!-- </div> -->
                                <a href=""> 微博登陆</a>
                            </span>
                            <!-- <div id="zfb"> -->
                            <span class="iconfont icon-zhifubao">
    
                                <!-- </div> -->
                                <a href=""> 支付宝登陆</a>
                            </span>
                        </div>
                        <div id="last-password">
                            <a href="">忘记密码</a>
                            <a href="">忘记用户名</a>
                            <a href="register.html">免费注册</a>
                        </div>
                    </div>
                `
            $("#yzz").html(lee)
    
    
    
        })
        // alert($("#xxxland p").eq(0).attr("border"))
        $("#xxxland p").eq(1).click(function () {
            $.ajax({
                url: "../js/number.json",
                success: function (rgb) {
                    // console.log(rgb)
                    // var arr = JSON.parse(rgb)
                    // console.log(rgb[1])
                    var ler = ``
                    for (var i = 0; i < rgb.length; i++) {
                        ler += `
                        <option value="">${rgb[i].code}</option>`
                    }
                    $("select").html(ler);
                },
                error: function (msg) {
                    console.log(msg)
                }
            })
    
    
    
            $("#xxxland p").css("border", "none")
            $(this).css("border-bottom", "2px solid black")
            // $("#c++").html("");
            $("#yzz").html("")
    
            var lEE = ``;
    
            lEE += `
            <div id="inp-1">
                        <span>
                            <i class="iconfont icon-shouji"></i>
                        </span>
                        <select name="" id="" style="float: left; height: 40px;border:0">
                            <option value=""></option>
                        </select>
                        <input type="text" name="" id="" placeholder="会员名/邮箱/手机号" style="width:200px">
                    </div>
                    <div id="inp-2">
                        <span>
                            <i class="iconfont icon-yanzhengma" style="font-size: 16px;"></i>
                        </span>
                        <input type="text" name="" id="" placeholder="请输入验证码" style="width: 180px;">
                        <button
                            style="height: 40px;width:77px;font-size: 12px;background:white;display: block;float: left;line-height: 40px;text-align: center;border:0;    color: rgb(135, 134, 137)">获取验证码</button>
                    </div>
                    <div id="inp-footer">
                        <button>登陆</button>
                        <div id="ZFB">
                            <span class="iconfont icon-weibo">
    
                                <a href=""> 微博登陆</a>
                            </span>
                            <span class="iconfont icon-zhifubao">
    
                                <a href=""> 支付宝登陆</a>
                            </span>
                        </div>
                        <div id="last-password" style="left:265px">
                            <a href="register.html">免费注册</a>
                        </div>
                    </div>
            `
    
            $("#yzz").html(lEE)
    
        })
        // var sum = 0;
        $("#inp span").eq(0).click(function () {
            $("#inp").html("")
            // var sum = 0
            // if (sum == 0) {
    
    
                var tte = ``
                tte += `
            <span class="iconfont icon-denglu-diannao" style=" color: red;
                position: absolute;
                top: 7px;
                right: 7px;
                font-size: 45px;font-weight:bold;"></span>
              
                <div id="xxxland" style="top:25px;left: 25px;font-size: 18px;width: 300px;">
                    <p style="border:0;">手机扫描</p>
                    <p>安全登录</p>
                </div>
    
    
    
                <div id="yzz" class="awawaw">
    
                   <img src="../images/land/下载.png" alt="" style="position: absolute;top:110px;left:130px">
                   <div style="width: 188px;height: 35px;position: absolute;bottom: 90px;left: 95px;">
                        <span class="iconfont icon-iconScancode" style="float: left;font-size: 37px; color:red;margin-right: 6px;">
                        </span>
                        <div style="margin-top:6px;">
                        <span style="font-size: 12px;float: left;">
                            打开  手机淘宝
                        </span>
                        <span style="font-size: 12px;float: left;">
                            | 手机天猫
                        </span>
                        <p style="font-size: 12px;float: left;">
                            扫一扫登陆
                        </p> 
                    </div>
                   </div>
                        <div id="last-password" style="left:270px;bottom:29px">
                            <a href="">密码登陆</a>
                            <a href="register.html">免费注册</a>
                        </div>
                    </div>
    
            `
                $("#inp").html(tte)
                // sum++
                // break;
            // }
            if (sum == 1) {
    
    
                console.log(1)
                $("#inp").html("")
    
    
    
                var lee = ``
                lee += `
    <span class="iconfont icon-icon_qrcode"></span>
    <i class="iconfont icon-saomiaodenglu">
    <em>扫描登陆更安全</em>
    </i>
    <div id="xxxland">
    <p>密码登陆</p>
    <p>短信登陆</p>
    </div>
    
    
    
    <div id="yzz">
    
    <div id="inp-1">
    <span>
    <i class="iconfont icon-new-yonghu"></i>
    </span>
    <input type="text" name="" id="" placeholder="会员名/邮箱/手机号">
    </div>
    <div id="inp-2">
    <span>
    <i class="iconfont icon-icon_pwd"></i>
    </span>
    <input type="text" name="" id="" placeholder="请输入登陆密码">
    </div>
    <div id="inp-footer">
    <button>登陆</button>
    <div id="ZFB">
    
    <span class="iconfont icon-weibo">
    
    
        <a href=""> 微博登陆</a>
    </span>
    
    <span class="iconfont icon-zhifubao">
    
    
        <a href=""> 支付宝登陆</a>
    </span>
    </div>
    <div id="last-password">
    <a href="">忘记密码</a>
    <a href="">忘记用户名</a>
    <a href="register.html">免费注册</a>
    </div>
    </div>
    `
                $("#inp").html(lee)
    
            }
    
        })
    
    
    
    }
    return{
        xxx:xxx
    }
})