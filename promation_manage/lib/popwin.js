/*
 *@Description:
 *@Modify: yankaipan
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
						$(".pop-close",options.popupClass).unbind("click").bind("click" , S.layerClose );
                        if(options.maskLayer){ S.maskModel(); };
                        if(options.delayClose!=null){ S.delayModel(); };
                    },
                    maskModel:function(){
                        $(options.popupClass).after("<div class='popup-mask'></div>");
                        $(".popup-mask").css("height",_docHeight);
                        if ($.browser.msie && $.browser.version <= 6){
                            $(".popup-mask").after("<iframe class='popup-iframe' frameborder='0'></iframe>");
                            $(".popup-iframe").css("height",_docHeight);
                        }
                    },
                    layerClose:function(){
                        window.clearInterval(_InterValObj);
                        $(options.popupClass).hide();
                        $(".popup-mask").remove();
                        $(".popup-iframe").remove();
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
