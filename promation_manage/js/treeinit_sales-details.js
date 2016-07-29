function initTree(tree_wrap, tree_source, tree_result, tree_data) {
    //初始化树配置
    var setting = {
        view: {
            showIcon: false,
            showLine: false,
            autoCancelSelected: false
        },
        check: {
            enable: false
        },
        data: {
            simpleData: {
                enable: false
            }
        },
    };

//加载自定义的区域树
    var treeObj_gl = $.fn.zTree.init(tree_source, setting, tree_data);
}