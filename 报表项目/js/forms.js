/*
 *Description :  Sam报表;
 *Author : Yao Yue;
 *Date : 2016/05/05;
 **/
var forms = {
    initFun:function(){
        this.tableWidthFun();
        this.blockFun();
        this.indicatrixFun();
    },
    tableWidthFun:function(){
        var _firsttr = $(".table_cont table tr:first"),
            _len = _firsttr.children().length,
            _total= 0,_thWidth=0;
        for(var i=0;i<_len;i++){
            _thWidth = _firsttr.find("th").eq(i).attr("width");
            _total +=parseInt(_thWidth);
        }
        $(".table_cont table").attr("width",_total)
    },


    blockFun:function(){
        $(".block_box").hover(function(){
            $(".block_box").find(".select_cont").show()
        },function(){
            $(".block_box").find(".select_cont").hide()
        });

        $(".block_box .yes_btn").click(function(){
            var totaltxt='';
            var txt ='';
            var check =  $(".block_box .select_item input:checked");
            var $len = check.length;
            for(var i=0;i<$len;i++){
                txt =  check.eq(i).next().text()+"、";
                totaltxt +=txt
            }
            $(".block_box .input_icon").val(totaltxt);
            $(".block_box").find(".select_cont").hide()
        });

        $(".block_box .no_btn").click(function(){
            $(".block_box .select_item input:checked").attr("checked",false);
        })

    },


    indicatrixFun:function(){
        $(".indicatrix").hover(function(){
            $(".indicatrix").find(".select_cont").show()
        },function(){
            $(".indicatrix").find(".select_cont").hide()
        });

        $(".indicatrix .yes_btn").click(function(){
            var totaltxt='';
            var txt ='';
            var check =  $(".indicatrix .select_item input:checked");
            var $len = check.length;
            for(var i=0;i<$len;i++){
                txt =  check.eq(i).next().text()+"、";
                totaltxt +=txt
            }
            $(".indicatrix .input_icon").val(totaltxt);
            $(".indicatrix").find(".select_cont").hide()
        });

        $(".indicatrix .no_btn").click(function(){
            $(".indicatrix .select_item input:checked").attr("checked",false);
        })

    }




};
forms.initFun();