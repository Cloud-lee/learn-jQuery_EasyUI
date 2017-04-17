$(function () {//啟動自動執行的無名函數
	
	//修改元件預設屬性
	//$.fn.draggable.defaults.cursor = 'text';


	$('#box').draggable({
		//屬性區塊
		//设置为true，则拖动停止时返回起始位置
		//revert : true,
		//拖动时的CSS 指针样式
		//cursor : 'text',
		//开始拖动的句柄(可被拖動的點)
		//handle : '#pox',
		//disabled : true,
		//edge : 180,
		//axis : 'v',
		//proxy : 'clone',
		//deltaX : 50,
		//deltaY : 50,
		//proxy : function (source) {
		//	var p = $('<div style="width:400px;height:200px;border:1px dashed #ccc">');
		//	p.html($(source).html()).appendTo('body');
		//	return p;
		//}
		
		//事件函數
		//onBeforeDrag : function (e) {
		//	alert('拖动前触发！');
		//},
		//onBeforeDrag : function (e) {
		//	return false;
		//},
		//onStartDrag : function (e) {
		//	//alert('拖动开始触发！');
		//	console.log($('#box').draggable('proxy'));
		//},
		//onDrag : function (e) {
		//	alert('拖动过程触发！');
		//},
		//onStopDrag : function (e) {
		//	alert('拖动结束后触发！');
		//},
		
		
		
	});
	
	//方法
	//$('#box').draggable('disable');
	
	//$('#box').draggable('enable');
	
	
	//console.log($('#box').draggable('options'));
	
	
});
