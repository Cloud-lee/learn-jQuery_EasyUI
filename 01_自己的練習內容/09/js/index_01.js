$(function () {

	$('#box').panel({
		title : '面板(panel)',
		width : 600,//設置大小
		height : 2000,
		iconCls : 'icon-search',//設定標提列ICON
		left : 10,//設定元件定位點，但是須配合CSS把定位方式調成絕對位置 $('#box').panel('panel').css('position', 'absolute');
		top : 10,
		cls : 'a',//加入額為的DIV 方面事後操作使用
		headerCls : 'b',
		bodyCls : 'c',	
		tools : '#tt',//引用自訂TOOL Bar
	});
	
	
	$('#box').panel('panel').css('position', 'absolute');
	
	
});
