// ==UserScript==
// @name         智慧树回答页面支持复制粘贴
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       suchun
// @match        https://creditqa-web.zhihuishu.com/shareCourse/questionDetailPage?sourceType=2&qid=305408264
// @grant        at ease
// @include      https://creditqa-web.zhihuishu.com/shareCourse/questionDetailPage?*
// @include      https://creditqa-web.zhihuishu.com/shareCourse/qaAnswerIndexPage?*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@9
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    window.onload=function(){
//支持拖选
        document.onselectstart = function() {
            return true;
        };
//让回答框支持复制粘贴
        if($("#aContent").length){
            $("#aContent").attr("onpaste","return true");
            $("#aContent").attr("oncopy","return true");
            $("#aContent").attr("oncut","return true");
            $("#aContent").attr("oncontextmenu","return true");
        };
//让提问框支持复制粘贴
        if($("#save_question").length){
            $("#save_question").attr("onpaste","return true");
            $("#save_question").attr("oncopy","return true");
            $("#save_question").attr("oncut","return true");
            $("#save_question").attr("oncontextmenu","return true");
        };}
})();