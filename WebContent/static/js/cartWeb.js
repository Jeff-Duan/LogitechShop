/**
 * Created by Administrator on 2015/1/20.
 */
function scrollData(){
    $('.cart-product-content').each(function(index,value){
        var left_btn = $(this).find('.right-btn'),
            right_btn=$(this).find('.left-btn'),
            Switch_box=$(this).find('.slide-content'),
            Switch_ul=$(this).find('.cart-com-list'),

            Switch_ul_li= Switch_ul.children('li'),
            len=Switch_ul_li.length,
            widths=Switch_ul_li.width()+16,
            boxWidth=Switch_box.width();
            number=Math.floor((len*widths)/Switch_box.width());

        Switch_ul.css({'left':0});
        Switch_ul.css({'width':widths*len});

        left_btn.unbind('click.scroll');
        right_btn.unbind('click.scroll');
        if(len<=number){
            left_btn.hide();
            right_btn.hide();
            return;
        }
        (function(number){
            var len=len;
            var i=0;
            left_btn.bind('click.scroll',function(e){
                var e=e||window.event;
                e.preventDefault();
                e.stopPropagation();
                i++
                if(i>=number){
                    i=number-1;
                    return;
                }
                scrollAnimate(i);

            });

            right_btn.bind('click.scroll',function(e){
                var e=e||window.event;
                e.preventDefault();
                e.stopPropagation();
                i--;
                if(i<0){
                    i=0;
                    return;
                }
                scrollAnimate(i);
            });

            function scrollAnimate(index){
                Switch_ul.animate({'left':-boxWidth*index},800);
            }

        })(number);
    });
}
function tabShow (tabNavID, $pageTabBox, Event) {/*简单的tab切换效果*/
    var $pageTabBox = $($pageTabBox);
    var $pageChild = $pageTabBox.children('div');
    $(tabNavID).children('li').not(".more").bind(Event, function () {
        var $this = $(this);
        var index = $this.index();
        // alert(fn);
        $this.addClass('active').siblings().removeClass('active')
        $pageChild.removeClass('active').hide();
        $pageChild.eq(index).addClass('active').show();
        //return false;
    });
};
$(function(){
    scrollData();
    tabShow('#tabNav','#tabBox','click');
});
