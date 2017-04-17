$(function () {

	$.fn.linkbutton.defaults.iconCls = 'icon-add';//利用預設屬性載入基本ICON

	$('#box').linkbutton({
		//修改ID
		//id : 'pox',
		//禁止使用
		//disabled : true,
		//具有複選功能
		//toggle : true,
		//目前為按下
		//selected : true,
		//group : 'sex',
		//plain : true,
		text : '文字',
		//載入基本ICON
		//iconCls : 'icon-add',
		//iconAlign : 'right',
	});
	
	
	
	$('#pox').linkbutton({
		//id : 'pox',
		//disabled : true,
		//toggle : true,
		//group : 'sex',
		//iconCls : 'icon-mini-add',
	});
	
	
	//console.log($('#box').linkbutton('options'));
	
	//$('#box').linkbutton('disable');
	//$('#box').linkbutton('enable');
	
	
	$('#box').linkbutton('select');
	$('#box').linkbutton('unselect');
	
	
	
	
});
