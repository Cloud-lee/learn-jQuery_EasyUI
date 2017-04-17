$(function () {
	$('#box02').dialog();//非智能加載，傳統方法
	
	/*
	//智能加載的寫法-鬼才要用（酸然可以省傳輸量，但是法法比較複雜）
	easyloader.load('dialog', function () {
		$('#box').dialog();
	});
	*/
	
	//$.parser.parse();
	//$.parser.parse('#box');
	
});

$.parser.auto = false;
$.parser.onComplete = function () {
	alert('UI解析完毕！');
};