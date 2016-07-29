var vouchers = {
    initFun:function(){
        this.treeSet2();
        this.type();
        this.check_all();
    },

    treeSet2:function(){
        var zNodes_gl1 = [
            {name:"全部",
                children:[
                    {
                        name: "杭州区域",
                        children: [{
                            name: "111"
                        },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            },
                            {
                                name: "111"
                            },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            },
                            {
                                name: "111"
                            },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            }]
                    },
                    {
                        name: "上海区域",
                        children: [{
                            name: "111"
                        },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            },
                            {
                                name: "111"
                            },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            },
                            {
                                name: "111"
                            },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            }]
                    },
                    {
                        name: "北京区域",
                        children: [{
                            name: "111"
                        },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            },
                            {
                                name: "111"
                            },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            },
                            {
                                name: "111"
                            },
                            {
                                name: "222"
                            },
                            {
                                name: "333"
                            },
                            {
                                name: "444"
                            },
                            {
                                name: "555"
                            }]
                    }
                ]}

        ];
        initTree($("#treeinit2"), $("#zone_tree2"), $("#zone_tree_result2"), zNodes_gl1);
        initTree($("#treeinit3"), $("#zone_tree3"), $("#zone_tree_result3"), zNodes_gl1);
        function CheckAllNodes() {
            var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
            treeObj.checkAllNodes(true);
        }
        $(document).ready(function(){
            $("#treeDemo_1").click(CheckAllNodes);
        });



    },


    type:function(){
        $(".sam_store").click(function(){
            $(".otoo").attr("disabled",true);
        });

        $(".one_store").click(function(){
            $(".otoo").attr("disabled",false);
        })
    },


    check_all:function(){
        $(".check_all").click(function(){
            $("#zone_tree3_1_check").click();
        });
        $("#zone_tree3").on("click", ".chk", function(){
            var that = $(this);
            if(!that.hasClass("checkbox_false_full_focus")){
                $(".auto_define").click();
            }
        });
    }



};
vouchers.initFun();