define(["jquery"], function ($) {
    function register() {
        var oSlider = document.getElementById("slider");
        var oFull = document.getElementById("full");
        var oBlock = document.getElementById("block");
        var trr = false
        $.ajax({
            url: "../js/number.json",
            success: function (rgb) {
                console.log(rgb)
                // var arr = JSON.parse(rgb)
                console.log(rgb[1])
                var ler = ``
                for (var i = 0; i < rgb.length; i++) {
                    ler += `
                    <option value="">${rgb[i].city}      ${rgb[i].code}</option>`
                }
                $("select").html(ler);
            },
            error: function (msg) {
                console.log(msg)
            }
        })

        oBlock.onmousedown = function (ev) {
            // alert(1)
            var e = ev || window.event;
            var offsetX = e.clientX - this.offsetLeft;
            document.onmousemove = function (ev) {
                var e = ev || window.event;
                var l = e.clientX - offsetX;
                if (l <= 0) {
                    l = 0;
                }
                if (l >= 258) {
                    l = 258;
                }
                oBlock.style.left = l + 'px';
                oFull.style.width = l + 'px';
                //记录滑动的位置
                //   localStorage.setItem("slide", l);
                if (l == 258) {
                    oSlider.innerText = "验证通过"
                    oSlider.style.color = "rgb(255,255,255)"
                    oSlider.style.background = "rgb(90,205,56)"
                    // oBlock.innerHTML = ""
                    oBlock.style.background = "white"
                    // span1.style.display = "block"

                    if (oSlider.innerText == "验证通过" && trr) {
                        $("#text3 button").css("background", "#ff4001")
                        // alert(1)
                    }
                }
            }
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }

        var inp1 = document.getElementById("inp1")
        console.log($("text1 input"))
        // var trr = false        


        inp1.oninput = function () {
            // var oSlider = document.getElementById("slider");

            var d = inp1.value
            var num = /^[1][1,3,5,7,8,9]\d{9}$/
            // var d = $("text1 input").val()
            if (num.test(d)) {
                trr = true
            }

            if (oSlider.innerText == "验证通过" && trr) {
                $("#text3 button").css("background", "#ff4001")
                // alert(1)
            }
        }

        $("#text3 button").click(function () {
            var but3 = document.querySelector("#text3 button")
            console.log(but3.style.background)
            if(but3.style.background == "rgb(255, 64, 1)"){
                location.assign("register2.html")
                // alert(1)
            }
        })
    }

    return {
        register: register,
        // ajax:ajax()
        // xyy:xyy
    }
})
