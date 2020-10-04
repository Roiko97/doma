//写入内容
function setContent(isAppendTo, str) {
    UE.getEditor('editor').setContent(str, isAppendTo);
}

//获取草稿内容
function getLocalData() {
    setContent(false, UE.getEditor('editor').execCommand("getlocaldata"));
}

//清空内容
function clearLocalData() {
    var flag = confirm("文本区域将被清空，请手动保存文件！确定清空？");
    if (flag) {
        UE.getEditor('editor').execCommand("clearlocaldata");
        setContent(false, "");
    }
}

// 获取内容
function getContent() {
    var arr = [];
    if (hasContent()) {
        arr.push(getAllHtml());
        // sendForm(arr, "http://localhost:8989/word/tableWrite", "POST");
    } else {
        showAlert(".revise-text", "内容为空，保存失败！", "danger");
    }
}

//判断是否有内容
function hasContent() {
    var result;
    result = UE.getEditor('editor').hasContents();
    return result;
}

// 虚拟表单提交
function sendForm(data, url, method) {
    data = data.toString();
    // $.ajax({
    //     type: method,
    //     url: url,
    //     data: {
    //         data: data,
    //         sessionId: getCookie(),
    //     },
    //     dataType: "JSON",
    //     success: function (response) {
    //         var result = response.result;
    //         var data = response.data;
    //         if (result) {
    //             showAlert(".revise-text", "提交保存成功", "success");
    //         } else {
    //             showAlert(".revise-text", "提交保存失败", "danger");
    //         }
    //     }
    // });
}

//获取服务器文档
function getText() {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/word/tablefind",
    //     dataType: "JSON",
    //     data: {
    //         sessionId: getCookie(),
    //     },
    //     success: function (response) {
    //         var data = response.data;
    //         if(data != undefined){
    //             setContent(false, "");
    //             insertHtml(data);
    //         }else{
    //             showAlert(".revise-text","未保存文档","danger")
    //         }
    //     }
    // });
}

//显示服务器文档
function showText() {
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8989/word/tablefind",
    //     dataType: "JSON",
    //     data: {
    //         sessionId: getCookie(),
    //     },
    //     success: function (response) {
    //         var data = response.data;
    //         if (data != undefined && data.length > 0) {
    //             //展示文本
    //             $("#show-text").append($(data));
    //         } else {
    //             var result = confirm("未保存文档，是否跳转，选择模板文档？");
    //             if(result){
    //                 window.location.href = "/coordination/jump/toDemand";
    //             }else{
    //                 $('.revise-text').click();
    //             }
    //         }
    //     }
    // });
};

// 显示提示框
function showAlert(rivet, text, state) {
    $('.alert').alert('close');
    var alert = createModula(1, "div", {
        name: ["class"],
        value: ["alert alert-" + state]
    }, [
        createModula(1, "a", {
            name: ["class", "data-dismiss"],
            value: ["close", "alert"]
        }, createModula(3, "关闭")),
        createModula(1, "strong", "", createModula(3, "提示!")),
        createModula(3, text)
    ])
    $(alert).insertAfter($(rivet));
}

//显示修改
function showEditor(obj){
    obj.classList.add("hidden");
    $(".show-text").addClass("hidden");
    UE.getEditor('editor').setShow();
    getText();
    $(".fixed-nav").removeClass("hidden");
}