//实例化编辑器
        //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
        var ue = UE.getEditor('editor');

        // ue.addListener( 'ready', function( editor ) {
        //     UE.getEditor('editor').setHide();
        //     showText();
        //
        // } );
        function isFocus(e) {
            alert(UE.getEditor('editor').isFocus());
            UE.dom.domUtils.preventDefault(e)
        }

        function setblur(e) {
            UE.getEditor('editor').blur();
            UE.dom.domUtils.preventDefault(e)
        }

        function insertHtml(value) {
            UE.getEditor('editor').execCommand('insertHtml', value)
        }

        function createEditor() {
            enableBtn();
            UE.getEditor('editor');
        }

        function getAllHtml() {
            return UE.getEditor('editor').getAllHtml();
        }


        function getPlainTxt() {
            var arr = [];
            arr.push("使用editor.getPlainTxt()方法可以获得编辑器的带格式的纯文本内容");
            arr.push("内容为：");
            arr.push(UE.getEditor('editor').getPlainTxt());
            alert(arr.join('\n'))
        }

        function setDisabled() {
            UE.getEditor('editor').setDisabled('fullscreen');
            disableBtn("enable");
        }

        function setEnabled() {
            UE.getEditor('editor').setEnabled();
            enableBtn();
        }

        function setFocus() {
            UE.getEditor('editor').focus();
        }

        function deleteEditor() {
            disableBtn();
            UE.getEditor('editor').destroy();
        }

        function disableBtn(str) {
            var div = document.getElementById('btns');
            var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
            for (var i = 0, btn; btn = btns[i++];) {
                if (btn.id == str) {
                    UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
                } else {
                    btn.setAttribute("disabled", "true");
                }
            }
        }

        function enableBtn() {
            var div = document.getElementById('btns');
            var btns = UE.dom.domUtils.getElementsByTagName(div, "button");
            for (var i = 0, btn; btn = btns[i++];) {
                UE.dom.domUtils.removeAttributes(btn, ["disabled"]);
            }
        }