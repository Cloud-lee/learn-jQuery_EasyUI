$(function () {

	$.fn.droppable.defaults.disabled = true;//停用所有預設放置功能

	$('#dd').droppable({
		accept : '#box',
		disabled : false,//啟用該dd元件放置功能 用來單獨開啟功能
		onDragEnter : function (e, source) {
			//console.log(source);
			$(this).css('background', 'blue');
			//alert('enter');
		},
		onDragOver : function (e, source) {
			//console.log(source);
			$(this).css('background', 'orange');
			//alert('over');
		},
		onDragLeave : function (e, source) {
			//console.log(source);
			$(this).css('background', 'green');
			//alert('over');
		},
		onDrop : function (e, source) {
			//console.log(source);
			$(this).css('background', 'maroon');
			//alert('over');
		},
		//onDragEnter只触发一次，而Over会在不停的拖动中不停触发
		//onDrop是放入到放置区，松开鼠标左键，丢下的操作
	});
	
	//console.log($('#dd').droppable('options'));//印出所有屬性 方法
	
	//$('#dd').droppable('disable');//停用放置功能 方法
	//$('#dd').droppable('enable');//啟用放置功能 方法


	$('#box').draggable({//拖動元件

	});
	
});
