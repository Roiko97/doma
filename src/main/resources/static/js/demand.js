//设置模板
function selectModual(level,num) {
    var re = confirm("模板会覆盖原有文档，确认覆盖?");
    if(re){}
        // $.ajax({
        //     type: "POST",
        //     url: "http://localhost:8989/word/demo",
        //     data: {
        //         id: num.toString(),
        //         level:level.toString(),
        //         sessionId: getCookie(),
        //     },
        //     dataType: "JSON",
        //     success: function (response) {
        //         var result = response.result;
        //         if(result){
        //             window.location.href = "/coordination/jump/toDocument";
        //         }else{
        //             alert("设置模板失败!");
        //             window.location.reload();
        //         }
        //     }
        // });
}

//获取等级
(function getGrade() {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/login/userMessage",
    //     dataType: "JSON",
    //     data: {
    //         sessionId: getCookie(),
    //     },
    //     success: function (response) {
    //         var result = response.message[0];
    //         result.datatime;
    //         openModual(result.datatime);
    //     }
    // });
})();

//根据年级不同开发不同模板
function openModual(str) {
    var list = document.getElementsByClassName("img-responsive");
    switch (str) {
        case "大三":
            list[2].parentNode.setAttribute("class", "refresh-lock");
            list[2].setAttribute("src", "../src/refresh-lock.png");
            list[1].parentNode.setAttribute("class", "refresh-lock");
            list[1].setAttribute("src", "../src/refresh-lock.png");
            list[0].parentNode.setAttribute("class", "refresh-lock");
            list[0].setAttribute("src", "../src/refresh-lock.png");
            break;
        case "大二":
            list[2].parentNode.setAttribute("class", "lock");
            list[2].setAttribute("src", "../src/lock.png");
            list[1].parentNode.setAttribute("class", "refresh-lock");
            list[1].setAttribute("src", "../src/refresh-lock.png");
            list[0].parentNode.setAttribute("class", "refresh-lock");
            list[0].setAttribute("src", "../src/refresh-lock.png");
            break;
        default:
            list[2].parentNode.setAttribute("class", "lock");
            list[2].setAttribute("src", "../src/lock.png");
            list[1].parentNode.setAttribute("class", "lock");
            list[1].setAttribute("src", "../src/lock.png");
            list[0].parentNode.setAttribute("class", "refresh-lock");
            list[0].setAttribute("src", "../src/refresh-lock.png");
            break;
    }

};