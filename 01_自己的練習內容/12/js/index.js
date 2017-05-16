$(function () {

	$('#box').tabs({
	
	});

	
//*
	$('#box').tabs('add', {
		id : 'bbb',
		title : '新选项卡',
		content : '新面板',
		href : 'content.html',
		iconCls : 'icon-add',
		width : 100,
		height : 100,
		collapsible : true,
		closable : true,
		selected : false,
	});
//*/
	
	//$('#box').tabs('close', 1);
	//console.log($('#box').tabs('getTab', 1));
	//console.log($('#box').tabs('getTabIndex', $('#tab2')));
	//console.log($('#box').tabs('getSelected'));
	//$('#box').tabs('select', 1);
	//$('#box').tabs('unselect', 0);
	//$('#box').tabs('hideHeader');
	//$('#box').tabs('showHeader');
	//console.log($('#box').tabs('exists', 1));
	
	$(document).click(function () {
		$('#box').tabs('update', {
			tab : $('#tab2'),
			options : {
				title : '修改标题',
			},
		});
	});
	
	
	
	//$('#box').tabs('disableTab', 1);
	//$('#box').tabs('enableTab', 1);
	
	//$('#box').tabs('scrollBy', 100);
});



	









