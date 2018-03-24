function Showtogether() {
            var test = $.dialog({
                elem: '#togetherOrder',
                width: '904px'
            });
            TogetherSaleList();
            test.open();
        }
        $(function () {
            $(".delete-all").click(function () {
                var test = $.dialog({
                    elem: '#deleteCart',
                    width: '305px',
                    noFn: function () {
                    },
                    yesFn: function () {
                        var $check = $('.cart-table td').find('.check');
                        var productSysnos = "";
                        for (var i = 0; i < $check.length; i++) {
                            var Price = $($($check[i]).parent().parent()).attr("name");
                            var IsPoint = $($($check[i]).parent().parent()).attr("ispoint");
                            if (IsPoint == 1)
                                Price = 0;
                            productSysnos += $($($check[i]).parent().parent()).attr("id") + splitSecond;
                            var ProductAmt = parseInt($("#sumProductPrice").html()) - parseInt(Price);
                            $("#sumPoint").html(ProductAmt);
                            $("#sumProductPrice").html(ProductAmt);

                            $("#SOPrice").html(parseInt($("#SOPrice").html()) - parseInt(Price));

                            if (ProductAmt >= 300)
                                //$(".cFreight").html("还差0元包邮");
                                $(".Free").html("您如需顺丰包邮，点此链接<a href='/pro/proDetail/4345'>积分兑换</a>");
                            else
                                //$(".cFreight").html("还差" + (parseInt(300) - parseInt(ProductAmt)) + "元包邮 <a onclick=\"Showtogether()\" href=\"javascript:void(0);\">凑单</a>");
                                $(".Free").html("您还差" + (parseInt(99) - parseInt(ProductAmt) + "元包邮，点击<a href='/pro/proDetail/4387'>积分兑换包邮卡</a>或点击<a href='/Product/ProductList.aspx?PriceFrom=1&PriceTo=99'>凑单</a> "));
                            $($($($check[i]).parent().parent()).remove());
                        }
                        bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=removeshopcartproduct", { productSysNo: productSysnos }, null);
                        CheackTable();
                    }
                });
                test.open();
            });
            $(".delete-clear").click(function () {
                var test = $.dialog({
                    elem: '#deleteCart',
                    width: '305px',
                    noFn: function () {
                    },
                    yesFn: function () {
                        bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=clearshopcartproduct", {}, null);
                        IFLogin("CartLogin");
                        $("#NoShoppingProduct").show();
                        $("#YesShoppingProduct").hide();
                    }
                });
                test.open();
            });
            /*弹出框*/
            $(function () {
                $('#sureOrder').click(function () {
                    var obj = document.getElementsByName("BuyNum");//选择所有name="interest"的对象，返回数组
                    for (var i = 0; i < obj.length; i++) {
                        if (obj[i].value <= 0) {

                            $.layer({
                                type: 1,
                                title: "友情提示",
                                area: ['auto', 'auto'],
                                border: [0], //去掉默认边框
                                //shade: [0], //去掉遮罩
                                closeBtn: [0, true], //去掉默认关闭按钮
                                shift: 'top', //从左动画弹出
                                page: {
                                    html: '<div class="wg-alert-box" style="width: 385px; height:auto;text-align:center;">'
                                    + '商品数量存在异常是否刷新页面'
                                    + '<p><a class="small-btn wd-dialog-sure" href="javascript:history.go(0);">确定</a></p>'
                                    + '</div>'
                                }
                            });
                            return false;
                        }

                    }
                    isHaveAjaxStatus = true;
                    bohinetAjaxWholeUrlPost("/AjaxService/Customer.aspx", "action=checklogin", {}, LoginCallBack);
                });
                function LoginCallBack(returnVaule) {

                    if (returnVaule != ajaxSuccess) {
                        $.layer({
                            type: 1,
                            title: false,
                            offset: ['50px', ''],
                            area: ['auto', '500px'],
                            page: { dom: '#LoginAlert' }
                        });
                    }
                    else {
                        var loadIndex = layer.load('订单生成中,请稍等！', 0);
                        var $check = $('.cart-table td').find('.check');
                        if ($check.length == 0 && $('.cart-table td').length > 0) {
                            isHaveAjaxStatus = true;
                            $(this).attr("disabled", true);
                            return;
                        }
                        var productSysnos = "";
                        for (var i = 0; i < $check.length; i++) {
                            productSysnos += $($($check[i]).parent().parent()).attr("id") + ",";
                        }
                        var ProductAmt = $("#SOPrice").html();
                        bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=newso", { ProductSysNos: productSysnos, SaleAmt: ProductAmt }, function (data) {
                            if (data == ajaxSuccess) {
                                location.href = "/Sale/CheckOutOrder.aspx";
                            } else if (data == ajaxError) {
                                layer.alert("初始化订单失败！");
                            }
                            else {
                                $(this).attr("disabled", false);
                                var test = $.dialog({
                                    elem: '#submitPiont',
                                    width: '904px'
                                });
                                test.open();
                            }
                            layer.close(loadIndex);
                        });
                    }
                    isHaveAjaxStatus = false;
                }
            });
        });
        var atr = " <tr id=\"@SysNo\" class=\"@class\" ispoint=\"@ispoint\" name=\"@trPrice\" pointamt=\"@trPoint\">"
                    + "<td>"
                    + "    <label class=\"mn-check checks check\" onclick=\"Checktr(this)\"></label>"
                    + "</td>"
                    + "<td>"
                    + "    <div class=\"cart-table-product\">"
                    + "        <div class=\"cart-table-img\">"
                    + "            <a href=\"@Url\">"
                    + "                <img onerror=\"javascript:this.src='/images/picerror.jpg'\" src=\"@PicUrl\"></a>"
                    + "        </div>"
                    + "        <div class=\"cart-table-name\"><a href=\"@Url\">@Name</a></div>"
                    + "    </div>@GiftList"
                    + "</td>"
                    + "<td class=\"price\" data-pointpay=\"@pointpay\">@Price</td>"
                    + "<td>"
                    + "    <div class=\"cart-table-number\"><a href=\"javascript:void(0);\" class=\"add-product\" onclick=\"AddCount(this,1)\">+</a><input name=\"BuyNum\" value=\"@count\" disabled=\"disabled\" type=\"text\" /><a href=\"javascript:void(0);\" class=\"cut-product\" onclick=\"AddCount(this,-1)\">-</a></div>"
                    + "</td>"
                    + "<td class=\"a-price\">@SumPrice</td>"
                    //+ "<td class=\"point\">@Point</td>"
                    + "<td><a class=\"delete\" onclick=\"DeleteProduct(this)\" name=\"@SumPrice1\" href=\"javascript:void(0);\"><i class=\"icon-delete\"></i>删除</a></td>"
                + "</tr>"
        var gift = "<div class=\"cart-table-send\">"
                 + "      <span class=\"line\"></span>"
                 + "      <div class=\"cart-table-img\">"
                 + "         <a href=\"@Url\"><img onerror=\"javascript:this.src='/images/picerror.jpg'\" src=\"@PicUrl\"></a>"
                 + "      </div>"
                 + "     <div class=\"cart-table-name\"><a href=\"@Url\">@Name</a></div>"
                 + "     <span class=\"price\">@Price</span>"
                 + "</div>";
        function GetShoppingCartList() {
            $("#ShoppingCartList").html("").append("<tr>"
                            + "<th class=\"first\" colspan=\"2\">"
                            + "    <span class=\"line\">"
                            + "        <label class=\"mn-check check-all check\">全选</label>"
                            + "        <span class=\"tooltip-span cFreight\"  style=\"display:none;\">还差元包邮 <a class=\"together-a\" href=\"javascript:void(0);\">凑单</a></span>"
                            + "    </span>"
                            + "</th>"
                            + "<th width=\"140\"><span class=\"line\">单价</span></th>"
                            + "<th width=\"140\"><span class=\"line\">数量</span></th>"
                            + "<th width=\"140\"><span class=\"line\">合计</span></th>"
                            //+ "<th width=\"140\"><span class=\"line\">积分</span></th>"
                            + "<th width=\"140\"><span class=\"line\">操作</span></th>"
                        + "</tr>");
            isHaveAjaxStatus = true;
            bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=shoppingcartlist", {}, ShoppingCartCallBack);

        }
        function ShoppingCartCallBack(returnVaule) {
            if (returnVaule != "") {
                //取得商品列表
                var ProductList = returnVaule.toString().split("<bohinetG/>");
                if (ProductList.length > 1) {
                    $("#NoShoppingProduct").hide();
                    $("#YesShoppingProduct").show()
                }
                else {
                    $("#NoShoppingProduct").show();
                    $("#YesShoppingProduct").hide();
                    IFLogin("CartLogin");
                }
                //分解列表信息
                var ProductCount = 0;
                var ProductAmt = 0;
                var SumPointAmt = 0;
                for (var i = 0; i < ProductList.length; i++) {
                    //判断是否是商品信息,含有ProductSysNo
                    var ProductSysNo = GetKeyValueFromCombineStr("ProductSysNo", ProductList[i]);
                    if (ProductSysNo != ajaxNoResult) {
                        var ProductGiftList = ProductList[i].toString().split("<bohinetGI />");
                        var ProductName = GetKeyValueFromCombineStr("ProductName", ProductGiftList[0]);
                        var ProductPic = GetKeyValueFromCombineStr("ProductPic", ProductGiftList[0]);
                        var ProductQty = GetKeyValueFromCombineStr("ProductQty", ProductGiftList[0]);
                        var ProductPrice = GetKeyValueFromCombineStr("ProductPrice", ProductGiftList[0]);
                        var ProductUrl = GetKeyValueFromCombineStr("ProductUrl", ProductGiftList[0]);
                        var ISPointProduct = GetKeyValueFromCombineStr("ISPointProduct", ProductGiftList[0]);
                        var PointAmt = GetKeyValueFromCombineStr("PointAmt", ProductGiftList[0]);
                        PointAmt = parseInt(PointAmt) < 0 ? 0 : PointAmt;
                        ProductCount = parseInt(ProductCount) + parseInt(ProductQty);
                        if (ISPointProduct == "0")
                            ProductAmt = parseFloat(ProductAmt) + (parseFloat(ProductPrice) * parseInt(ProductQty));
                        if (parseInt(PointAmt) > 0)
                            SumPointAmt = parseInt(SumPointAmt) + (parseInt(PointAmt) * parseInt(ProductQty));
                        var uphtml = atr.replace("@Name", ProductName).replace("@count", ProductQty).replace("@ispoint", ISPointProduct).replace("@pointpay", PointAmt);
                        if (i % 2 == 0) {
                            uphtml = uphtml.replace("@class", "");
                        }
                        else
                            uphtml = uphtml.replace("@class", "even");
                        if (parseInt(ISPointProduct) == 0) {
                            uphtml = uphtml.replace("@Price", "￥" + parseFloat(ProductPrice).toFixed(2)).replace("@SumPrice", "￥" + (parseFloat(ProductPrice) * parseInt(ProductQty)));
                        }
                        else {
                            uphtml = uphtml.replace("@Price", parseInt(PointAmt) + "积分").replace("@SumPrice", (parseInt(PointAmt) * parseInt(ProductQty)));
                        }
                        uphtml = uphtml.replace("@PicUrl", ProductPic);
                        uphtml = uphtml.replace("@Url", ProductUrl).replace("@Url", ProductUrl).replace("@SysNo", ProductSysNo).replace("@Point", (parseFloat(ProductPrice) * parseInt(ProductQty)));
                        uphtml = uphtml.replace("@SumPrice1", parseFloat(ProductPrice) * parseInt(ProductQty)).replace("@trPrice", parseFloat(ProductPrice) * parseInt(ProductQty)).replace("@trPoint", parseInt(PointAmt) * parseInt(ProductQty));
                        if (ProductGiftList.length > 1) {
                            var giftlist = "";
                            for (var n = 1; n < ProductGiftList.length; n++) {
                                var ProductItemSysNo = GetKeyValueFromCombineStr("ProductItemSysNo", ProductGiftList[n]);
                                var ProductItemName = GetKeyValueFromCombineStr("ProductItemName", ProductGiftList[n]);
                                var ProductItemPic = GetKeyValueFromCombineStr("ProductItemPic", ProductGiftList[n]);
                                var ProductItemPrice = GetKeyValueFromCombineStr("ProductItemPrice", ProductGiftList[n]);
                                var ProductItemUrl = GetKeyValueFromCombineStr("ProductItemUrl", ProductGiftList[n]);
                                giftlist += gift.replace("@Name", ProductItemName).replace("@Url", ProductItemUrl).replace("@Url", ProductItemUrl).replace("@PicUrl", ProductItemPic).replace("@Price", parseFloat(ProductItemPrice).toFixed(2));
                            }
                            uphtml = uphtml.replace("@GiftList", giftlist);
                        }
                        else
                            uphtml = uphtml.replace("@GiftList", "");
                        $("#ShoppingCartList").append(uphtml);
                    }
                }
                //alert(ProductAmt);
                if (ProductAmt >= 99)
                    $(".Free").html("您如需顺丰包邮，点此链接<a href='/pro/proDetail/4345'>积分兑换</a>");
                else
                    $(".Free").html("您还差" + (99 - parseInt(ProductAmt)) + "元包邮，点击<a href='/pro/proDetail/4387'>积分兑换包邮卡</a>或点击<a href='/Product/ProductList.aspx?PriceFrom=1&PriceTo=99'>凑单</a> ");

                $("#sumPoint").html(ProductAmt);
                $("#sumProductPrice").html(ProductAmt);
                $("#SOPrice").html(ProductAmt);
                $("#SumPointAmt").html(SumPointAmt);
                $("#SumPointAmts").html(SumPointAmt);
                ///猜你喜欢
                HotSaleList();
            }
            isHaveAjaxStatus = false;
        }
        function DeleteProduct(obj) {
            var test = $.dialog({
                elem: '#deleteCart',
                width: '200px',
                noFn: function () {
                },
                yesFn: function () {
                    $.ajax({ //这里使用到Jquery的ajax方法
                        type: "POST",
                        dataType: "html",
                        cache: false,
                        url: '/AjaxService/Sale.aspx?action=removeshopcartproduct', //请求的处理数据
                        data: { productSysNo: $($(obj).parent().parent()).attr("id") },
                        //传入的参数，第一个参数就是分页的页数，第二个参数为排序的依据
                        //下面的操作就是成功返回数据以后，进行数据的绑定
                        success: function (result) {
                            if (result == ajaxSuccess) {
                                var Price = $(obj).attr("name");
                                var Point = $(obj).attr("pointamt");
                                var ProductAmt = parseInt($("#sumProductPrice").html()) - parseInt(Price);
                                var PointAmt = parseInt($("#SumPointAmt").html()) - parseInt(Point);
                                $("#sumPoint").html(ProductAmt);
                                $("#sumProductPrice").html(ProductAmt);
                                $("#SumPointAmt").html(PointAmt);
                                $("#SumPointAmts").html(SumPointAmt);
                                $("#").html(parseInt($("#sumProductPrice").html()) - parseInt(Point))
                                if ($($(obj).parent().parent()).find(".mn-check").hasClass("check"))
                                    $("#SOPrice").html(parseInt($("#SOPrice").html()) - parseInt(Price));
                                // alert(ProductAmt);
                                if (ProductAmt >= 99)
                                    $(".Free").html("您如需顺丰包邮，点此链接<a href='/pro/proDetail/4345'>积分兑换</a>");
                                else
                                    $(".Free").html("您还差" + (parseInt(99) - parseInt(ProductAmt)) + "元包邮，点击<a href='/pro/proDetail/4387'>积分兑换包邮卡</a>或点击<a href='/Product/ProductList.aspx?PriceFrom=1&PriceTo=99'>凑单</a> ");

                                $($($(obj).parent().parent()).remove());
                                CheackTable();
                            }
                        }
                    });
                }
            });
            test.open();
        }

        function CheackTable() {
            if ($("table tr").length > 1) {
                $("#NoShoppingProduct").hide();
                $("#YesShoppingProduct").show()
            }
            else {
                $("#NoShoppingProduct").show();
                $("#YesShoppingProduct").hide();
                IFLogin("CartLogin");
            }
        }
        function AddCount(obj, count) {
            var ispoint = $($(obj).parent().parent().parent()).attr("ispoint");
            var vCount = $($($(obj).parent().parent())).find("input").val();
            var Scount = (parseInt(vCount) + count);
            if (Scount <= 0) {
                var del = $($($(obj).parent().parent().parent())).find(".delete");
                DeleteProduct(del);
            }
            else {
                var pointpay = $($(obj).parent().parent().parent()).find("td").eq(2).data("pointpay");
                var Price = $($(obj).parent().parent().parent()).find("td").eq(2).html().replace("￥", "");
                //if (ispoint == 1)
                //   Price = pointpay;
                var ProductSysNo = $($(obj).parent().parent().parent()).attr("id");
                var ProductAmt = "";
                var IsCheck = $($($(obj).parent().parent().parent()).find(".check")).attr("class");
                if (count == 1) {
                    if (ispoint == 0) {
                        ProductAmt = parseInt($("#sumProductPrice").html()) + parseInt(Price);
                        if (IsCheck != undefined)
                            $("#SOPrice").html(parseInt($("#SOPrice").html()) + parseInt(Price));
                    } else {
                        if (parseInt(pointpay) > 0) {
                            $("#SumPointAmt").html(parseInt($("#SumPointAmt").html()) + parseInt(pointpay));
                            $("#SumPointAmts").html(parseInt($("#SumPointAmt").html()) + parseInt(pointpay));
                        }
                    }
                }
                else {
                    if (ispoint == 0) {
                        ProductAmt = parseInt($("#sumProductPrice").html()) - parseInt(Price);
                        if (IsCheck != undefined)
                            $("#SOPrice").html(parseInt($("#SOPrice").html()) - parseInt(Price));

                    } else {
                        if (parseInt(pointpay) > 0) {
                            $("#SumPointAmt").html(parseInt($("#SumPointAmt").html()) - parseInt(pointpay));
                            $("#SumPointAmts").html(parseInt($("#SumPointAmt").html()) - parseInt(pointpay));
                        }
                    }
                }
                if (Price <= 0 && count == 1 && pointpay < 0) {
                    $.ajax({ //这里使用到Jquery的ajax方法
                        type: "POST",
                        dataType: "html",
                        cache: false,
                        url: '/AjaxService/Sale.aspx?action=addpiontcart', //请求的处理数据
                        data: { productSysNo: ProductSysNo, Count: count, SaleAmt: ProductAmt },
                        //传入的参数，第一个参数就是分页的页数，第二个参数为排序的依据
                        //下面的操作就是成功返回数据以后，进行数据的绑定
                        success: function (result) {
                            //alert("0");
                            if (result == ajaxSuccess) {
                                $($($(obj).parent().parent())).find("input").val(Scount);
                            }
                            else {
                                var test = $.dialog({
                                    elem: '#PiontTiShi',
                                    width: '904px'
                                });
                                test.open();
                            }
                        }
                    });
                }
                else {
                    $.ajax({ //这里使用到Jquery的ajax方法
                        type: "POST",
                        dataType: "html",
                        cache: false,
                        url: '/AjaxService/Sale.aspx?action=addcart', //请求的处理数据
                        data: { productSysNo: ProductSysNo, Count: count },
                        //传入的参数，第一个参数就是分页的页数，第二个参数为排序的依据
                        //下面的操作就是成功返回数据以后，进行数据的绑定
                        success: function (result) {
                            if (result == ajaxSuccess) {
                                $($($(obj).parent().parent())).find("input").val(Scount);
                                $($(obj).parent().parent().parent()).find(".point").html(Scount * Price);
                                $($(obj).parent().parent().parent()).attr("name", Scount * Price);
                                $($(obj).parent().parent().parent()).attr("pointamt", Scount * pointpay);
                                $("#sumPoint").html(ProductAmt);
                                if (ispoint == 0) {
                                    $("#sumProductPrice").html(ProductAmt);
                                    $($($(obj).parent().parent().parent())).find(".a-price").html("￥" + (Scount * parseInt(Price)));
                                } else
                                    $($($(obj).parent().parent().parent())).find(".a-price").html((Scount * parseInt(Price)));
                                if (ProductAmt >= 99)
                                    $(".Free").html("您如需顺丰包邮，点此链接<a href='/pro/proDetail/4345'>积分兑换</a>");
                                else
                                    $(".Free").html("您还差" + (parseInt(99) - parseInt(ProductAmt)) + "元包邮，点击<a href='/pro/proDetail/4387'>积分兑换包邮卡</a>或点击<a href='/Product/ProductList.aspx?PriceFrom=1&PriceTo=99'>凑单</a> ");
                            }
                        }
                    });
                }
            }
        }

        function addShoppingCart(obj) {
            var ProductSysNo = $(obj).attr("id");
            var count = 1;
            AddCart_Url(ProductSysNo, count, "/Sale/Cart.aspx");
        }
        function addPiontCart(obj) {
            var ProductSysNo = $(obj).attr("id");
            var count = 1;
            var ProductAmt = $("#SOPrice").html();
            $.ajax({ //这里使用到Jquery的ajax方法
                type: "POST",
                dataType: "html",
                cache: false,
                url: '/AjaxService/Sale.aspx?action=addpiontcart', //请求的处理数据
                data: { productSysNo: ProductSysNo, Count: count, SaleAmt: ProductAmt },
                //传入的参数，第一个参数就是分页的页数，第二个参数为排序的依据
                //下面的操作就是成功返回数据以后，进行数据的绑定
                success: function (result) {
                    if (result == ajaxSuccess) {
                        location.href = location.href;
                    }
                    else {
                        var test = $.dialog({
                            elem: '#PiontTiShi',
                            width: '904px'
                        });
                        test.open();
                    }
                }
            });
        }

        function HotSaleList() {
            isHaveAjaxStatus = true;
            bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=gethotsale", { SaleAmt: $("#SOPrice").html() }, HotSaleCallBack);
        }
        function HotSaleCallBack(data) {
            if (data != "") {
                //取得商品列表
                var ProductList = data.toString().split("<bohinetG/>");
                //分解列表信息
                var Count = 0;
                for (var i = 0; i < ProductList.length; i++) {
                    //判断是否是商品信息,含有ProductSysNo
                    var ProductSysNo = GetKeyValueFromCombineStr("ProductSysNo", ProductList[i]);
                    if (ProductSysNo != ajaxNoResult) {
                        Count++;
                        var ProductName = GetKeyValueFromCombineStr("ProductName", ProductList[i]);
                        var ProductPic = GetKeyValueFromCombineStr("ProductPic", ProductList[i]);
                        var ProductPrice = GetKeyValueFromCombineStr("ProductPrice", ProductList[i]);
                        var ProductUrl = GetKeyValueFromCombineStr("ProductUrl", ProductList[i]);
                        var uphtml = "<li>"
                                   + "    <p class=\"p-img\">"
                                   + "        <a href=\"" + ProductUrl + "\">"
                                   + "            <img src=\"" + ProductPic + "\" /></a>"
                                   + "    </p>"
                                   + "    <p class=\"p-name\"><a href=\"" + ProductUrl + "\" title=\"" + ProductName + "\">" + ProductName.substring(0, 30) + "...</a></p>"
                                   + "     <p class=\"p-price\"><span class=\"price\">￥" + ProductPrice + "</span></p>"
                                   + "    <p class=\"p-tool\"><a class=\"cart-btn\" id=\"" + ProductSysNo + "\" onclick=\"addShoppingCart(this)\" href=\"javascript:void(0)\">加入购物车</a> </p>"
                                   + " </li>";
                        $("#HotSaleList").append(uphtml);
                    }
                }
            }
            isHaveAjaxStatus = false;

            $("#hotsaleDiv").each(function (index, value) {
                var right_btn = $(this).find('.left-btn'),
                    left_btn = $(this).find('.right-btn'),
                    Switch_box = $(this).find('.slide-content'),
                    Switch_ul = $(this).find('.cart-com-list'),

                    Switch_ul_li = Switch_ul.children('li'),
                    len = Switch_ul_li.length,
                    widths = Switch_ul_li.width() + 16,
                    boxWidth = Switch_box.width();
                number = Math.floor((len * widths) / Switch_box.width());

                Switch_ul.css({ 'left': 0 });
                Switch_ul.css({ 'width': widths * len });

                left_btn.unbind('click.scroll');
                right_btn.unbind('click.scroll');
                if (len <= number) {
                    left_btn.hide();
                    right_btn.hide();
                    return;
                }
                (function (number) {
                    var len = len;
                    var i = 0;
                    left_btn.bind('click.scroll', function (e) {
                        var e = e || window.event;
                        e.preventDefault();
                        e.stopPropagation();
                        i++
                        if (i > number) {
                            i = number;
                            return;
                        }
                        scrollAnimate(i);

                    });

                    right_btn.bind('click.scroll', function (e) {
                        var e = e || window.event;
                        e.preventDefault();
                        e.stopPropagation();
                        i--;
                        if (i < 0) {
                            i = 0;
                            return;
                        }
                        scrollAnimate(i);
                    });

                    function scrollAnimate(index) {
                        Switch_ul.animate({ 'left': -boxWidth * index }, 800);
                    }

                })(number);
            });
            $("#hotsaleright").show();
            $("#hotsaleleft").show();
        }

        function TogetherSaleList() {
            isHaveAjaxStatus = true;
            bohinetAjaxWholeUrlPost("/AjaxService/Sale.aspx", "action=togethersale", { SaleAmt: $("#SOPrice").html() }, TogetherSaleCallBack);
        }
        function TogetherSaleCallBack(data) {
            if (data != "") {
                //取得商品列表
                var ProductList = data.toString().split("<bohinetG/>");
                //分解列表信息
                var Count = 0;
                for (var i = 0; i < ProductList.length; i++) {
                    //判断是否是商品信息,含有ProductSysNo
                    var ProductSysNo = GetKeyValueFromCombineStr("ProductSysNo", ProductList[i]);
                    if (ProductSysNo != ajaxNoResult) {
                        Count++;
                        var ProductName = GetKeyValueFromCombineStr("ProductName", ProductList[i]);
                        var ProductPic = GetKeyValueFromCombineStr("ProductPic", ProductList[i]);
                        var ProductPrice = GetKeyValueFromCombineStr("ProductPrice", ProductList[i]);
                        var ProductUrl = GetKeyValueFromCombineStr("ProductUrl", ProductList[i]);
                        var uphtml = "<li>"
                                   + "    <p class=\"p-img\">"
                                   + "        <a href=\"" + ProductUrl + "\">"
                                   + "            <img src=\"" + ProductPic + "\" /></a>"
                                   + "    </p>"
                                   + "    <p class=\"p-name\"><a href=\"" + ProductUrl + "\" title=\"" + ProductName + "\">" + ProductName.trim().substring(0, 30) + "...</a></p>"
                                   + "     <p class=\"p-price\"><span class=\"price\">￥" + ProductPrice + "</span></p>"
                                   + "    <p class=\"p-tool\"><a class=\"cart-btn\" id=\"" + ProductSysNo + "\" onclick=\"addShoppingCart(this)\" href=\"javascript:void(0)\">加入购物车</a> </p>"
                                   + " </li>";
                        $("#Togethersale").append(uphtml);
                    }
                }
            }
            isHaveAjaxStatus = false;

            $(".choudan-product").each(function (index, value) {
                var right_btn = $(this).find('.left-btn'),
                    left_btn = $(this).find('.right-btn'),
                    Switch_box = $(this).find('.slide-content'),
                    Switch_ul = $(this).find('.cart-com-list'),

                    Switch_ul_li = Switch_ul.children('li'),
                    len = Switch_ul_li.length,
                    widths = Switch_ul_li.width() + 16,
                    boxWidth = Switch_box.width();
                number = Math.floor((len * widths) / Switch_box.width());

                Switch_ul.css({ 'left': 0 });
                Switch_ul.css({ 'width': widths * len });

                left_btn.unbind('click.scroll');
                right_btn.unbind('click.scroll');
                if (len <= number) {
                    left_btn.hide();
                    right_btn.hide();
                    return;
                }
                (function (number) {
                    var len = len;
                    var i = 0;
                    left_btn.bind('click.scroll', function (e) {
                        var e = e || window.event;
                        e.preventDefault();
                        e.stopPropagation();
                        i++
                        if (i > number) {
                            i = number;
                            return;
                        }
                        scrollAnimate(i);

                    });

                    right_btn.bind('click.scroll', function (e) {
                        var e = e || window.event;
                        e.preventDefault();
                        e.stopPropagation();
                        i--;
                        if (i < 0) {
                            i = 0;
                            return;
                        }
                        scrollAnimate(i);
                    });

                    function scrollAnimate(index) {
                        Switch_ul.animate({ 'left': -boxWidth * index }, 800);
                    }

                })(number);
            });
            $("#TogethersaleRight").show();
            $("#TogethersaleLeft").show();
            }