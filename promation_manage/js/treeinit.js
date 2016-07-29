function initTree(tree_wrap, tree_source, tree_result, tree_data) {
    //初始化树配置
    var setting = {
        view: {
            showIcon: false,
            showLine: false,
            autoCancelSelected: false
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: false
            }
        },
        callback: {
            beforeClick: beforeClick,
            onClick: onClick,
            onCheck: onClick
        }
    };

    var setting2 = {
        view: {
            showIcon: false,
            showLine: false,
            autoCancelSelected: false
        },
        check: {
            enable: true
        },
        callback: {
            beforeClick: beforeClick,
            onClick: onClick2,
            onCheck: onClick2
         }   
    };

//加载自定义的区域树
    var treeObj_gl = $.fn.zTree.init(tree_source, setting, tree_data);
    var treeObj_result = $.fn.zTree.init(tree_result, setting2,[]);

    count();

    function beforeClick(treeId, treeNode) {
        var obj = $.fn.zTree.getZTreeObj(treeId);
        obj.checkNode(treeNode, !treeNode.checked, true, true);
    }

    function onClick(treeId, treeNodes, targetNode, moveType) {
        var cnodes = treeObj_gl.getCheckedNodes(true);
        treeObj_result.destroy();
        treeObj_result = $.fn.zTree.init(tree_result, setting2,[]);
        for (var i = 0; i < cnodes.length; i++) {
            cnodes[i].xxxxx = cnodes[i].tId;
            if (cnodes[i].isParent && cnodes[i].level == 0) {
                treeObj_result.addNodes(null, cnodes[i]);
                var needremove = treeObj_result.getCheckedNodes(false);
                for (var j = 0; j < needremove.length; j++) {
                    treeObj_result.removeNode(needremove[j]);
                }
            }
        }
        count();
    }
    function onClick2(treeId, treeNodes, targetNode, moveType) {
        var cnodes = treeObj_result.getCheckedNodes(false);
        for (var i = 0; i < cnodes.length; i++) {
            var leftTree = treeObj_gl.getNodeByParam("tId", cnodes[i].xxxxx, null);
            treeObj_gl.checkNode(leftTree, false, true, false);
            treeObj_result.removeNode(cnodes[i]);
        }
        count();
    }

    function count() {
        var checkCount = treeObj_gl.getCheckedNodes(true).length,
            nocheckCount = treeObj_gl.getCheckedNodes(false).length;
        tree_wrap.find('.checkCount').text(checkCount);
        tree_wrap.find('.nocheckCount').text(nocheckCount);

    }

    tree_wrap.find('.checkAll').bind('change', function () {
        if ($(this).attr('checked')) {
            treeObj_gl.checkAllNodes(true);
        } else {
            treeObj_gl.checkAllNodes(false);
        }
        onClick();
    });

    tree_wrap.find('.clearAll').bind('click', function () {
        treeObj_result.destroy();
        treeObj_result = $.fn.zTree.init(tree_result, setting2,[]);
        treeObj_gl.checkAllNodes(false);
        tree_wrap.find('.checkAll').attr('checked', false);
        onClick();
    });
}