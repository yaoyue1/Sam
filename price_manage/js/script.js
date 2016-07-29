// create by yuting on 2016-2-18

/*
*/
var price_manage = {

	//初始化
	initFun:function(){
        this.ifLockPriceFun();//是否锁定当前价格
		this.checkAllFun(); //评论审核-表格全选
    	this.handleFun(); //表格的操作
		this.allPopupFun(); //所有弹窗
	},
    //是否锁定当前价格
    ifLockPriceFun:function(){
        $('.lock_price_radio').change(function(){
            if($(this).find('input').is(':checked')){
                $(this).parents('.if_lock_price').next('.remind_ag').show();
                $(this).parents('.pri_item').next('.lock_time').show();
            }
        });
        $('.not_lock_price_radio').change(function(){
            if($(this).find('input').is(':checked')){
                $(this).parents('.if_lock_price').next('.remind_ag').hide();
                $(this).parents('.pri_item').next('.lock_time').hide();
            }
        })
    },
	//评论审核-表格全选
	checkAllFun:function(){
		$('.check_all_ipt').change(function(){
			if ($(this).is(':checked')) {
				$(this).parents('thead').next().find('.child_ipt').prop('checked',true);
			}else{
				$(this).parents('thead').next().find('.child_ipt').prop('checked',false);
			}
		});
		/*
		* 去除全选
		*/
		$('.child_ipt').change(function(){
			var checked_ipt = $(this).parents('tbody').find('.child_ipt:checked');
			if (checked_ipt.length == $(this).parents('tbody').find('.child_ipt').length) {
				$(this).parents('tbody').prev().find('.check_all_ipt').prop('checked',true);
			}else{
				$(this).parents('tbody').prev().find('.check_all_ipt').prop('checked',false);
			}
		})
	},
	//评分下拉框
	dropFun:function(){
		$('.drop_head').click(function(event){
			event.stopPropagation();
			$(this).next('.drop_body').show();
			$(this).next('.drop_body').click(function(event){
				event.stopPropagation();				
			});
			//评分不限和具体评分等级的选择
			$(this).next('.drop_body').find('input').not('.unlimited').change(function(){
				if($(this).is(':checked')){
					$(this).parents('.drop_body').find('input.unlimited').prop('checked',false);
				}
			});
			$(this).next('.drop_body').find('.unlimited').change(function(){
				if($(this).is(':checked')){
					$(this).parents('.drop_body').find('input').not('.unlimited').prop('checked',false);
				}
			});
			//确定
			$(this).next('.drop_body').find('.confirm').click(function(){	
				var checked_ipt = $(this).parent().prev('ul').find('input:checked'),
					points = [];
				checked_ipt.each(function(){
					points.push($(this).siblings('label').html());
				})	
				$(this).parents('.drop_body').prev('.drop_head').find('input').val(points);
				$('.drop_body').hide();
			});
			//取消
			$(this).next('.drop_body').find('.cancle').click(function(){
				var  current_checked_value = $(this).parents('.drop_body').prev('.drop_head').find('input').val();
				var input_array = $(this).parents('.drop_body').find('input');
				input_array.prop('checked',false);
				input_array.each(function(){
					var this_input = $(this);
					var  item_value =  this_input.siblings('label').html().trim();
					if(current_checked_value.indexOf(item_value)>=0){
						this_input.prop('checked',true);
					};
				});
				$('.drop_body').hide();
			});
		})
		$(document).click(function(event){
   			event.stopPropagation();
   			$('.drop_body').hide();
   		})
	},
	//表格的操作
	handleFun:function(){
		$('.check_handle').click(function(){
			if ($(this).hasClass('gray_link')) {
				return false;
			}
			$(this).siblings('.tooltip_box').show();
			$(this).siblings('.tooltip_box').find('.confirm').click(function(){
				$(this).parents('.tooltip_box').hide();
				$(this).parents('.tooltip_box').prev('.check_handle').addClass('gray_link');
				$(this).parents('.has_tooltip').siblings('.has_tooltip').find('.check_handle').removeClass('gray_link');
			});
		});
		$('.handle_td .cancle').click(function(){
			$(this).parents('.tooltip_box').hide();
		})
	},
	//所有弹窗
	allPopupFun:function(){
		/*
		*编辑回复弹窗&回复弹窗
		*/
		$('.text_area_box textarea').focus(function(){
			$(this).prev('.tip_txt').hide();		
		}).blur(function(){
			if (!$(this).val()) {
				$(this).siblings('.tip_txt').show();
			}
		});
		$('.reply_popup .confirm').click(function(){
			var reply_txt = $(this).parent().siblings('.text_area_box').find('textarea').val();
			if (!reply_txt) {
				$(this).parent().siblings('.error_tip').show();
			}else{
				$(this).parent().siblings('.error_tip').hide();
			}
		})
	}
}
price_manage.initFun();