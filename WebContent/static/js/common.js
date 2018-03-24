

/*boxy*/
jQuery.fn.boxy = function (options) { options = options || {}; return this.each(function () { var node = this.nodeName.toLowerCase(), self = this; if (node == 'a') { jQuery(this).click(function () { var active = Boxy.linkedTo(this), href = this.getAttribute('href'), localOptions = jQuery.extend({ actuator: this, title: this.title }, options); if (active) { active.show() } else if (href.indexOf('#') >= 0) { var content = jQuery(href.substr(href.indexOf('#'))), newContent = content.clone(true); content.remove(); localOptions.unloadOnHide = false; new Boxy(newContent, localOptions) } else { if (!localOptions.cache) localOptions.unloadOnHide = true; Boxy.load(this.href, localOptions) }; return false }) } else if (node == 'form') { jQuery(this).bind('submit.boxy', function () { Boxy.confirm(options.message || 'Please confirm:', function () { jQuery(self).unbind('submit.boxy').submit() }); return false }) } }) }; function Boxy(element, options) { this.boxy = jQuery(Boxy.WRAPPER); jQuery.data(this.boxy[0], 'boxy', this); this.visible = false; this.options = jQuery.extend({}, Boxy.DEFAULTS, options || {}); this.options.useIframe = (this.options.useIframe && jQuery.browser.msie && jQuery.browser.version < 7); if (this.options.useIframe) { this.options = jQuery.extend(this.options, { modal: true }) }; if (this.options.modal) { this.options = jQuery.extend(this.options, { center: true, draggable: false }) }; if (this.options.actuator) { jQuery.data(this.options.actuator, 'active.boxy', this) }; this.setContent(element || "<div></div>"); this._setupTitleBar(); this.boxy.css('display', 'none').appendTo(document.body); this.toTop(); if (this.options.fixed) { if (jQuery.browser.msie && jQuery.browser.version < 7) { this.options.fixed = false; } else { this.boxy.addClass('fixed') } }; if (this.options.center && Boxy._u(this.options.x, this.options.y)) { this.center() } else { this.moveTo(Boxy._u(this.options.x) ? this.options.x : Boxy.DEFAULT_X, Boxy._u(this.options.y) ? this.options.y : Boxy.DEFAULT_Y) }; if (this.options.show) this.show() }; Boxy.EF = function () { }; jQuery.extend(Boxy, { WRAPPER: "<table cellspacing='0' cellpadding='0' border='0' class='boxy-wrapper'>" + "<tr><td class='top-left'></td><td class='top'></td><td class='top-right'></td></tr>" + "<tr><td class='inner-left'></td><td class='boxy-inner'></td><td class='inner-right'></td></tr>" + "<tr><td class='bottom-left'></td><td class='bottom'></td><td class='bottom-right'></td></tr>" + "</table>", DEFAULTS: { title: null, closeable: true, draggable: true, clone: false, actuator: null, center: true, show: true, modal: false, fixed: true, closeText: "关闭", unloadOnHide: false, clickToFront: false, behaviours: Boxy.EF, afterDrop: Boxy.EF, afterShow: Boxy.EF, afterHide: Boxy.EF, beforeUnload: Boxy.EF, useIframe: false }, DEFAULT_X: 50, DEFAULT_Y: 50, zIndex: 1337, dragConfigured: false, resizeConfigured: false, dragging: null, load: function (url, options) { options = options || {}; var ajax = { url: url, type: 'GET', dataType: 'html', cache: false, success: function (html) { html = jQuery(html); if (options.filter) html = jQuery(options.filter, html); new Boxy(html, options) } }; jQuery.each(['type', 'cache'], function () { if (this in options) { ajax[this] = options[this]; delete options[this] } }); jQuery.ajax(ajax) }, get: function (ele) { var p = jQuery(ele).parents('.boxy-wrapper'); return p.length ? jQuery.data(p[0], 'boxy') : null }, linkedTo: function (ele) { return jQuery.data(ele, 'active.boxy') }, alert: function (message, callback, options) { return Boxy.ask(message, ['确定'], callback, options) }, confirm: function (message, after, options) { return Boxy.ask(message, ['确定', '取消'], function (response) { if (response == '确定') after() }, options) }, ask: function (question, answers, callback, options) { options = jQuery.extend({ modal: true, closeable: false }, options || {}, { show: true, unloadOnHide: true }); var body = jQuery('<div></div>').append(jQuery('<div class="question"></div>').html(question)); var map = {}, answerStrings = []; if (answers instanceof Array) { for (var i = 0; i < answers.length; i++) { map[answers[i]] = answers[i]; answerStrings.push(answers[i]) } } else { for (var k in answers) { map[answers[k]] = k; answerStrings.push(answers[k]) } }; var buttons = jQuery('<form class="answers"></form>'); buttons.html(jQuery.map(answerStrings, function (v) { return "<input type='button' value='" + v + "' />" }).join(' ')); jQuery('input[type=button]', buttons).click(function () { var clicked = this; Boxy.get(this).hide(function () { if (callback) callback(map[clicked.value]) }) }); body.append(buttons); new Boxy(body, options) }, isModalVisible: function () { return jQuery('.boxy-modal-blackout').length > 0 }, _u: function () { for (var i = 0; i < arguments.length; i++) if (typeof arguments[i] != 'undefined') return false; return true }, _handleResize: function (evt) { var d = jQuery(document); jQuery('.boxy-modal-blackout').css('display', 'none').css({ width: d.width(), height: d.height() }).css('display', 'block') }, _handleDrag: function (evt) { var d; if (d = Boxy.dragging) { d[0].boxy.css({ left: evt.pageX - d[1], top: evt.pageY - d[2] }) } }, _nextZ: function () { return Boxy.zIndex++ }, _viewport: function () { var d = document.documentElement, b = document.body, w = window; return jQuery.extend(jQuery.browser.msie ? { left: b.scrollLeft || d.scrollLeft, top: b.scrollTop || d.scrollTop } : { left: w.pageXOffset, top: w.pageYOffset }, !Boxy._u(w.innerWidth) ? { width: w.innerWidth, height: w.innerHeight } : (!Boxy._u(d) && !Boxy._u(d.clientWidth) && d.clientWidth != 0 ? { width: d.clientWidth, height: d.clientHeight } : { width: b.clientWidth, height: b.clientHeight })) } }); Boxy.prototype = { estimateSize: function () { this.boxy.css({ visibility: 'hidden', display: 'block' }); var dims = this.getSize(); this.boxy.css('display', 'none').css('visibility', 'visible'); return dims }, getSize: function () { return [this.boxy.width(), this.boxy.height()] }, getContentSize: function () { var c = this.getContent(); return [c.width(), c.height()] }, getPosition: function () { var b = this.boxy[0]; return [b.offsetLeft, b.offsetTop] }, getCenter: function () { var p = this.getPosition(); var s = this.getSize(); return [Math.floor(p[0] + s[0] / 2), Math.floor(p[1] + s[1] / 2)] }, getInner: function () { return jQuery('.boxy-inner', this.boxy) }, getContent: function () { return jQuery('.boxy-content', this.boxy) }, setContent: function (newContent) { newContent = jQuery(newContent).css({ display: 'block' }).addClass('boxy-content'); if (this.options.clone) newContent = newContent.clone(true); this.getContent().remove(); this.getInner().append(newContent); this._setupDefaultBehaviours(newContent); this.options.behaviours.call(this, newContent); return this }, moveTo: function (x, y) { this.moveToX(x).moveToY(y); return this }, moveToX: function (x) { if (typeof x == 'number') this.boxy.css({ left: x }); else this.centerX(); return this }, moveToY: function (y) { if (typeof y == 'number') this.boxy.css({ top: y }); else this.centerY(); return this }, centerAt: function (x, y) { var s = this[this.visible ? 'getSize' : 'estimateSize'](); if (typeof x == 'number') this.moveToX(x - s[0] / 2); if (typeof y == 'number') this.moveToY(y - s[1] / 2); return this }, centerAtX: function (x) { return this.centerAt(x, null) }, centerAtY: function (y) { return this.centerAt(null, y) }, center: function (axis) { var v = Boxy._viewport(); var o = this.options.fixed ? [0, 0] : [v.left, v.top]; if (!axis || axis == 'x') this.centerAt(o[0] + v.width / 2, null); if (!axis || axis == 'y') this.centerAt(null, o[1] + v.height / 2); return this }, centerX: function () { return this.center('x') }, centerY: function () { return this.center('y') }, resize: function (width, height, after) { if (!this.visible) return; var bounds = this._getBoundsForResize(width, height); this.boxy.css({ left: bounds[0], top: bounds[1] }); this.getContent().css({ width: bounds[2], height: bounds[3] }); if (after) after(this); return this }, tween: function (width, height, after) { if (!this.visible) return; var bounds = this._getBoundsForResize(width, height); var self = this; this.boxy.stop().animate({ left: bounds[0], top: bounds[1] }); this.getContent().stop().animate({ width: bounds[2], height: bounds[3] }, function () { if (after) after(self) }); return this }, isVisible: function () { return this.visible }, show: function () { if (this.visible) return; if (this.options.modal) { var self = this; if (!Boxy.resizeConfigured) { Boxy.resizeConfigured = true; jQuery(window).resize(function () { Boxy._handleResize() }) }; this.modalBlackout = jQuery('<div class="boxy-modal-blackout"></div>').css({ zIndex: Boxy._nextZ(), opacity: 0.2, width: jQuery(document).width(), height: jQuery(document).height() }).appendTo(document.body); this.toTop(); if (this.options.closeable) { jQuery(document.body).bind('keypress.boxy', function (evt) { var key = evt.which || evt.keyCode; if (key == 27) { self.hide(); jQuery(document.body).unbind('keypress.boxy') } }) } }; this.boxy.stop().css({ opacity: 1 }).show(); this.visible = true; this._fire('afterShow'); this.center(); if (this.options.useIframe == true) { this.temp_iframe = jQuery("<iframe class='bg_iframe' src='javascript:void(0);' scrolling='no' frameborder='0' style='position: absolute;'></iframe>"); this.temp_iframe.width(this.getSize()[0]); this.temp_iframe.height(this.getSize()[1]); this.temp_iframe[0].zIndex = -1; var v = Boxy._viewport(); this.temp_iframe.css("top", this.getPosition()[1]); this.temp_iframe.css("left", this.getPosition()[0]); jQuery(document.body).append(this.temp_iframe); this.toTop() }; return this }, auto_resize: function () { if (this.options.useIframe == true) { this.temp_iframe.width(this.getSize()[0]); this.temp_iframe.height(this.getSize()[1]) } }, hide: function (after) { if (!this.visible) return; var self = this; if (this.options.modal) { jQuery(document.body).unbind('keypress.boxy'); this.modalBlackout.animate({ opacity: 0 }, function () { jQuery(this).remove() }) }; this.boxy.stop().animate({ opacity: 0 }, 300, function () { self.boxy.css({ display: 'none' }); self.visible = false; self._fire('afterHide'); if (after) after(self); if (self.options.unloadOnHide) self.unload() }); if (this.options.useIframe == true) { jQuery("iframe").remove(".bg_iframe") }; return this }, toggle: function () { this[this.visible ? 'hide' : 'show'](); return this }, hideAndUnload: function (after) { this.options.unloadOnHide = true; this.hide(after); return this }, unload: function () { this._fire('beforeUnload'); this.boxy.remove(); if (this.options.actuator) { jQuery.data(this.options.actuator, 'active.boxy', false) } }, toTop: function () { this.boxy.css({ zIndex: Boxy._nextZ() }); return this }, getTitle: function () { return jQuery('> .title-bar h2', this.getInner()).html() }, setTitle: function (t) { jQuery('> .title-bar h2', this.getInner()).html(t); return this }, _getBoundsForResize: function (width, height) { var csize = this.getContentSize(); var delta = [width - csize[0], height - csize[1]]; var p = this.getPosition(); return [Math.max(p[0] - delta[0] / 2, 0), Math.max(p[1] - delta[1] / 2, 0), width, height] }, _setupTitleBar: function () { if (this.options.title) { var self = this; var tb = jQuery("<div class='title-bar'></div>").html("<h2>" + this.options.title + "</h2>"); if (this.options.closeable) { tb.append(jQuery("<a href='#' class='close'></a>").html(this.options.closeText)) }; if (this.options.draggable) { tb[0].onselectstart = function () { return false }; tb[0].unselectable = 'on'; tb[0].style.MozUserSelect = 'none'; if (!Boxy.dragConfigured) { jQuery(document).mousemove(Boxy._handleDrag); Boxy.dragConfigured = true }; tb.mousedown(function (evt) { self.toTop(); Boxy.dragging = [self, evt.pageX - self.boxy[0].offsetLeft, evt.pageY - self.boxy[0].offsetTop]; jQuery(this).addClass('dragging') }).mouseup(function () { jQuery(this).removeClass('dragging'); Boxy.dragging = null; self._fire('afterDrop') }) }; this.getInner().prepend(tb); this._setupDefaultBehaviours(tb) } }, _setupDefaultBehaviours: function (root) { var self = this; if (this.options.clickToFront) { root.click(function () { self.toTop() }) }; jQuery('.close', root).click(function () { self.hide(); return false }).mousedown(function (evt) { evt.stopPropagation() }) }, _fire: function (event) { this.options[event].call(this) } };
/// <reference path="jquery-1.4.1-vsdoc.js" />

var isIe = (window.ActiveXObject) ? true : false;
var pageLinkUrl = "";
var ajaxUrl = "";
var IntNull = -999999;
var ajaxSuccess = "bohinetsuccess";
var ajaxCustomerLogin = "BohinetNotLogin";
var ajaxError = "bohineterror";
var ajaxExist = "bohinetExist";
var ajaxNoResult = "bohinetNotExist";
var splitFirst = "<bohinet/>";
var splitSecond = "@#$";

//**根据ID获取对象
function g(nodeId) {
    var $abj = $("#" + nodeId);
    if ($abj.length > 0) { return $abj[0]; }
    else { return null }
    //return document.getElementById(nodeId);
}
//**根据对象赋植内容
function setInnerHtml(objName, dcontent) {
    if (g(objName) != null) {
        $(objName).html(dcontent);
        //g(objName).innerHTML = dcontent; 
    }
}

function checknumber(String) {
    //alert(String);
    if (trimTxt(String) == "") {
        return false;
    }
    var Letters = "1234567890";
    var i;
    var c;
    for (i = 0; i < String.length; i++) {
        c = String.charAt(i);
        if (Letters.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
}

function trimTxt(txt) {
    return txt.replace(/(^\s*)|(\s*$)/g, "");
}
//**调用Ajax简化函数
function bohinetAjaxWholeUrlPost(wholeUrl, requst, requstData, onSuccessRunCode) {
    bohinetAjaxBase(wholeUrl, "GET", requst, requstData, false, null, null, onSuccessRunCode, null);
}
function bohinetAjaxPost(wholeUrl, requst, requstData, onSuccessRunCode) {
    bohinetAjaxBase(wholeUrl, "POST", requst, requstData, false, null, null, onSuccessRunCode, null);
}
//function bohinetAjaxPost(requst, requstData, onSuccessRunCode) {
//    bohinetAjaxBase(null, "POST", requst, requstData, false, null, null, onSuccessRunCode, null);
//}


//**Ajax处理部分基础函数
function bohinetAjaxBase(wholeUrl, postType, requst, requstData, isXml, onPrevRunCode, onErrorRunCade, onSuccessRunCode, onCompleteRunCode) {
    //**xml格式暂时没有完成,wood 2010-03-26
    var requestUrl = "";

    if (wholeUrl == null) {
        requestUrl = pageLinkUrl + ajaxUrl + '?bohinet=' + Math.random().toString() + "&" + requst;
    }
    else {
        requestUrl = wholeUrl + '?bohinet=' + Math.random().toString() + "&" + requst;
    }
    //alert(requestUrl);
    if (isXml) {
        $.ajax({
            url: pageLinkUrl + ajaxUrl + '?bohinet=' + Math.random().toString(),
            type: postType,
            data: postXml,
            dataType: 'xml',
            timeout: 10000
        });
    }
    else {
        $.ajax({
            url: requestUrl,
            type: postType,
            data: requstData,
            dataType: "html",//返回类型
            //timeout: 10000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置
            error: function(XMLHttpRequest, textStatus, errorThrown){
            },
            success: function (responseText) { bohinetAjaxSuccess(onSuccessRunCode, responseText); }
        });
    }
}

//处理提交前基本的事件
function bohinetAjaxBeforeSend(RunCode) {
    //设置为不可操作状态;
    if (RunCode != null) { eval(RunCode); }
}

//处理完成基本的事件
function bohinetAjaxComplete(RunCode) {
    //设置为不可操作状态;
    if (RunCode != null) { eval(RunCode); }

}

//处理错误基本的事件
function bohinetAjaxError(RunCode) {
    //设置为不可操作状态;
    if (RunCode != null) { eval(RunCode); }

}
//处理正确基本的事件
function bohinetAjaxSuccess(RunCode, responseText) {
    //设置为不可操作状态;
    var returnVaule = responseText;
    //**正常执行，返回错误提示的处理，此部分需要继续考虑中
    if (RunCode != null) {
        RunCode(responseText);
        //eval(RunCode); 
    }
}




//组合信息
function CombineStr(keyName, keyValue, originStr) {
    if (originStr == "") {
        return keyName + splitSecond + keyValue;
    }
    else {
        return originStr + splitFirst + keyName + splitSecond + keyValue;
    }
}


//分拆信息,不存在返回null
function GetKeyValueFromCombineStr(keyName, originStr) {
    var keyValue = ajaxNoResult;

    if (keyName == "" || originStr == "")
        return keyValue;

    //继续执行
    //alert("1:"+originStr);
    //alert("2:" + keyName);
    var strList = originStr.toString().split(splitFirst);
    for (var i = 0; i < strList.length; i++) {
        //alert("3:" + originStr);
        var strItem = strList[i].toString().split(splitSecond);
        if (strItem.length == 2) {

            if (strItem[0] == keyName) {
                keyValue = strItem[1].toString();
                break;
            }
        }
        else if (strItem.length == 1) {
            if (strItem[0] == keyName) {
                keyValue = "";
                break;
            }
        }
    }
    //alert("4:" + originStr);
    return keyValue;

}


function cutZero(oldValue) {
    //拷贝一份 返回去掉零的新串
    newstr = oldValue;
    //判断是否有效数
    //alert(oldValue);
    if (oldValue.indexOf(".") > -1) {
        //循环变量 小数部分长度
        var leng = oldValue.length - oldValue.indexOf(".") - 1
        //循环小数部分   
        for (i = leng; i > 0; i--) {
            //如果newstr末尾有0   
            if (newstr.lastIndexOf("0") > -1 && newstr.substr(newstr.length - 1, 1) == 0) {
                var k = newstr.lastIndexOf("0");
                //如果小数点后只有一个0 去掉小数点   
                if (newstr.charAt(k - 1) == ".") {
                    return newstr.substring(0, k - 1);
                } else {
                    //否则 去掉一个0   
                    newstr = newstr.substring(0, k);
                }
            } else {
                //如果末尾没有0   
                return newstr;
            }
        }
    }
    return oldValue;
}

//邮件格式检查
function CheckCommonEmail(objId) {
    if (g(objId) == null) { return false; }

    DeleteHintInfo(objId, false);

    var CommonEmail = $("#" + objId).val();

    var EmailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!EmailReg.test(CommonEmail)) {
        ShowHintInfo(objId, false, "邮箱地址格式不正确");
        return false;
    }
    else { return true; }

}
//对手机号码验证
function CheckCommonCellphone(objId) {
    if (g(objId) == null) { return false; }

    //DeleteHintInfo(objId, false);

    var CommonCellphone = $("#" + objId).val();
    //alert(CommonCellphone);
    var CellphoneReg = /^(1[\d]{10})$/;
    if (CellphoneReg.test(CommonCellphone)) {
        //ShowHintInfo(objId, false, "手机号格式不正确");
        return true;
    }
    else { return false; }
}

//
//显示提示信息
function ShowHintInfo(PrevObjId, IsParent, HintInfo) {
    if (g(PrevObjId) != null) {
        DeleteHintInfo(PrevObjId, IsParent);
        if (IsParent) {
            $("#" + PrevObjId).append("<span id=\"span_" + PrevObjId + "\">" + HintInfo + "</span>");
        }
        else {
            $("#" + PrevObjId).after("<span id=\"span_" + PrevObjId + "\">" + HintInfo + "</span>");

            //alert(PrevObjId);
            //alert($("#" + PrevObjId).val());
        }

        $("#span_" + PrevObjId).attr("style", "color:red;");

        //alert($("#" + PrevObjId).next('span').val());
    }
}

function DeleteHintInfo(PrevObjId, IsParent) {
    //alert("Ok");
    if (g(PrevObjId) != null) {
        if (IsParent) {
            $("#" + PrevObjId).remove("#span_" + PrevObjId);
        }
        else {
            $("#span_" + PrevObjId).remove();
            //alert($("#span_" + PrevObjId));
        }
    }
}

//显示初始化提示信息
function ShowSubmitWaitInfo(PrevObjId, IsSaveInit, HintInfo) {
    if (g(PrevObjId) != null) {
        //删除原来信息
        DeleteSubmitWaitInfo(PrevObjId, IsSaveInit, "");
        //保存原来信息lblHint
        //alert($("#" + PrevObjId).html());
        var oldHint = $("#" + PrevObjId).html();
        $("#" + PrevObjId).html("<span id=\"span_" + PrevObjId + "\">" + HintInfo + "</span>");
        //alert("3"+$("#" + PrevObjId).html());
        //保存原来信息
        if (IsSaveInit) {
            $("#" + PrevObjId).append("<span id=\"initspan_" + PrevObjId + "\"></span>");
            $("#initspan_" + PrevObjId).hide();
            $("#initspan_" + PrevObjId).html(oldHint);
            //alert($("#" + PrevObjId).html());
        }
    }
}
function DeleteSubmitWaitInfo(PrevObjId, IsSaveInit, HintInfo) {
    if (g(PrevObjId) != null) {
        var oldHint = $("#initspan_" + PrevObjId).html();
        $("#" + PrevObjId).remove("#span_" + PrevObjId);
        //还原原来信息
        if (oldHint == null)
            oldHint = $("#" + PrevObjId).html();
        //alert(oldHint);
        if (IsSaveInit && oldHint != "") { $("#" + PrevObjId).html(oldHint); }
        else { $("#" + PrevObjId).html(HintInfo); }
        //alert("1"+$("#" + PrevObjId).html());
    }
}

//等待多长时间自动跳转
function ShowAutoJumpInfo(PrevObjId, IntervalTime, JumpUrl, HintInfo) {

    var drUrl = JumpUrl;
    //去掉PrevObjId帮定的事件
    $("#" + PrevObjId).unbind();

    $("#" + PrevObjId).html("<p id='" + PrevObjId + "go_tips'>" + HintInfo + "<br />系统会在<em id='" + PrevObjId + "go_timer'>" + IntervalTime + "</em>秒后，自动跳转到：<a id='" + PrevObjId + "go_url' href='#'>首页</a></p>");
    if (drUrl == "") {
        drUrl = "http://store.logitech.com.cn/";
        $("#" + PrevObjId + "go_url").attr("href", drUrl);
    }
    else if (drUrl == "/Customer/Default.aspx") {
        $("#" + PrevObjId + "go_url").attr("href", drUrl);
    }
    else {
        $("#" + PrevObjId + "go_url").attr("href", drUrl);
    }


    //跳转倒计时
        var total = IntervalTime; // 倒计时
        $("#" + PrevObjId + "go_timer").html(total);
        $("#" + PrevObjId + "go_tips").show();
        var timer = setInterval(function() {
            if (total <= 0) {
                //alert($("#" + PrevObjId + "go_url").attr("href"));
               
                clearInterval(timer);
                timer = 0;
            } else $("#" + PrevObjId + "go_timer").html(--total);
        }, 1000);
    location.href = $("#" + PrevObjId + "go_url").attr("href"); // 跳转
}

//获取URL？后面的参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function g(nodeId) {
    var $abj = $("#" + nodeId);
    if ($abj.length > 0) { return $abj[0]; }
    else { return null }
}
//jquery事件如何传递参数,采用闭包可实现
Function.prototype.binding = function () {
    if (arguments.length < 2 && typeof arguments[0] == "undefined") return this;
    var __method = this, args = jQuery.makeArray(arguments), object = args.shift();
    return function () {
        return __method.apply(object, args.concat(jQuery.makeArray(arguments)));
    }
}