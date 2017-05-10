$(function () {

	$('#box').panel({
		title : '面板(panel)',
		width : 800,//設置大小
		height : 2000,
		iconCls : 'icon-search',//設定標提列ICON
		left : 10,//設定元件定位點，但是須配合CSS把定位方式調成絕對位置 $('#box').panel('panel').css('position', 'absolute');
		top : 10,
		cls : 'a',//加入額為的DIV 方面事後操作使用
		headerCls : 'b',
		bodyCls : 'c',	
		tools : '#tt',//引用自訂TOOL Bar
		//panel有用事件函數
		onBeforeLoad : function () {
			alert('远程加载之前触发！');
			return false;					//取消远程加载
		},
		onLoad : function () {
			alert('远程加载之后触发！');
		},
		
		onBeforeOpen : function () {
			alert('打开之前触发！');
			return false;					//取消打开
		},
		onOpen : function () {
			alert('打开之后触发！');
		},
		
		onBeforeClose : function () {
			alert('关闭之前触发！');
			return false;					//取消关闭
		},
		onClose : function () {
			alert('关闭之后触发！');
		},
		
		onBeforeDestroy : function () {
			alert('销毁之前触发！');
			//return false;					//取消销毁
		},
		onDestroy : function () {
			alert('销毁之后触发！');
		},
		
		onBeforeCollapse : function () {
			alert('折叠之前触发！');
			//return false;					//取消折叠
		},
		onCollapse : function () {
			alert('折叠之后触发！');
		},
		
		onBeforeExpand : function () {
			alert('展开之前触发！');
			//return false;					//取消展开
		},
		onExpand : function () {
			alert('展开之后触发！');
		},
		
		onMaximize : function () {
			alert('窗口最大化时触发！');
		},
		onRestore : function () {
			alert('窗口还原时触发！');
		},
		
		onMinimize : function () {
			alert('窗口最小化时触发！');
		},
		
		onResize : function (width, height) {
			alert(width + '|' + height);
		},
		
		onMove : function (left, top) {
			alert(left + '|' + top);
		},		
	});
	
	
	$('#box').panel('panel').css('position', 'absolute');
	
	
});
