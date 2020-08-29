//es6

// export {
//     axjj,
//     qurey,
//     $get,
//     $post,
//     Pro,
// }
function $post(url, shuj, tree) {
    axjj({
        tag: "post",
        url: url,
        shuj: shuj,
        tree: tree,
        eroo: tree
    })
}

function $get(url, shuj, tree) {
    axjj({
        tag: "get",
        url: url,
        shuj: shuj,
        tree: tree,
        eroo: tree
    })
}

function Pro(returs) {
    let { tag, url, shuj } = returs
    return new Promise((resolve, reject) => {
        axjj({
            tag,
            url,
            shuj,
            tree: function (response) {
                resolve(response)
            },
            eroo: function (msg) {
                reject(msg)
            }
        })
    })
}





function axjj({ tag = "get", url, shuj, tree, eroo }) {
    var xxml = null;
    try {
        xxml = new XMLHttpRequest
    } catch (error) {
        xxml = new ActiveXObject("Microsoft.XMLHTTP")
    }
    // console.log(shuj)
    if (tag == "get" && shuj) {
        // xxml.open(tag,url + "?"+qurey(shuj),true)
        url += "?" + qurey(shuj)
    }
    // console.log(url + "?")
    xxml.open(tag, url, true)


    if (tag == "post") {
        xxml.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xxml.send(qurey(shuj))
    } else {
        xxml.send()
    }
    xxml.onreadystatechange = function () {
        if (xxml.readyState == 4) {
            // alert(xml.responseText)
            if (xxml.status == 200) {
                // console.log(111)
                tree && tree(xxml.responseText) //服务器返回的数据
            } else {
                eroo && eroo(xxml.status)
            }
        }
    }

}
function qurey(obj) {
    var c = []
    for (var aa in obj) {
        c.push(aa + "=" + obj[aa])
    }
    return c.join("&")
}

