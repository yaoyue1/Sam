/*
 *@Description: dialog v0.1
 *@Author: yankaipan
 *@Update: yankaipan
*/
;(function($){
	$.fn.extend({
		"PopupDialog" : function(options){
			var defaults = {
				popupClass:'',
				maskLayer:true,
				delayClose:null //设置延时自动关闭时间(取值为自然数)
			};
            var options  = $.extend(true,defaults,options);

            this.each(function(){
                var _this = $(this),
                    _popupWidth = $(options.popupClass).outerWidth(),
                    _popupHeight = $(options.popupClass).outerHeight(),
                    _winScrollTop = $(window).scrollTop(),
                    _winHeight = $(window).height(),
                    _docHeight = $(document).height(),
                    _InterValObj ;

                var S={
                    init:function(){
                        $(options.popupClass).css({
                            marginLeft:-(_popupWidth/2),
                            top:(_winHeight-_popupHeight)/2+_winScrollTop,
                            display:"block"
						});
						$(".popup_close",options.popupClass).unbind("click").bind("click" , S.layerClose );
                        if(options.maskLayer){ S.maskModel(); };
                        if(options.delayClose!=null){ S.delayModel(); };
                    },
                    maskModel:function(){
                        $(options.popupClass).after("<div class='mask_layer'></div>");
                        $(".mask_layer ").css("height",_docHeight);
                        // if ( if (/msie\s+[5-6]\./i.test(navigator.userAgent))){ //升级jq版本之后这两种判断方法都可行
                        if ($.support && $.support.version <= 6){
                            $(".mask_layer ").after("<iframe class='popup_iframe' frameborder='0'></iframe>");
                            $(".popup_iframe").css("height",_docHeight);
                        }
                    },
                    layerClose:function(){
                        window.clearInterval(_InterValObj);
                        $(options.popupClass).hide();
                        $(".mask_layer ").remove();
                        $(".popup_iframe").remove();
                    },

                    delayModel:function(){
                        $('.delayClose' , options.popupClass).text(options.delayClose);
                        var curCount = options.delayClose;
                         _InterValObj = setInterval(function(){
                            if(curCount==1){
                                window.clearInterval(_InterValObj);
                                S.layerClose();
                            }else{
                                curCount-- ;
                                $('.delayClose' , options.popupClass).text(curCount);
                            }
                        } ,1000);
                    }

                };
                S.init();

            });
            return this;
		}
	});
})(jQuery);
