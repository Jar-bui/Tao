define(["jquery"], function ($) {

    function qq(){
        var in1 = document.getElementById("inp1")
        var in2 = document.getElementById("inp2")
        var in3 = document.getElementById("inp3")
        var in4 = document.getElementById("inp4")
        var in5 = document.getElementById("inp5")
        // console.log(in1.value)
        document.onmousemove = function () {
            if (in1.value && in2.value && in3.value && in4.value && in5.value) {
                $("#next").css("background", "red")
            }
        }
        $("#next").click(function () {
            var a = in1.value;
            // console.log(a)
            var b = in2.value;
            var c = in3.value;
            var d = in4.value;
            var e = in5.value;
            $.ajax({
                type: "post",
                url: "../php/Uname.php",
                data: {
                    nnn: a,
                    password: d,
                    topassword: e,
                },
                success: function (rgb) {
                    // console.log(rgb)
                    // console.log(JSON.paser(rgb))
                    var arr = JSON.parse(rgb)
                    console.log(arr)
                    if (arr.cons == 0) {
                        // alert(1)
                    setTimeout(() => {
                        location.assign("register3.html")
                    }, 1000);
                    }
                },
                error: function (msz) {
                    console.log(msz)
    
                }
            })
    
        })
    }
    return {
        qq:qq
    }
})
