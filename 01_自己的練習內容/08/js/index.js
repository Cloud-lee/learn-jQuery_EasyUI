$(function () {
	$('#box').progressbar({
		width : 400,
		height : 30,
		value : 5,
		text : '{value}%',//元件內的顯示文字內容
		onChange : function (newValue, oldValue) {//事件反映函數，當值被修改時觸發
			console.log('新:' + newValue + '舊:' + oldValue);
		},		
	});	
	/*
	setTimeout(function () {//建立執行一次的JS的TIMER
		$('#box').progressbar('setValue', 70);//呼叫progressbar的setValue方法元件值改成70，此時會出發元件的onChange
	}, 1000);
	*/
	setInterval(function () {//建立重複執行的JS的TIMER
		$('#box').progressbar('setValue', $('#box').progressbar('getValue') + 5);//呼叫progressbar的getValue方法抓取元件值，再利用setValue方法元件值+5，達到連續修改的動畫
	}, 500);
});
