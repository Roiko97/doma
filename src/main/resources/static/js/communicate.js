
//获取交流内容
function getInfo(number) {
    var list = document.getElementsByClassName("list-group")[0];
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/testUtil/communicateFind",
    //     data: {
    //         "number": Number(number),
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

//发布功能
function createNews(obj) {
    $(obj).button('loading');
    if($("#heading").val() == "" || $("#data").val() == ""){
        $(obj).button("reset");
        return;
    }else if($("#heading").val().indexOf(" ") != -1){
        $(obj).button("reset");
        alert("标题不能含有空格");
        return;
    }
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/testUtil/communicateInsert",
    //     dataType: "JSON",
    //     data: $("#send-communicate").serialize() + "&sessionId=" + getCookie(),
    //     success: function (response) {
    //         var result = response.communicate;
    //         if (result == undefined) {
    //             var alert = createModula(1, "div", {
    //                 name: ["class"],
    //                 value: ["alert alert-warning"]
    //             }, [
    //                 createModula(1, "a", {
    //                     name: ["class", "data-dismiss"],
    //                     value: ["close", "alert"]
    //                 }, createModula(3, "关闭")),
    //                 createModula(1, "strong", "", createModula(3, "错误!")),
    //                 createModula(3, "发布失败,两秒后提示消失")
    //             ])
    //             $(alert).insertAfter($("#data"));
    //             setTimeout(function () {
    //                 $(obj).button("reset");
    //                 $('.alert').alert('close');
    //
    //             }, 2000);
    //         } else {
    //             var alert = createModula(1, "div", {
    //                 name: ["class"],
    //                 value: ["alert alert-success"]
    //             }, [
    //                 createModula(1, "a", {
    //                     name: ["class", "data-dismiss"],
    //                     value: ["close", "alert"]
    //                 }, createModula(3, "关闭")),
    //                 createModula(1, "strong", "", createModula(3, "提示!")),
    //                 createModula(3, "发布成功，两秒后自动刷新")
    //             ])
    //             $(alert).insertAfter($("#data"));
    //             setTimeout(function () {
    //                 $('.alert').alert('close');
    //                 window.location.reload();
    //             }, 2000);
    //         }
    //     }
    // });
}

//数据绑定
function dataBind(message) {
    var list = document.getElementsByClassName("item");
    var title = document.getElementsByClassName("item-title");
    var author = document.getElementsByClassName("item-author");
    var news = document.getElementsByClassName("item-news");
    var time = document.getElementsByClassName("item-footer");
    var len = message.length;
    for (var i = 0; i < len; i++) {
        if (message[i] == null) {
            list[i].classList.add("hidden");
            continue;
        }
        list[i].classList.remove("hidden");
        title[i].innerHTML =  message[i].heading;
        author[i].innerHTML = "<strong>作者：</strong>" + message[i].announcer;
        time[i].innerHTML = "<span class='label label-primary pull-right'>" + message[i].releasetime + "</span>";
        if (message[i].data == undefined) {
            news[i].innerHTML = " ";
        } else {
            news[i].innerHTML = message[i].data;
        }
        list[i].setAttribute("id", message[i].id);
    }
};

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