define(["jquery", "jquery-cookie"], function ($) {


     
       function xx(){
        $("#s-1 li").click(function () {
            $("#s-1 li").css("border", "1px solid #ccc")
            $("#s-1 li").removeClass()
            $(this).css("class", "class")
            $(this).css("border", "1px solid #e3393c")
        })
        $("#s-2 li").click(function () {
            $("#s-2 li").css("border", "1px solid #ccc")
            $("#s-2 li").removeClass()
            $(this).css("class", "class")
            $(this).css("border", "1px solid #e3393c")
        })
    
        $("#bb1").click(function () {
            var GB = $("#s-2 li").length
            var nh = null;
            for (var i = 0; i < GB; i++) {
                // console.log("p")
                if ($("#s-2 li").eq(i).attr("class")) {
                    nh = i
                }
            }
            if (nh == 0) {
                nh = "9599.00"
            } else if (nh == 1) {
                nh = "10899.00"
            } else {
                nh = "12699.00"
            }
            if ($("#s-1 li").eq(0).attr("class")) {
    
                // alert(2)
                if ($("#s-2 li").find(".class")) {
                    // console.log(nh)
                    var dye = $("#qqq").val()
                    var id = "暗夜绿色"
                    var num = 1;
    
                    // alert("还可以")
                    var d = $("#qqq").val()
                    if (!$.cookie("good2")) {
                        var id = "暗夜绿色"
                        //    alert(1)
                        var num = 1;
                        num *= d || 1
                        var arre = [{ id: id, num: num, nh: nh }]
                        $.cookie("good2", JSON.stringify(arre))
                        console.log($.cookie("good2"))
                    } else {
                        var faa = false;
    
                        var aijj = JSON.parse($.cookie("good2"))
    
                        for (var i = 0; i < aijj.length; i++) {
    
                            // console.log(aijj[i].id)
                            if (aijj[i].id == id && aijj[i].nh == nh) {
                                if (aijj[i].nh != nh) {
                                    var aiw = { id: id, num: num, nh: nh }
                                    aijj.push(aiw)
                                    $.cookie("good2", JSON.stringify(aijj))
                                }
                                // alert(aijj[i].id)
                                // alert(aijj[i].num)
                                aijj[i].num++
                                // alert(aijj[i].num)
    
                                if (parseInt(dye)) {
                                    aijj[i].num += parseInt(dye);
                                }
                                faa = true
    
                                break;
                            }
    
                        }
                        // console.log(1 + faa)
                        if (!faa) {
    
                            var aji = { id: id, num: num, nh: nh }
                            aijj.push(aji)
                            $.cookie("good2", JSON.stringify(aijj))
    
                        }
                        $.cookie("good2", JSON.stringify(aijj))
    
    
    
                        // var ar = JSON.parse($.cookie("good2"))
                        // var nu = 1
                        // nu *= d || 1
                        // ar[0].num += nu
                        // $.cookie("good2", JSON.stringify(ar))
                    }
                    // console.log($("#s-1 li").eq(1).attr("class"))
    
                    console.log($.cookie("good2"))
    
                }
    
            }
            if ($("#s-1 li").eq(1).attr("class")) {
                var dye = $("#qqq").val()
                var id = "金色"
                var fa = false;
                var aii = JSON.parse($.cookie("good2"))
                console.log(nh)
    
    
    
    
                if (!$.cookie("good2")) {
                    // var id = "暗夜绿色"
                    //    alert(1)
                    var id = "金色"
                    var num = 1;
                    num *= d || 1
                    var arre = [{ id: id, num: num, nh: nh }]
                    $.cookie("good2", JSON.stringify(arre))
                    console.log($.cookie("good2"))
                }
                if (aii) {
                    var id = "金色"
                    var fa = false;
                    // console.log(1)
                    var aij = JSON.parse($.cookie("good2"))
                    // console.log(aij)
                    var cj = { id: id, num: 1, nh: nh }
                    for (var i = 0; i < aij.length; i++) {
    
                        if (aij[i].id == id && aij[i].nh == nh) {
                            var num = 1
                            if (aij[i].nh != nh) {
                                var aiwe = { id: id, num: num, nh: nh }
                                aij.push(aiwe)
                                $.cookie("good2", JSON.stringify(aij))
    
                            }
                            aij[i].num++
                            if (parseInt(dye)) {
                                aij[i].num += parseInt(dye);
                            }
                            fa = true
    
                            break;
                        }
    
                    }
    
                    if (!fa) {
                        aij.push(cj)
                        $.cookie("good2", JSON.stringify(aij))
                    }
                    // $.cookie("good2", JSON.stringify(aii))
    
                    $.cookie("good2", JSON.stringify(aij))
    
                    // console.log(parseInt(dye))
                    console.log($.cookie("good2"))
    
                }
    
    
    
    
    
            }
            if ($("#s-1 li").eq(2).attr("class")) {
                var dye = $("#qqq").val()
                var id = "深空灰色"
                var fa = false;
                var aii = JSON.parse($.cookie("good2"))
                console.log(nh)
    
    
    
    
                if (!$.cookie("good2")) {
                    // var id = "暗夜绿色"
                    //    alert(1)
                    var id = "深空灰色"
                    var num = 1;
                    num *= d || 1
                    var arre = [{ id: id, num: num, nh: nh }]
                    $.cookie("good2", JSON.stringify(arre))
                    console.log($.cookie("good2"))
                }
                if (aii) {
                    var id = "深空灰色"
                    var fa = false;
                    // console.log(1)
                    var aij = JSON.parse($.cookie("good2"))
                    // console.log(aij)
                    var cj = { id: id, num: 1, nh: nh }
                    for (var i = 0; i < aij.length; i++) {
    
                        if (aij[i].id == id && aij[i].nh == nh) {
                            var num = 1
                            if (aij[i].nh != nh) {
                                var aiwe = { id: id, num: num, nh: nh }
                                aij.push(aiwe)
                                $.cookie("good2", JSON.stringify(aij))
    
                            }
                            aij[i].num++
                            if (parseInt(dye)) {
                                aij[i].num += parseInt(dye);
                            }
                            fa = true
    
                            break;
                        }
    
                    }
    
                    if (!fa) {
                        aij.push(cj)
                        $.cookie("good2", JSON.stringify(aij))
                    }
                    // $.cookie("good2", JSON.stringify(aii))
    
                    $.cookie("good2", JSON.stringify(aij))
    
                    // console.log(parseInt(dye))
                    console.log($.cookie("good2"))
    
                }
    
    
    
    
    
            }
            if ($("#s-1 li").eq(3).attr("class")) {
                var dye = $("#qqq").val()
                var id = "银色"
                var fa = false;
                var aii = JSON.parse($.cookie("good2"))
                console.log(nh)
    
    
    
    
                if (!$.cookie("good2")) {
                    // var id = "暗夜绿色"
                    //    alert(1)
                    var id = "银色"
                    var num = 1;
                    num *= d || 1
                    var arre = [{ id: id, num: num, nh: nh }]
                    $.cookie("good2", JSON.stringify(arre))
                    console.log($.cookie("good2"))
                }
                if (aii) {
                    var id = "银色"
                    var fa = false;
                    // console.log(1)
                    var aij = JSON.parse($.cookie("good2"))
                    // console.log(aij)
                    var cj = { id: id, num: 1, nh: nh }
                    for (var i = 0; i < aij.length; i++) {
    
                        if (aij[i].id == id && aij[i].nh == nh) {
                            var num = 1
                            if (aij[i].nh != nh) {
                                var aiwe = { id: id, num: num, nh: nh }
                                aij.push(aiwe)
                                $.cookie("good2", JSON.stringify(aij))
    
                            }
                            aij[i].num++
                            if (parseInt(dye)) {
                                aij[i].num += parseInt(dye);
                            }
                            fa = true
    
                            break;
                        }
    
                    }
    
                    if (!fa) {
                        aij.push(cj)
                        $.cookie("good2", JSON.stringify(aij))
                    }
                    // $.cookie("good2", JSON.stringify(aii))
    
                    $.cookie("good2", JSON.stringify(aij))
    
                    // console.log(parseInt(dye))
                    console.log($.cookie("good2"))
    
                }
    
    
    
    
    
            }
        
        
        })
    
    
       }
     
       return {
        //    re:ui,
           xx:xx,
        //    jj:jj
       }
    
})