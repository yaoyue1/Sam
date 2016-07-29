$(function(){

	tabChange();//tabChange
	showTable();//设置促销规则 - 设置层级 - 促销内容 - 
	labelForFun();//label for 属性模拟
	addNewLevel();//添加新层级促销
	ruleTab();//单品、多品折扣tab
	uniformSetValue(); //以下统一设置为该值

});
//设置促销规则 - 设置层级 - 促销内容 - 
function showTable() {
 	var check_box = $('.choose').find('label');
 	check_box.click(function(){
 		var check_box = $(this).prev('input');
 		//判断是否被选中
 		if (check_box.is(':checked')) {
 			check_box.attr('checked',false);
 			$(this).parent().next('.add-goods-box').hide();
 		}else{
 			$(this).parent().next('.add-goods-box').show();
 			check_box.attr('checked','checked');
 		}
 	})
	//hover效果
	$(".hover-box ").hover(function(){
		$(this).find(".icon-hover").show();
		$(this).find(".hover-con").show();
	}, function(){
		$(this).find(".icon-hover").hide();
		$(this).find(".hover-con").hide();
	});
	//弹框表格全选
	$(".Ag-common-dialog .tab-check-parents").click(function(){
		if ($(this).is(':checked')) {
			$(this).parents('.tab-header').next('.tab-body').find('.tab-check-son').attr('checked',true);
		}else{
			$(this).parents('.tab-header').next('.tab-body').find('.tab-check-son').attr('checked',false);
		}
	});
	//未选中商品时出现提示
	$(".whether-choose").click(function(){
		var len = $(this).parents(".Ag-common-dialog").find('.tab-check-son:checked').length;
		if(len<1){
			$(this).parents(".Ag-common-dialog").find(".box-error").show();
		}
		else{
			$(this).parents(".Ag-common-dialog").hide().find(".box-error").hide();
			$(".popup-mask").remove();
			$(".popup-iframe").remove();
		}
	})
	//送赠品、换购商品文字点击勾选复选框
	$('.sales-details-checkbox').change(function(){
		if ($(this).is(':checked')) {
			$(this).parent('.sales-type').next('.sales-items').show();
		}else{
			$(this).parent('.sales-type').next('.sales-items').hide();
		}
	})
	//促销冲突页面--点击终止店铺内冲突促销
	$('.btn-whether-sure').click(function(e){
		e.stopPropagation();
		$('.btn-whether-sure').next().hide().next().hide();
		$(this).next().show().next().show();
		$(document).click(function(){
			$(".btn-whether-sure").next().hide().next().hide();
		});
	});
 } 
 //tabChange
 function tabChange() {
 	var tab_tit= $('.tab-tit > li'),
 		tab_con = tab_tit.parents('.tab-tit').next('.tab-con-box');
 	tab_tit.click(function(){
 		var index = $(this).index();
 		tab_con.show();
		tab_con.find('.tab-con').eq(index).show().siblings().hide();
		$(this).find('input').attr('checked',true);
		$(this).find('a').show();
		$(this).siblings().find('a').hide();
 	})
 }
 //单品、多品折扣tab
 function ruleTab() {
 	var tab_tit = $('.rule-tab-tit'),
 		tab_con = tab_tit.next('.bk-sales-con-wrap');
 	tab_tit.find('a').click(function(){
 		var index = $(this).index();
 		$(this).addClass('cur').siblings().removeClass('cur');
 		tab_con.find('.bk-sales-con').eq(index).show().siblings().hide();
 	})
 }
 //label for属性模拟
 function labelForFun(){
 	var radio_wrap = $('.radio-wrap'),
 		checkbox_wrap = $('.checkbox-wrap');
 	//单选框
 	radio_wrap.click(function(){
 		$(this).find('input').attr('checked',true);
 	})
 	//复选框
 	checkbox_wrap.find('label').click(function(){
 		var checkbox = $(this).parent().find('input');
 		if (checkbox.is(':checked')) {
 			checkbox.attr('checked',false);
 			$(this).parent('.sales-type').next('.sales-items').hide();
 		}else{
 			checkbox.attr('checked',true);
 			$(this).parent('.sales-type').next('.sales-items').show();
 		}
 	})
 }
//是否删除
function whetherSure(){
	$('.btn-whether-sure').click(function(e){
		e.stopPropagation();
		$('.btn-whether-sure').next().hide().next().hide();
		$(this).next().show().next().show();
		//非会员创建满减满送促销.html--是否删除促销层级
		$(this).parents(".sub-tab-tit li").find(".sure-close").unbind('click').bind('click',function(e){
			e.stopPropagation();
			if($(this).parents('.sub-tab-tit li').hasClass('cur'))
			{
				$(this).parents('.sub-tab-tit li').prev().addClass('cur');
			}
			$(this).parents(".sub-tab-tit li").remove();
			accountNum();
		});
		$(this).parents(".sub-tab-tit li").find(".cancel-close").unbind('click').bind('click',function(e){
			e.stopPropagation();
			$(this).parents(".box-click").hide();
		});
		$(document).click(function(){
			$(".btn-whether-sure").next().hide().next().hide();
		});
	});
}
//显示层级个数并添加删除
function accountNum(){ 
	var flag_class = $('.sub-tab-tit li').parents('.bk-sales-con-wrap').prev('.rule-tab-tit');
		len=$('.sub-tab-tit li').length,
		li = $('.sub-tab-tit li');
	if (flag_class.length > 0) {  //判断是否有多品/单品切换 大于0为有
		var current_a = flag_class.find('a').filter('.cur'),
			index = current_a.index();
		len = $('.bk-sales-con-wrap .bk-sales-con').eq(index).find('.sub-tab-tit li').length;
		li = $('.bk-sales-con-wrap .bk-sales-con').eq(index).find('.sub-tab-tit li');
	}
	li.each(function(){
		var index = $(this).index();
		if(len==1) {return false;}
		if(index==len-1){
			var str_b='<div class="box-click"><a href="javascript:" class="delete-grade btn-whether-sure">×</a> ' +
				'<i class="icon-hover-normal icon-hover-up"></i><div class="btn-whether-cancel"> ' +
				'<button class="yhdbk-button-01 sure-close">确定</button> ' +
				'<button class="yhdbk-button-03 ml cancle-close">取消</button></div></div>';
			$(this).append(str_b);
			whetherSure();
		}
		if(index!=len-1){$(this).find(".box-click").remove();
	}
	});
}
//添加新层级促销
function addNewLevel() {
	$(".add-new-level").click(function(){
		var len = $(this).parents(".bk-sales-con").find(".sub-tab-tit li").length;
		if(len>7) {alert("促销层级最多为8");return false;}
		$(this).parents(".bk-sales-con").find(".sub-tab-tit li").removeClass('cur');
		// var txt = '促销层级';
		var title = $(this).next('.sub-tab-tit').find('li').first().find('a').html();
		var txt = title.substring('0','4');
		console.log(txt);
		var str_tab = '<li class="clearfix cur"><a href="javascript:">' + txt + '<em>'+(len+1)+'</em></a></li>';
		$(this).parents(".bk-sales-con").find(".sub-tab-tit").append(str_tab);
		accountNum();
		$(".sub-tab-tit li").click(function(){
			$(this).addClass("cur").siblings().removeClass('cur');
		});
	});
}
//以下统一设置为该值
function uniformSetValue() {
	var total_set = $('.total-set');
	total_set.click(function(){
		var txt = $(this).prev('input').val(),
			col_num = ($(this).parent('td').index() + 1);
		$(this).parents("table").find("td:nth-child("+col_num+") input").val(txt);
	})
}

