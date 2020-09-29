document.body.onload = function () {
    $("#createProject").modal({
        backdrop: 'static',
        keyboard: true,
        "show": false,
    });
}
//一键收展
function openAndClose(obj, status) {
    var collapse = obj.parentNode.parentNode.parentNode.parentNode;
    collapse = $("#" + collapse.id.toString() + " > .collapse");
    if (status) {
        collapse.collapse("show");
    } else {
        collapse.collapse("hide");
    }
}
//发布测试用例
function sendTest(obj) {
    var list = $(".row");
    var temp = list.find("textarea");
    list = Array.prototype.concat.apply("", list.find("input"));
    list.shift();
    temp = Array.prototype.concat.apply("", temp);
    temp.shift();
    list = list.concat(temp);
    var dataArray = new Array();
    for (var i of list) {
        dataArray.push(i.value.toString());
    }
    for (var i in dataArray) {
        if (dataArray[i] == "" || dataArray[i] == null) {
            $(obj).button('reset');
            return;
        }
    }
    $(obj).button('loading');
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/testUtil/testUnit",
    //     data: {
    //         sessionId: getCookie(),
    //         subject: dataArray.shift(),
    //         operator: dataArray.shift(),
    //         frequency: dataArray.shift(),
    //         process: dataArray.shift(),
    //         field: dataArray.shift(),
    //         testprocess: dataArray.shift(),
    //         result: dataArray.shift(),
    //         conclusion: dataArray.shift(),
    //         remark: dataArray.shift()
    //     },
    //     dataType: "JSON",
    //     success: function (response) {
    //         var result = response.result;
    //         $(obj).button('reset');
    //         if (result) {
    //             window.location.reload();
    //         } else {
    //             alert("发布失败");
    //         }
    //     }
    // });
}
//绑定数据
function dataBind(message) {
    var list = document.getElementsByClassName("item");
    var title = document.getElementsByClassName("title");
    var num = document.getElementsByClassName("num");
    var time = document.getElementsByClassName("time");
    var name = document.getElementsByClassName("name");
    var content = document.getElementsByClassName("content");

    var len = message.length;
    for (let index = 0; index < len; index++) {
        if (message[index] == null) {
            list[index].classList.add("hidden");
            continue;
        }
        list[index].setAttribute("id", message[index].id);
        list[index].classList.remove("hidden");
        title[index].innerHTML = message[index].subject;
        num[index].innerHTML = "<strong>测试次数：</strong>" + message[index].frequency;
        time[index].innerHTML = message[index].releasetime;
        name[index].innerHTML = "<strong>负责人：</strong>" + message[index].operator;
        content[index].innerHTML = message[index].process;

        var hope = document.getElementById("collapse-hope-" + index);
        hope.children[0].innerHTML = "<strong>预期结果：</strong>" + message[index].field;
        var pro = document.getElementById("collapse-process-" + index);
        pro.children[0].innerHTML = "<strong>测试过程：</strong>" + message[index].testprocess;
        var result = document.getElementById("collapse-result-" + index);
        result.children[0].innerHTML = "<strong>测试结果：</strong>" + message[index].result;
        var conclusion = document.getElementById("collapse-conclusion-" + index);
        conclusion.children[0].innerHTML = "<strong>测试结论：</strong>" + message[index].conclusion;
        var remarks = document.getElementById("collapse-remarks-" + index);
        remarks.children[0].innerHTML = "<strong>备注：</strong>" + message[index].remark;
    }
}

//获取测试用例
function getInfo(number) {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/testUtil/testUnitFind",
    //     data: {
    //         number: Number(number),
    //         sessionId: getCookie(),
    //     },
    //     dataType: "JSON",
    //     success: function (response) {
    //         var send = response.send;
    //         var result = response.result;
    //         if(result == false)
    //             return;
    //         if (send[0] != null) {
    //             dataBind(send);
    //         } else {
    //             if (page != 1)
    //                 page--;
    //         }
    //     },
    //     error: function () {
    //         if (page != 1)
    //             page--;
    //     }
    // });
}
var page = 1;
//上一页
function previous() {
    if (page > 1) {
        getInfo(--page);
    }
}
//下一页
function next() {
    if (page >= 1) {
        getInfo(++page);
    }
}
//初始化，获取第一页
document.body.onload = getInfo(page);