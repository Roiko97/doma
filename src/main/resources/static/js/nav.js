
function getCookie() {
    var cookie = document.cookie;
    var arr = cookie.split(";");
    console.log(arr)
    for(var i =0;i < arr.length;i++){
        var res =arr[i].split("=")[0];
        res = res.replace(/\s+/g,"");
        //if(arr[i].split("=")[0] === " sessionId") {
        if(res ==="sessionId"){
            console.log("result "+arr[i].split("=")[1]);
            return arr[i].split("=")[1];
        }else{
            console.log("this is else:"+arr[i].split("=")[0]);
        }
    }
};

function deleteCookie() {
    document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//个人信息显示
let info_div = document.createElement("div");
let name = document.createElement("p");
let num = document.createElement("p");
let grade = document.createElement("p");
let info_btn = document.createElement("button");
let up_div = document.createElement("div");
let span_up = document.createElement("span");
info_div.classList.add("info-part", "hidden");
name.innerHTML = "<strong><img src='../src/name.png' alt='姓名'></strong>";
num.innerHTML = "<strong><img src='../src/grade.png' alt='年级'></strong>";
grade.innerHTML = "<strong><img src='../src/num.png' alt='学号'></strong>";
info_btn.classList.add("btn", "btn-danger");
up_div.classList.add("up-div", "text-center");
up_div.setAttribute("onclick", "showInfo()");
span_up.classList.add("glyphicon", "glyphicon-menu-up");
info_btn.setAttribute("onclick", "outLogin()");
info_btn.innerHTML = "注销";
up_div.appendChild(span_up);
info_div.appendChild(name);
info_div.appendChild(grade);
info_div.appendChild(num);
info_div.appendChild(document.createElement("hr"));
info_div.appendChild(info_btn);

info_div.appendChild(up_div);

document.body.appendChild(info_div);

//消息栏
var news = document.createElement("div");
news.classList.add("fixed-news", "hidden");
news.setAttribute("id", "fixed-news");
let up_div_news = document.createElement("div");
let span_up_news = document.createElement("span");
span_up_news.classList.add("glyphicon", "glyphicon-menu-up");
up_div_news.classList.add("up-div", "text-center");
up_div_news.setAttribute("onclick", "openNews()");
up_div_news.appendChild(span_up_news);
news.appendChild(up_div_news);
document.body.appendChild(news);

let status = true;
//控制导航栏隐藏和显示
function navStatus() {
    $(".navbar-left").toggleClass("hidden");
}
//显示个人信息
function showInfo() {
    let info = document.getElementsByClassName("info-part")[0];
    document.querySelector(".fixed-news").classList.add("hidden");
    let state = info.classList.toggle("hidden");
    if (!state) {
        // $.ajax({
        //     type: "POST",
        //     url: "http://localhost:8989/login/userMessage",
        //     dataType: "JSON",
        //     data: {
        //         sessionId: getCookie(),
        //     },
        //     success: function (response) {
        //         var result = response.message[0];
        //         info.children[0].innerHTML =
        //             "<strong>姓名：</strong>" + result.student_name;
        //         info.children[1].innerHTML =
        //             "<strong>学号：</strong>" + result.student_id;
        //         info.children[2].innerHTML =
        //             "<strong>年级：</strong>" + result.datatime;
        //     }
        // });
    }
}
//注销
function outLogin() {
    // $.ajax({
    //     type: "post",
    //     url: "http://localhost:8989/login/userCancellation",
    //     data: {
    //         sessionId: getCookie(),
    //     },
    //     dataType: "JSON",
    //     success: function(re) {
    //         console.log(re);
    //         deleteCookie();
    //         location.href = "/coordination/jump/home";
    //     },
    //     error: function() {
    //         alert("注销失败！ ");
    //     }
    // });
}
//获取当前队伍
(function getTeam() {
    var anchor = document.getElementsByClassName("title-select")[0];
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/team/teamFind",
    //     data: {
    //         sessionId: getCookie(),
    //     },
    //     dataType: "JSON",
    //     success: function (response) {
    //         var arr = response.team;
    //         var option;
    //         if (arr == null) {
    //             anchor.remove();
    //         } else {
    //             arr.forEach(e => {
    //                 option = document.createElement("option");
    //                 option.innerHTML = e.heading;
    //                 option.value = e.mark;
    //                 anchor.append(option);
    //             });
    //             anchor.value = response.mark;
    //             anchor.classList.remove("hidden");
    //             getTask();
    //         }
    //     }
    // });
})();

//切换队伍功能
function amendTeam(obj) {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/team/teamChange",
    //     data: {
    //         mark: obj.value,
    //         sessionId: getCookie(),
    //     },
    //     dataType: "JSON",
    //     success: function (response) {
    //         var result = response.result;
    //         if (result) {
    //             window.location.reload();
    //         } else {
    //             alert("切换失败");
    //         }
    //     }
    // });
}

//里程碑内容隐藏
function detailHidden() {
    var left = document.getElementsByClassName("left-task")[0];
    left.classList.add("hidden");
}
//里程碑内容显示
function detailShow() {
    var left = document.getElementsByClassName("left-task")[0];
    left.classList.remove("hidden");
}
//里程碑内容切换
function toggleDetail() {
    var left = document.getElementsByClassName("left-task")[0];
    left.classList.toggle("hidden");
}

//里程碑隐藏
function taskHidden() {
    var left = document.getElementsByClassName("left-task")[0];
    var right = document.getElementsByClassName("task-body")[0];
    left.classList.add("hidden");
    right.classList.add("hidden");
}

//里程碑显示
function taskShow() {
    var right = document.getElementsByClassName("task-body")[0];
    var flag = right.classList.toggle("hidden");
    if (flag) {
        detailHidden();
    }

}

//里程碑内容获取
function getTask() {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/level/missionLevel",
    //     dataType: "JSON",
    //     data: {
    //         sessionId: getCookie(),
    //     },
    //     success: function (response) {
    //         var result = response.result;
    //         if (result !== false){
    //             $.ajax({
    //             type: "post",
    //             url: "http://localhost:8989/level/" + result.toString(),
    //             dataType: "JSON",
    //             data: {
    //                 sessionId: getCookie(),
    //             },
    //             success: function (response) {
    //                 createTast();
    //                 setTask(response);
    //                 }
    //             });
    //         }
    //     }
    // });
}

//创建里程碑
function createTast() {
    //右下角里程碑
    var detail_body = document.createElement("div");
    var left_task = document.createElement("div");
    var detail_close = document.createElement("button");
    var detail_title = document.createElement("div");
    var detail_p = document.createElement("p");
    left_task.appendChild(detail_close);
    left_task.appendChild(detail_title);
    left_task.appendChild(detail_body);
    detail_title.appendChild(detail_p);

    left_task.classList.add("left-task", "hidden");
    detail_close.setAttribute("type", "button");
    detail_close.setAttribute("onclick", "detailHidden()");
    detail_close.classList.add("close");
    detail_close.innerHTML = "&times;";
    detail_title.setAttribute("onclick", "toggleDetail()");
    detail_title.classList.add("detail-title");
    detail_p.classList.add("text-center");
    detail_p.innerHTML = "里程碑内容";
    detail_body.classList.add("detail-body", "tab-content");
    detail_body.setAttribute("id", "tab-info");
    var right_task = document.createElement("div");
    var task_close = document.createElement("button");
    var task_title = document.createElement("div");
    var task_p = document.createElement("p");
    var task_body = document.createElement("div");
    var state_nav = document.createElement("div");
    var nav_list = document.createElement("ul");
    var task_list = document.createElement("div");
    var nav_li_1 = document.createElement("li");
    var nav_li_2 = document.createElement("li");
    var nav_li_3 = document.createElement("li");
    var task_pane_1 = document.createElement("div");
    var task_pane_2 = document.createElement("div");
    var task_pane_3 = document.createElement("div");
    right_task.appendChild(task_close);
    right_task.appendChild(task_title);
    right_task.appendChild(task_body);
    task_title.appendChild(task_p);
    task_body.appendChild(nav_list);
    task_body.appendChild(task_list);
    nav_list.appendChild(nav_li_1);
    nav_list.appendChild(nav_li_2);
    nav_list.appendChild(nav_li_3);
    task_list.appendChild(task_pane_1);
    task_list.appendChild(task_pane_2);
    task_list.appendChild(task_pane_3);

    right_task.classList.add("right-task");
    task_close.classList.add("close", "pull-left");
    task_close.setAttribute("type", "button");
    task_close.setAttribute("onclick", "taskHidden()");
    task_close.innerHTML = "&times;";
    task_title.setAttribute("onclick", "taskShow()");
    task_title.classList.add("task-title");
    task_p.classList.add("text-center");
    task_p.innerHTML = "<img src='../src/task.png'alt='任务'>里程碑";
    task_body.classList.add("task-body", "hidden");

    task_list.classList.add("task-list", "tab-content");
    task_list.setAttribute("id", "task-tab");
    task_pane_1.setAttribute("id", "nostart");
    task_pane_2.setAttribute("id", "doing");
    task_pane_3.setAttribute("id", "end");
    task_pane_1.classList.add("tab-pane", "fade");
    task_pane_2.classList.add("tab-pane", "fade", "in", "active");
    task_pane_3.classList.add("tab-pane", "fade");

    nav_list.classList.add("nav", "nav-tabs");
    nav_li_1.setAttribute("role", "presentation");
    nav_li_1.innerHTML =
        "<a href='#nostart' data-toggle='tab' ><img src='../src/nostart.png'alt='未开始'>未开始</a>";
    nav_li_2.setAttribute("role", "presentation");
    nav_li_2.classList.add("active");
    nav_li_2.innerHTML =
        "<a href='#doing' data-toggle='tab' ><img src='../src/doing.png'alt='进行中'>进行中</a>";
    nav_li_3.setAttribute("role", "presentation");
    nav_li_3.innerHTML =
        "<a href='#end' data-toggle='tab' ><img src='../src/finsh.png'alt='完成'>完成</a>";

    document
        .getElementById("main")
        .insertBefore(left_task, document.getElementById("main").firstChild);
    document
        .getElementById("main")
        .insertBefore(right_task, document.getElementById("main").firstChild);
}
//写入里程碑内容
function setTask(message) {
    if (message.Nostart.length > 0) {
        var ul = $("<ul class='task-list-ul'></ul>");
        for (var index of message.Nostart) {
            var li = $(
                "<li role='presentation'><a href='#tap" + index.id + "' data-toggle='tab' onclick='detailShow()'><span class='glyphicon glyphicon-chevron-right'>&nbsp;</span>" + index.name + "</a></li>"
            );
            ul.append(li);

            var detail_body = document.getElementsByClassName("detail-body")[0];
            var detail_list = document.createElement("ul");
            var li_1 = document.createElement("li");
            var li_2 = document.createElement("li");
            var li_3 = document.createElement("li");
            var li_4 = document.createElement("li");
            detail_body.appendChild(detail_list);
            detail_list.appendChild(li_1);
            detail_list.appendChild(li_2);
            detail_list.appendChild(li_3);
            detail_list.appendChild(li_4);
            li_1.classList.add("detail-task-title");
            li_2.classList.add("detail-task-introduce");
            li_3.classList.add("detail-task-process");
            li_4.classList.add("detail-task-effect");
            detail_list.setAttribute("id", "tap" + index.id);
            detail_list.classList.add("tab-pane", "fade", "detail-list");
            li_1.innerHTML =
                "<h3>—&nbsp;" + index.name + "&nbsp;—</h3> <a class='btn btn-primary pull-right' href= '"+index.jump+"' id='skip'>跳转</a>";
            li_2.innerHTML = "<strong>介绍:</strong></br><p>" + index.introduce + "</p>";
            li_3.innerHTML = "<strong>过程:</strong></br><p>" + index.process + "</p>";
            li_4.innerHTML = "<strong>作用:</strong></br><p>" + index.effect + "</p>";

            document.getElementById("tab-info").appendChild(detail_list);
        }
        $("#nostart").append(ul);
    }
    if (message.working.length > 0) {
        var ul = $("<ul class='task-list-ul'></ul>");
        for (var index of message.working) {
            var li = $(
                "<li role='presentation'><a href='#tap" + index.id + "' data-toggle='tab' onclick='detailShow()'><span class='glyphicon glyphicon-chevron-right'>&nbsp;</span>" + index.name + "</a></li>"
            );
            ul.append(li);

            var detail_list = document.createElement("ul");
            var li_1 = document.createElement("li");
            var li_2 = document.createElement("li");
            var li_3 = document.createElement("li");
            var li_4 = document.createElement("li");
            detail_body.appendChild(detail_list);
            detail_list.appendChild(li_1);
            detail_list.appendChild(li_2);
            detail_list.appendChild(li_3);
            detail_list.appendChild(li_4);
            li_1.classList.add("detail-task-title");
            li_2.classList.add("detail-task-introduce");
            li_3.classList.add("detail-task-process");
            li_4.classList.add("detail-task-effect");
            detail_list.setAttribute("id", "tap" + index.id);
            detail_list.classList.add("tab-pane", "fade", "detail-list");
            li_1.innerHTML =
                "<h3>—&nbsp;" + index.name + "&nbsp;—</h3> <a class='btn btn-primary pull-right' href='" + index.jump + "' id='skip'>跳转</a>";
            li_2.innerHTML = "<strong>介绍:</strong></br><p>" + index.introduce + "</p>";
            li_3.innerHTML = "<strong>过程:</strong></br><p>" + index.process + "</p>";
            li_4.innerHTML = "<strong>作用:</strong></br><p>" + index.effect + "</p>";

            document.getElementById("tab-info").appendChild(detail_list);
        }
        $("#doing").append(ul);
    }
    if (message.finish.length > 0) {
        var ul = $("<ul class='task-list-ul'></ul>");
        for (var index of message.finish) {
            var li = $(
                "<li role='presentation'><a href='#tap" + index.id + "' data-toggle='tab' onclick='detailShow()'><span class='glyphicon glyphicon-chevron-right'>&nbsp;</span>" + index.name + "</a></li>"
            );
            ul.append(li);

            var detail_list = document.createElement("ul");
            var li_1 = document.createElement("li");
            var li_2 = document.createElement("li");
            var li_3 = document.createElement("li");
            var li_4 = document.createElement("li");
            detail_body.appendChild(detail_list);
            detail_list.appendChild(li_1);
            detail_list.appendChild(li_2);
            detail_list.appendChild(li_3);
            detail_list.appendChild(li_4);
            li_1.classList.add("detail-task-title");
            li_2.classList.add("detail-task-introduce");
            li_3.classList.add("detail-task-process");
            li_4.classList.add("detail-task-effect");
            detail_list.setAttribute("id", "tap" + index.id);
            detail_list.classList.add("tab-pane", "fade", "detail-list");
            li_1.innerHTML =
                "<h3>—&nbsp;" + index.name + "&nbsp;—</h3> <a class='btn btn-primary pull-right' href='" + index.jump + "'id='skip'>跳转</a>";
            li_2.innerHTML = "<strong>介绍:</strong></br><p>" + index.introduce + "</p>";
            li_3.innerHTML = "<strong>过程:</strong></br><p>" + index.process + "</p>";
            li_4.innerHTML = "<strong>作用:</strong></br><p>" + index.effect + "</p>";

            document.getElementById("tab-info").appendChild(detail_list);
        }
        $("#end").append(ul);
    }
}
//显示状态里程碑
function stateShow(obj) {
    var nostart = document.getElementById("noStart");
    var doing = document.getElementById("doing");
    var end = document.getElementById("end");
    if (obj.innerHTML == "未开始") {
        //状态显示
        nostart.classList.add("active");
        doing.classList.remove("active");
        end.classList.remove("active");
        //
    } else if (obj.innerHTML == "进行中") {
        //状态显示
        doing.classList.add("active");
        nostart.classList.remove("active");
        end.classList.remove("active");
    } else {
        //状态显示
        end.classList.add("active");
        doing.classList.remove("active");
        nostart.classList.remove("active");
    }
}
//改变消息栏信息的显示
function showNews(obj) {
    var flag = obj.parentNode.classList.toggle("hidden-li");
    obj.innerHTML = flag ?
        "<span class='glyphicon glyphicon-chevron-right'></span>" :
        "<span class='glyphicon glyphicon-chevron-down'></span>";
}
//信息栏显示和隐藏
function openNews() {
    var id = document.getElementById("fixed-news");
    document.querySelector(".info-part").classList.add("hidden");
    id.classList.toggle("hidden");
}

//消息获取
(function getNews() {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/team/checkMessage",
    //     dataType: "JSON",
    //     data: {
    //         sessionId: getCookie(),
    //     },
    //     success: function (response) {
    //         var result = response.message;
    //         if (result != null) {
    //             for (var index of result) {
    //                 //邀请信息
    //                 var li = document.createElement("li");
    //                 li.setAttribute("id", "mark");
    //
    //                 li.classList.add("h4", "hidden-li");
    //                 var show_btn = document.createElement("button");
    //                 show_btn.classList.add("btn", "btn-link", "btn-sm");
    //                 show_btn.setAttribute("onclick", "showNews(this)");
    //                 show_btn.innerHTML = "<span class='glyphicon glyphicon-chevron-right'></span>";
    //                 var time = index.releasetime.split(" ")[0];
    //                 var text = document.createTextNode(index.sendname + "邀请您加入到" + index.heading + "。是否同意邀请?" + time);
    //                 var btn_group = document.createElement("div");
    //                 btn_group.classList.add("text-center", "btn-group", "btn-block");
    //                 var ok_btn = document.createElement("button");
    //                 ok_btn.classList.add("btn", "btn-group-sm", "btn-link");
    //                 ok_btn.setAttribute(
    //                     "onclick",
    //                     "answerNews('" + index.mark + "'," + 1 + ")"
    //                 );
    //                 ok_btn.innerHTML = "<span class='glyphicon glyphicon-ok'></span>";
    //                 var remove_btn = document.createElement("button");
    //                 remove_btn.classList.add("btn", "btn-group-sm", "btn-link");
    //                 remove_btn.setAttribute(
    //                     "onclick",
    //                     "answerNews('" + index.mark + "'," + 2 + ")"
    //                 );
    //                 remove_btn.innerHTML =
    //                     "<span class='glyphicon glyphicon-remove'></span>";
    //
    //                 li.appendChild(show_btn);
    //                 li.appendChild(text);
    //
    //                 btn_group.appendChild(ok_btn);
    //                 btn_group.appendChild(remove_btn);
    //                 li.appendChild(btn_group);
    //
    //                 var anchor = document.getElementById("fixed-news");
    //                 anchor.insertBefore(li, anchor.lastChild);
    //             }
    //         }
    //     }
    // });
})();
//消息答复
function answerNews(mark, result) {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/team/receiveMessage",
    //     data: {
    //         result: result,
    //         mark: mark,
    //         sessionId: getCookie(),
    //     },
    //     dataType: "JSON",
    //     success: function (response) {
    //         var result = response.result;
    //         if (!result) {
    //             alert("队伍加入失败！");
    //         }
    //         window.location.reload();
    //     }
    // });
}