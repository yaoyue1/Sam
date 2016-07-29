/*
 *@Description: 现在拼团活动js
 *@Author: zhangqian7
 *@Update: zhangqian7(2015-12-24)
 */
var salesPromotion={
    /*下拉框*/
    clickList:function(){
        $('.sgq-cont-pull .text').click(function(e){  //点击出现下拉框
            $('.scp-select').hide();
            e.stopPropagation();
            $(this).siblings('.scp-select').show().find('a').unbind('click').click(function(){ //移除重复绑定
                var _value = $(this).text();
                e.stopPropagation();
                $(this).addClass('cur').siblings('a').removeClass('cur');
                $(this).parents('.scp-select').siblings('.text').val(_value);
                $(this).parents('.sgq-cont-pull').find('input').val("").val(_value);
                $(this).parents('.scp-select').hide();
            });
        });
        $(document).click(function(){ $('.scp-select').hide()});
    },
    /*input点击*/
    clickInput:function(){
        $('.scm-btn').click(function(){
            $(this).parents('.stn-cont').find('input').removeAttr('disabled');
            $(this).parents('.stn-cont').find('.scm-grey').removeClass('scm-grey');
        })
    },



        init:function(){
        this.clickList();
        this.clickInput();
    }
};
salesPromotion.init();
