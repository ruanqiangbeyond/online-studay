//重新建立映射关系，将jquery的模块名和文件名配置成键值对关系，
//简化我们后面用，
//可以不建立这种关系的，那么就要带很长的文件名，很不方便
require.config({
	paths: {
		jquery:'jqyery2.1.4'
	}
});

require(['jquery','window'], function($,w){
	$('#alert').click(function() {
		new w.Window().alert({
			width:300,
			height:100,
			x: 400,
			content: 'welcome!',
			title: '提示',
			handler: function() {
				alert('you click alert!');
			}
		});
	});
});