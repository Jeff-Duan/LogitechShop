function AddCart(ProductSysNo, count, NextAddCart) {
    bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=addcart", { productSysNo: ProductSysNo, Count: count }, AddCartCallBack);
}
function AddCartCallBack(returnVaule) {   
    if (returnVaule != ajaxError) {
        if (returnVaule == ajaxSuccess) {            
            alert("添加成功!");           
            GetHeadProductList();
        } else
            alert(returnVaule);
    }
    else {
        alert("添加失败!");
    }
}
function AddCart_(ProductSysNo, count, obj) {
    $.ajax({ //这里使用到Jquery的ajax方法
        type: "POST",
        dataType: "html",
        cache: false,
        url: '/AjaxService/Sale.aspx?action=addcart', //请求的处理数据 
        data: { productSysNo: ProductSysNo, Count: count},
        //传入的参数，第一个参数就是分页的页数，第二个参数为排序的依据 
        //下面的操作就是成功返回数据以后，进行数据的绑定 
        success: function (result) {          
            if (result != ajaxError) {
                if (result == ajaxSuccess) {
                    layer.tips('添加成功', obj, {
                        guide: 1,
                        time: 1,
                        style: ['background-color:#F26C4F; color:#fff', '#F26C4F'],
                        maxWidth: 240
                    });
                    GetCartProList();
                } else
                    //弹出tips
                    layer.tips(result, obj, {                      
                        guide: 1,
                        time: 1,
                        style: ['background-color:#F26C4F; color:#fff', '#F26C4F'],
                        maxWidth: 240
                    });
            }
            else {
                //弹出tips
                layer.tips('添加失败', obj, {
                    guide: 1,
                    time: 1,
                    style: ['background-color:#F26C4F; color:#fff', '#F26C4F'],
                    maxWidth: 240
                });
            }         
        }
    });
}

function AddCart_Url(ProductSysNo, count, obj, url) {
    $.ajax({ //这里使用到Jquery的ajax方法
        type: "POST",
        dataType: "html",
        cache: false,
        url: '/AjaxService/Sale.aspx?action=addcart', //请求的处理数据 
        data: { productSysNo: ProductSysNo, Count: count },
        //传入的参数，第一个参数就是分页的页数，第二个参数为排序的依据 
        //下面的操作就是成功返回数据以后，进行数据的绑定 
        success: function (result) {
            if (result != ajaxError) {
                if (result == ajaxSuccess) {
                    //弹出tips
                    //GetHeadProductList();
                    //if (confirm("成功加入购物车!是否结算？")) {
                        location.href = url;
                   // }
                } else
                    //弹出tips
                    layer.tips(result, obj, {
                        guide: 1,
                        time: 1
                    });
            }
            else {
                //弹出tips
                layer.tips('添加失败', obj, {
                    guide: 1,
                    time: 1
                });
            }
        }
    });
}
function AddCart_Url(ProductSysNo, count, url) {
    $.ajax({ //这里使用到Jquery的ajax方法
        type: "POST",
        dataType: "html",
        cache: false,
        url: '/AjaxService/Sale.aspx?action=addcart', //请求的处理数据 
        data: { productSysNo: ProductSysNo, Count: count },
        //传入的参数，第一个参数就是分页的页数，第二个参数为排序的依据 
        //下面的操作就是成功返回数据以后，进行数据的绑定 
        success: function (result) {
            if (result != ajaxError) {
                if (result == ajaxSuccess) {                    
                    location.href = url;                 
                } 
            }           
        }
    });
}

//***省市区
function InitCityDistrict(prentName) {
    if (g(prentName) != null) {
        //ShowInitWaitInfo(prentName, true);
        //var Arealist = "<label class=\"label-text\">*&nbsp;收货地址：</label>";
        var Arealist = "<select class=\"select-text\" id='" + prentName + "_province' name='province' onchange=\"GetCity('" + prentName + "')\"></select>";
        Arealist += "<select class=\"select-text\" id='" + prentName + "_city' name='city'  onchange=\"GetDistrict('" + prentName + "')\"></select>";
        Arealist += "<select class=\"select-text\" id='" + prentName + "_district' name='district'></select>";

        $("#" + prentName).append(Arealist);

        $("#" + prentName + "_province").append("<option value=" + IntNull + ">请选择</option>");
        $("#" + prentName + "_city").append("<option value=" + IntNull + ">请选择</option>");
        $("#" + prentName + "_district").append("<option value=" + IntNull + ">请选择</option>");

        $("#" + prentName + "_province").val(IntNull);
        $("#" + prentName + "_city").val(IntNull);
        $("#" + prentName + "_district").val(IntNull);
        bohinetAjaxWholeUrlPost("/AjaxService/Area.aspx", "action=Province", null, CallBack);
    }
    function CallBack(returnVaule) {
        if (returnVaule != "" && returnVaule != "") {
            var provinceItemList = "";
            var ProvinceList = returnVaule.toString().split("<bohinet/>");
            for (i = 0; i < ProvinceList.length; i++) {
                var ProvinceItem = ProvinceList[i].toString().split("@#$");
                if (ProvinceItem.length == 2) {
                    provinceItemList += "<option value=" + ProvinceItem[0] + ">" + ProvinceItem[1] + "</option>";
                }
            }
            if (provinceItemList != "") {
                $("#" + prentName + "_province").append(provinceItemList);
            }
            else {
                g(prentName).innerText = "省市区初始化不成功，请刷新页面！";
            }
        }
        else {
            g(prentName).innerText = "省市区初始化不成功，请刷新页面！";
        }
    }
}
function GetCity(prentName) {
    if (g(prentName + "_province") != null && g(prentName + "_city") != null) {
        var provinceSysNo = $("#" + prentName + "_province").val();
        $("#" + prentName + "_city option").remove();
        $("#" + prentName + "_city").append("<option value=" + IntNull + ">请选择</option>");
        $("#" + prentName + "_district option").remove();
        $("#" + prentName + "_district").append("<option value=" + IntNull + ">请选择</option>");
        if (provinceSysNo != IntNull) {
            bohinetAjaxWholeUrlPost("/AjaxService/Area.aspx", "action=City", { ParentSysNo: provinceSysNo }, CallBack);
        }
    }
    function CallBack(returnVaule) {
        if (returnVaule != "" && returnVaule != "notexist") {
            var CityItemList = "";
            var CityList = returnVaule.toString().split("<bohinet/>");
            for (i = 0; i < CityList.length; i++) {
                var CityItem = CityList[i].toString().split("@#$");
                if (CityItem.length == 2) {
                    CityItemList += "<option value=" + CityItem[0] + ">" + CityItem[1] + "</option>";
                }
            }
            if (CityItemList != "") {                
                $("#" + prentName + "_city").append(CityItemList);
            }
        }
    }
}

function GetDistrict(prentName) {

    if (g(prentName + "_city") != null && g(prentName + "_district") != null) {
        var CitySysNo = $("#" + prentName + "_city").val();
        $("#" + prentName + "_district option").remove();
        $("#" + prentName + "_district").append("<option value=" + IntNull + ">请选择</option>");
        if (CitySysNo != IntNull) {
            bohinetAjaxWholeUrlPost("/AjaxService/Area.aspx", "action=District", { ParentSysNo: CitySysNo }, CallBack);
        }

    }
    function CallBack(returnVaule) {
        if (returnVaule != "" && returnVaule != "notexist") {
            var DistrictItemList = "";
            var DistrictList = returnVaule.toString().split("<bohinet/>");
            for (i = 0; i < DistrictList.length; i++) {
                var DistrictItem = DistrictList[i].toString().split("@#$");
                if (DistrictItem.length == 2) {
                    DistrictItemList += "<option value=" + DistrictItem[0] + ">" + DistrictItem[1] + "</option>";
                }
            }
            if (DistrictItemList != "") {
                $("#" + prentName + "_district").append(DistrictItemList);
            }
        }
    }
}

function GetAreaSysNo(prentName) {
    if (g(prentName + "_province") == null || g(prentName + "_city") == null && g(prentName + "_district") == null) {
        return IntNull;
    }
    var AreaSysNo = $("#" + prentName + "_district").val();
    if (AreaSysNo == IntNull) { AreaSysNo = $("#" + prentName + "_city").val(); }
    if (AreaSysNo == IntNull) { AreaSysNo = $("#" + prentName + "_province").val(); }

    return AreaSysNo;
}

function SetAreaSysNo(prentName, AreaSysNo) {
    if (g(prentName) != null) {
        var Arealist = "<select class=\"select-text\" id='" + prentName + "_province' name='province' onchange=\"GetCity('" + prentName + "')\"></select>";
        Arealist += "<select class=\"select-text\" id='" + prentName + "_city' name='city'  onchange=\"GetDistrict('" + prentName + "')\"></select>";
        Arealist += "<select class=\"select-text\" id='" + prentName + "_district' name='district'></select>";
        if ($("#" + prentName + " select").length == 0)
            $("#" + prentName).append(Arealist);
        $("#" + prentName + "_province option").remove();
        $("#" + prentName + "_city option").remove();
        $("#" + prentName + "_district option").remove();
        $("#" + prentName + "_province").append("<option value=" + IntNull + ">请选择</option>");
        $("#" + prentName + "_city").append("<option value=" + IntNull + ">请选择</option>");
        $("#" + prentName + "_district").append("<option value=" + IntNull + ">请选择</option>");

        $("#" + prentName + "_province").val(IntNull);
        $("#" + prentName + "_city").val(IntNull);
        $("#" + prentName + "_district").val(IntNull);

        if (AreaSysNo != IntNull) {
            bohinetAjaxWholeUrlPost("/AjaxService/Area.aspx", "action=area", { AreaSysNo: AreaSysNo }, CallBack);
        }
    }

    function CallBack(returnValue) {
        if (returnValue != "" && returnValue != ajaxError && GetKeyValueFromCombineStr(ajaxError, returnValue) != "") {
            var lstArea = returnValue.toString().split("<bohinetG/>");
            if (lstArea.length == 4) {
                var ProviceSysNo = IntNull;
                var CitySysNo = IntNull;
                var DistrictSysNo = IntNull;
                var lstAreaShow = lstArea[3].toString().split("@#$");
                //alert(lstAreaShow);
                if (lstAreaShow.length == 4) {
                    ProviceSysNo = lstAreaShow[1];
                    CitySysNo = lstAreaShow[2];
                    DistrictSysNo = lstAreaShow[3];
                }
                //读取Province
                var lstProvince = lstArea[0].toString().split("<bohinet/>");
                var isCalSet = false;
                var provinceItemList = "";
                for (var i = 0; i < lstProvince.length; i++) {
                    var lstItem = lstProvince[i].split("@#$");
                    if (lstItem.length == 2) {
                        provinceItemList += "<option value=" + lstItem[0] + ">" + lstItem[1] + "</option>";
                    }
                }
                //alert(ProviceSysNo);
                if (provinceItemList.length > 0) { $("#" + prentName + "_province").append(provinceItemList); isCalSet = true; $("#" + prentName + "_province").val(ProviceSysNo); }
                if (isCalSet) {
                    var lstCity = lstArea[1].toString().split("<bohinet/>");
                    isCalSet = false;
                    var cityItemList = "";
                    for (var i = 0; i < lstCity.length; i++) {
                        var lstItem = lstCity[i].split("@#$");
                        if (lstItem.length == 2) {
                            cityItemList += "<option value=" + lstItem[0] + ">" + lstItem[1] + "</option>";
                        }
                    }
                    if (cityItemList.length > 0) { $("#" + prentName + "_city").append(cityItemList); isCalSet = true; $("#" + prentName + "_city").val(CitySysNo); }
                }
                if (isCalSet) {
                    var lstDistrict = lstArea[2].toString().split("<bohinet/>");
                    isCalSet = false;
                    var districtItemList = "";
                    for (var i = 0; i < lstDistrict.length; i++) {
                        var lstItem = lstDistrict[i].split("@#$");
                        if (lstItem.length == 2) {
                            districtItemList += "<option value=" + lstItem[0] + ">" + lstItem[1] + "</option>";
                        }
                    }
                    if (districtItemList.length > 0) { $("#" + prentName + "_district").append(districtItemList); isCalSet = true; $("#" + prentName + "_district").val(DistrictSysNo); }
                }
            }
        }
        else {
            alert("系统错误！地区加载！");
        }
    }
}
function GetCustomerBooks(prentName)
{
    bohinetAjaxWholeUrlPost("/AjaxService/Area.aspx", "action=customerbooks", {}, function (data) {
        if (data == "errorAddress") {
            InitCityDistrict("InitArea");
            $("#Initbook").show();
            $("#BookList").hide();
        }
        else {
            $("#" + prentName + " li").remove();
            $("#Initbook").hide();
            $("#BookList").show();
            var AddressList = eval("[" + data + "]");
            for (var i = 0; i < AddressList.length; i++) {
                var css = "";
                if (i == 0 || AddressList.length == 1)
                    css = "active";
                var Book = "<li onclick=\"CheckAddress(this)\" class=\"" + css + "\" id=\"" + AddressList[i].SysNo + "\">";
                Book += "    <div class=\"check-address-text-content\" style=\"min-height: 139px;\">";
                Book += "       <p class=\"p-title\">常用地址 <a class=\"edite\" onclick=\"EditeAddress('" + AddressList[i].SysNo + "')\" href=\"javascript:void(0);\">编辑</a> <a class=\"close\" onclick=\"DelAddress('" + AddressList[i].SysNo + "')\" href=\"javascript:void(0);\">X</a> </p>";
                Book += "       <p class=\"name\">" + AddressList[i].ReceiveName + "<em>收</em></p>";;
                Book += "       <p class=\"p1 area\" name=\"" + AddressList[i].ReceiveAreaSysNo + "\">" + AddressList[i].CityName + "</p>";
                Book += "       <p class=\"p1 address\">" + AddressList[i].ReceiveAddress + "</p>";
                Book += "       <p class=\"p1 phone\" style=\"display:none;\">" + AddressList[i].ReceivePhone + "</p>";
                Book += "       <p class=\"p1 cell\">" + AddressList[i].RecvCell + "</p>";
                Book += "       <p class=\"p1 one\" style=\"display:none;\">" + AddressList[i].Default + "</p>";
                Book += "    </div>";
                Book += "    <em class=\"icon-for-check\"></em>";
                Book += "</li>";
                $("#" + prentName).append(Book);
                if (css == "active") {
                    $("#FinalAddress").html(AddressList[i].ReceiveName + "&nbsp;" + AddressList[i].CityName + AddressList[i].ReceiveAddress + AddressList[i].RecvCell + "<a href=\"javascript:void(0)\" onclick=\"EditeAddress('" + AddressList[i].SysNo + "')\">修改</a>");
                    $("#FixedAddress").html(AddressList[i].ReceiveName + "&nbsp;" + AddressList[i].CityName + AddressList[i].ReceiveAddress + AddressList[i].RecvCell + "<a href=\"javascript:void(0)\" onclick=\"EditeAddress('" + AddressList[i].SysNo + "')\">修改</a>");
                    bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=saveaddress", { SysNo: AddressList[i].SysNo }, function (data) { });
                    GetSOItem(false);
                }
            }
            if ($($("#" + prentName).find(".active")).length > 0) {
                $("#Invoice").show();
                $("#NoInvoice").hide();
                //$("#showCouponDiv").show();
                //$("#NoCoupon").hide();
            }
            else {
                $("#Invoice").hide();
                $("#NoInvoice").show();
                //$("#showCouponDiv").hide();
                //$("#NoCoupon").show();
            }
        }
    });
}

//保存收货信息
function AddAddressInput() {
    if ($("#InitReceiveName").val() == "") {
        layer.alert("请输入收货人！");
        return;
    }
    if (g("InitArea_province") == null || g("InitArea_city") == null && g("InitArea_district") == null) {
        layer.alert("请选择收货地区！");
        return;
    }
    var AreaSysNo = GetAreaSysNo("InitArea");
    if (AreaSysNo == "-999999") {
        layer.alert("请选择收货地区！");
        return;
    }
    var Reg = new RegExp("[&\|\\\/*()<>,:~!^%$#.\]", "i");

    if (Reg.test($("#InitReceiveName").val())) {
        layer.alert("收货人含有非法字符", 8, !6);
        return;
    }
    if (Reg.test($("#InitReceiveAddress").val())) {
        layer.alert("详细地址含有非法字符！", 8, !6);
        return "";
    }

    if ($("#InitReceiveAddress").val() == "") {
        layer.alert("请输入详细地址！");
        return;
    }
    if ($("#InitReceiveCell").val() == "" && $("#InitReceivePhone").val() == "") {
        layer.alert("请输入联系电话！");
        return;
    }
    else if (!CheckCommonCellphone("InitReceiveCell"))
    {
        layer.alert("手机号码格式不正确！");
        return;
    }
    var ReceivePhone = "";
    if ($("#InitAreaCode").val() != "")
        ReceivePhone += $("#InitAreaCode").val() + "-";
    if ($("#InitReceivePhone").val() != "" && $("#InitTelephone").val() != "") {
        ReceivePhone += $("#InitReceivePhone").val() + "-" + $("#InitTelephone").val();
    }
    else {
        ReceivePhone += $("#InitReceivePhone").val();
    }
    //保存信息
    var ReceivePhone = "";
    if ($("#InitAreaCode").val() != "")
        ReceivePhone += $("#InitAreaCode").val() + "-";
    if ($("#InitReceivePhone").val() != "" && $("#InitTelephone").val() != "") {
        ReceivePhone += $("#InitReceivePhone").val() + "-" + $("#InitTelephone").val();
    }
    else {
        ReceivePhone += $("#InitReceivePhone").val();
    }
    //保存信息
    var ReceiveInfo = "";
    ReceiveInfo = CombineStr("ReceIveSysNo", $("#InitReceIveSysNo").val(), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceiveName", $("#InitReceiveName").val(), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceiveArea", GetAreaSysNo("InitArea"), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceiveAddress", $("#InitReceiveAddress").val(), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceivePhone", ReceivePhone, ReceiveInfo);
    ReceiveInfo = CombineStr("ReceiveCellPhone", $("#InitReceiveCell").val(), ReceiveInfo);
    if ($("#InitDefault").is(":checked")) {
        ReceiveInfo = CombineStr("Default", 1, ReceiveInfo);
    }
    else
        ReceiveInfo = CombineStr("Default", 0, ReceiveInfo);
    bohinetAjaxWholeUrlPost("/AjaxService/Area.aspx", "action=savecustomerbook", { ReceiveInfo: escape(ReceiveInfo), type: 1 }, function (data) {
        if (data != ajaxError) {
            GetCustomerBooks("AreaBoos");
            layer.closeAll();
        }
        else {
            layer.alert("地址保存失败！", 8, !6);
        }
    });
}

function SaveAddressInput() {
    if ($("#newReceiveName").val() == "") {
        layer.alert("请输入收货人！");
        return;
    }
    if (g("newArea_province") == null || g("newArea_city") == null && g("newArea_district") == null) {
        layer.alert("请选择收货地区！");
        return;
    }
    var AreaSysNo = GetAreaSysNo("newArea");
    if (AreaSysNo == "-999999") {
        layer.alert("请选择收货地区！");
        return;
    }
    if ($("#newReceiveAddress").val() == "") {
        layer.alert("请输入详细地址！");
        return;
    }

    var Reg = new RegExp("[&\|\\\/*()<>,:~!^%$#.\]", "i");
    if (Reg.test($("#newReceiveName").val())) {
        layer.alert("收货人含有非法字符", 8, !6);
        return;
    }
    if (Reg.test($("#newReceiveAddress").val())) {
        layer.alert("详细地址含有非法字符！", 8, !6);
        return "";
    }

    if ($("#newReceiveCell").val() == "" && $("#newReceivePhone").val() == "") {
        layer.alert("请输入联系电话！");
        return;
    } 
    else if (!CheckCommonCellphone("newReceiveCell")) {

        if ($("#newReceiveCell").val() != $("#newReceiveCell").attr("value")) {
            layer.alert("手机号码格式不正确！");
            return;
        }
    }
    var ReceivePhone = "";
    if ($("#newAreaCode").val() != "")
        ReceivePhone += $("#newAreaCode").val() + "-";
    if ($("#newReceivePhone").val() != "" && $("#newTelephone").val() != "") {
        ReceivePhone += $("#newReceivePhone").val() + "-" + $("#newTelephone").val();
    }
    else {
        ReceivePhone += $("#newReceivePhone").val();
    }
    //保存信息
    var ReceiveInfo = "";
    ReceiveInfo = CombineStr("ReceIveSysNo", $("#newReceIveSysNo").val(), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceiveName", $("#newReceiveName").val(), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceiveArea", GetAreaSysNo("newArea"), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceiveAddress", $("#newReceiveAddress").val(), ReceiveInfo);
    ReceiveInfo = CombineStr("ReceivePhone", ReceivePhone, ReceiveInfo); 
    ReceiveInfo = CombineStr("ReceiveCellPhone", $("#newReceiveCell").val(), ReceiveInfo); 
    if ($("#newDefault").is(":checked")) {
        ReceiveInfo = CombineStr("Default", 1, ReceiveInfo);
    }
    else
        ReceiveInfo = CombineStr("Default", 0, ReceiveInfo);
    var type = 1;
    if ($("#newReceIveSysNo").val() != "")
        type = 2;
    bohinetAjaxWholeUrlPost("/AjaxService/Area.aspx", "action=savecustomerbook", { ReceiveInfo: escape(ReceiveInfo), type: type }, function (data) {
        if (data != ajaxError) {
            $("#newAddressBox").hide();
            $("#newAddressBox input").val("");
            GetCustomerBooks("AreaBoos");
            layer.closeAll();
        }
        else {
            layer.alert("地址保存失败！");
        }
    });
}
var retCartCheckLogin;
function CheckLoginUrl(url) {
    isHaveAjaxStatus = true;
    bohinetAjaxWholeUrlPost("/AjaxService/Customer.aspx", "action=checklogin", {}, LoginCallBack);

    function LoginCallBack(returnVaule) {

        if (returnVaule != ajaxSuccess) {
            $.layer({
                type: 1,
                title: false,
                offset: ['50px', ''],
                area: ['auto', '500px'],
                page: { dom: '#LoginAlert' }
            });
            retCheckLogin = false;
        }
        else {
            location.href = url;
            retCartCheckLogin = true;
        }
        isHaveAjaxStatus = false;
    }
    return retCartCheckLogin;
}

function IFLogin(obj) {
    isHaveAjaxStatus = true;
    bohinetAjaxWholeUrlPost("/AjaxService/Customer.aspx", "action=checklogin", {}, IFLoginCallBack);
    function IFLoginCallBack(returnVaule) {
        if (returnVaule != ajaxSuccess) {
            $("#" + obj).show();
        }
        else {
            $("#" + obj).hide();
        }
        isHaveAjaxStatus = false;
    }
}

function CustomerLogin(CustomerID, Pwd) {
    var index = layer.load(2, {
        shade: [0.6, '#fff'] //0.1透明度的白色背景
    });
    $.ajax({
        url: '/AjaxService/Customer.aspx?action=customerlogin',
        data: { CustomerID: CustomerID, Pwd: Pwd },
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            if (obj.stat == 'ok') {
                layer.closeAll();
                CheckLogin();
            } else {
                layer.close(index)
            }
        },
        error: function (obj, msg) {
            $("#Err").html(obj.responseText);
            $("#ERRS").show();
            layer.close(index);
          //  layer.alert(obj.responseText);
        }
    });
}

function NewCustomerLogin(CustomerID, Pwd, Url) {
    var index = layer.load(2, {
        shade: [0.6, '#fff'] //0.1透明度的白色背景
    });
    $.ajax({
        url: '/AjaxService/Customer.aspx?action=customerlogin',
        data: { CustomerID: CustomerID, Pwd: Pwd },
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            if (obj.stat == 'ok') {
                layer.closeAll();
                location.href = url; 
            }
            else {
                layer.close(index)
            }
        },
        error: function (obj, msg) {
            layer.close(index)
            layer.alert(obj.responseText);
        }
    });
}



///判断是否登录
var retCheckLogin;
function CheckLogin() {
    isHaveAjaxStatus = true;
    bohinetAjaxWholeUrlPost("/AjaxService/Customer.aspx", "action=checklogin", {}, CheckLoginCallBack);

    return retCheckLogin;
}
function CheckLoginCallBack(returnVaule) {
    if (returnVaule != ajaxSuccess) {
        $.layer({
            type: 1,
            title: false,
            offset: ['50px', ''],
            area: ['auto', '500px'],
            page: { dom: '#LoginAlert' }
        });
        retCheckLogin = false;
    }
    else {
        location.href = location.href;
        retCheckLogin = true;
    }
    isHaveAjaxStatus = false;
}
