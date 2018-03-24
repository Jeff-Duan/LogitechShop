/**
 * Created by Administrator on 2014/11/13.
 */
(function($){

    var win = window;
    var doc = window.document;
    var docElem = doc.documentElement;
    var $body=$('body');

    function dialog(options){
        if(!(this instanceof dialog)){
            return new dialog(options);
        }
        var defaults = {
            autoClose  :   null,      // Number        自动关闭对话框的时间
            content    :   'Hello world :',	  // String        对话框的内容(可以是HTML字符串)
            title      :   null,   	  // String        对话框的标题
            btnShow    :   true,         // Boolean       是否显示按钮
            yesText    :   '确定',	  // String        确定按钮的文本
            noText     :   '取消',	  // String        取消按钮的文本
            yesFn      :    function(){},	  // Function      确定按钮的回调(传了该参数才会显示确定按钮)
            noFn       :    function(){},	  // Function      取消按钮的回调(传了该参数才会显示确定按钮)
            width      :   '320px',   // String        设置对话框的宽度(须含单位)
            height     :   'auto',    // String        设置对话框的高度(须含单位)
            top        :   null,      // String        设置对话框的top位置值(须含单位)
            left       :   null,      // String        设置对话框的left位置值(须含单位)
            overlay    :   true,	  // Boolean       是否添加遮罩层
            overlayClose :   false,	  // Boolean       是否点击遮罩层关闭对话框
            fixed      :   true,	  // Boolean       是否固定定位
            lock       :   false,	  // Boolean       是否允许ESC键来关闭对话框
            effects    :   null,      // String        对话框关闭和显示的动画效果
            zIndex     :   9999,      // Number        遮罩层默认的zIndex值
            drag       :   true,      // Boolean       是否绑定拖拽功能
            topWindow  :   false,     // Boolean       设置对话框运行的窗口(在iframe中可以让对话框在顶级窗口中显示)
            elem       :   null,      // String|Element|easyJS Object 自定义对话框的HTML结构
            dragHandle :   null       // String|Element|easyJS Object 自定义对话框的拖拽区域
        };
        this.options= $.extend(defaults,options);
        this.dialog=null;
    }

    var DialogTool={
        getDocSize:function(){
            var cwidth=$(window).width();
            var cheight=$(window).height();
            var width =Math.max(cwidth,$(document).width());
            var height =Math.max(cheight,$(document).height());
            return {
                width: width,
                height: height,
                cwidth:cwidth,
                cheight:cheight
            }
        },
        setPosition:function(o,elem){
            var MarginLeft=o.left!=null?0:-($(elem).outerWidth()/ 2),
                MarginTop=o.top!=null?0:-($(elem).outerHeight()/ 2),
                position=o.fixed==true?'fixed':'absolute',
                top= o.top!=null?o.top:'50%',
                left= o.left!=null? o.left:'50%';
                $(elem).css({position:position,left:left,top:top,'margin-left':MarginLeft,'margin-top':MarginTop,'z-Index': o.zIndex+1});
        },
        createOverlay:function(zIndex){
            var html = $('<div class="wd_overlay" ' +
                'style="margin:0;padding:0;display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000; opacity: 0.5;' +
                'z-index:' + zIndex + '"/>');
            return html;
        },
        createDialog:function(o){
            var dialogBox=$('<div class="wd-modal-dialog" />'),
                dialogHeader,dialogContent,dialogFooter,btnHtml,title= o.title!=null? o.title:"&nbsp;",contentObj;

                dialogHeader='<div class="dialog-header">'
                                  +'<h3 class="title">'+title+'</h3>'
                                   +'<a class="close" href="javascript:void(0);">关闭</a>'
                              +'</div>';
                if((typeof  o.content)==='string'){
                    dialogContent=$('<div class="dialog-body">'+o.content+'</div>');
                }else{
                    dialogContent=$('<div class="dialog-body" />');
                    //o.content.hide();
                   // contentObj=o.content.clone(true,true);
                    dialogContent.append(o.content.show());
                }


            if(o.btnShow){
              dialogFooter=$('<div class="dialog-footer text-right" />');
              btnHtml='<a class="wd-button wd-dialog-cancel" href="javascript:void(0);" style="margin-right: 15px;">'+ o.noText+'</a>'
                             +'<a class="wd-button wd-button-primary wd-dialog-sure" href="javascript:void(0);">'+o.yesText+'</a>';
              dialogFooter.html(btnHtml);
            }
            dialogBox.html(dialogHeader).append(dialogContent).append(dialogFooter);
            dialogBox.css('width',o.width);
            return dialogBox;
        },
        createUserDialog:function(o){
            var UserDialog=$('<div class="wd-user-dialog" />');
            var user=$(o.elem).show();
                UserDialog.css('width',o.width);
                UserDialog.append(user);
                return   UserDialog;
        }
    };

    dialog.prototype={
        open:function() {
            var that = this, $Overlay = $('.wd_overlay'), $dialog;
            if ($Overlay.length == 0) {
                $Overlay = DialogTool.createOverlay(this.options.zIndex);
            }
            $('body').append($Overlay);

           //判断是自定义弹出框还是默认默认弹出框
           if(this.options.elem==null){
                $dialog = DialogTool.createDialog(this.options);
           }else{
               $dialog=DialogTool.createUserDialog(this.options);
           }

            //绑定确定取消事件
            $dialog.on('click.close','.close',function(e){
                that.options.noFn();
                that.close();
            });
            $dialog.on('click.cancel','.wd-dialog-cancel',function(e){
                that.options.noFn();
                that.close();
            });
            $dialog.on('click.sure','.wd-dialog-sure',function(e){
                that.options.yesFn();
                that.close();
            });

            //是否显示遮罩
            if(this.options.overlay!=false){
                $Overlay.show();
            }
            this.dialog = $dialog;

            $('body').append(this.dialog).show();

            DialogTool.setPosition(this.options, $dialog);

            //是否自动关闭
            if(this.options.autoClose!=null){
                this.time=setTimeout(function(){
                    that.close();
                },this.options.autoClose);
            }
        },
        close:function(){
            clearTimeout(this.time);
            if(this.options.overlay!=false) {
                $('.wd_overlay').hide();
            }
            if( typeof this.options.content =='object'){
                 $('body').append(this.options.content.hide());
            }
            if(this.options.elem!=null){
                 console.log($(this.options.elem));
                 $('body').append($(this.options.elem).hide());
            }
            $(this.dialog).remove();
        }
    };

    $.dialog=dialog;

})(jQuery);
