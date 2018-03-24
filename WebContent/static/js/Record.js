var _vds = _vds || [];

window._vds = _vds;
var userid = "";
(function () {
    $.ajax({
        url: '/AjaxService/sale.aspx?action=SessionCustomer',
        dataType: 'text',
        type: 'POST',
        success: function (data) {
            userid = data;
            var title = $("title").html();
            if (title == "")
                title = "罗技";
            _vds.push(['setAccountId', '95d4a368df0e83e1']);
            if (userid != "")
                _vds.push(['setCS1', 'userid', '' + userid + '']);

            _vds.push(['setCS3', 'title', '' + title + '']);

            (function () {
                var vds = document.createElement('script');
                vds.type = 'text/javascript';
                vds.async = true;
                vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(vds, s);
            })();
        },
    });
   
})();