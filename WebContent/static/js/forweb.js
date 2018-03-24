/**
 * Created by Administrator on 2015/2/27.
 */
$(function () {

    $('.user-cart').hover(function () {
        $(this).find('.header-cart-product').show();
    }, function () {
        $(this).find('.header-cart-product').hide();
    });

    $('#Nav').children('li').hover(function () {

        $(this).addClass('active').find('.sub-nav-box').show();
    }, function () {
        $(this).removeClass('active').find('.sub-nav-box').hide();
    });

    (function () {
        var sc = new $.ui.Switchable('#IndexFlash', {
            effects: 'fade',
            nav: false,
            auto: true,
            interval:4000
        });

        $('.top-left-banner').find('.banner-box').hover(function () {
            $(this).animate({ 'margin-left': -10 }, 200);
        }, function () {
            $(this).animate({ 'margin-left': 0 }, 200);
        });

        $('#Nav').find('.classify').hover(function () {
            $('.classify-nav').show();
        }, function () {
            $('.classify-nav').hide();
        });


        $(window).bind('resize', function () {
            $('#IndexFlash').unbind();
            sc.destroy();
            $('#IndexFlash').find(".sc_container").css('width', '');
            $('#IndexFlash').find(".sc_container").children('ul').attr('style', '');
            $('#IndexFlash').find(".sc_container").children('ul').find('li').css('width', '');
            $('#IndexFlash').find('.sc_index').remove();
            $('#IndexFlash').find('.sc_prev').remove();
            $('#IndexFlash').find('.sc_next').remove();

            sc = new $.ui.Switchable('#IndexFlash', {
                effects: 'fade',
                nav: false,
                auto: true,
                interval:4000
            });
        });
    })();


    $('.left-banner').each(function () {
        if ($.ui) {
            var sc = new $.ui.Switchable($(this), {
                effects: 'slideX',
                nav: false,
                interval: 4000
            });
        }
    });
    function appWaltter() {
        if ($.fn.BlocksIt) {
            $('#WaltterBox').BlocksIt({
                numOfCol: 5,
                offsetX: 12,
                offsetY: 8,
                blockElement: '.list-box'
            });
        }

    }

    appWaltter();

});
///ÅÐ¶ÏÊÇ·ñµÇÂ¼
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
            area: ['auto', 'auto'],
            page: { dom: '#LoginAlert' }
        });
        retCheckLogin = false;
    }
    else {
        retCheckLogin = true;
    }
    isHaveAjaxStatus = false;
}

function CustomerLogin(CustomerID, Pwd) {
    $.ajax({
        url: '/AjaxService/Customer.aspx?action=customerlogin',
        data: { CustomerID: CustomerID, Pwd: Pwd },
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            if (obj.stat == 'ok') {
                layer.closeAll();
            }
            else
                layer.alert(obj);
        },
        error: function (obj, msg) {
            //layer.alert(msg);
            layer.alert(obj.responseText);
        }
    });
}


function CustomerLoginUrl(CustomerID, Pwd, Url) {
    $.ajax({
        url: '/AjaxService/Customer.aspx?action=customerlogin',
        data: { CustomerID: CustomerID, Pwd: Pwd },
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            if (obj.stat == 'ok') {
                layer.closeAll();
                location.href = Url;

            }
        },
        error: function (obj, msg) {
            layer.alert(obj.responseText);
        }
    });
}


function OutLogin() {
    $.ajax({
        url: '/AjaxService/Customer.aspx?action=signout',
        data: {  },
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            if (obj.returnMsg == "ok") {
                location.href = location.href;
            }
        },
        error: function (obj, msg) {
            layer.alert(obj.responseText);
        }
    });
}
