//window.js
define(['jquery'],function($) {
	function Window() {
		this.cfg = {
			width:500,
			height: 300
		};
	}

	Window.prototype = {
		/**
		 *	@param content 显示内容
		 *	@param handler 回调函数
		 *	@param cfg 控制弹出框的样式
		 */
		alert: function(content, handler, cfg){
			var boundingBox = $('<div class="window_boundingBox"></div>');
			boundingBox.appendTo('body');
			boundingBox.html(content);
			var btn = $('<input type="button" value="确定">');
			btn.appendTo(boundingBox);
			btn.on('click', function(){
				handler && handler();//如果回调存在，就执行
				boundingBox.remove();
			});

			$.extend(this.cfg, cfg);// jQuery自带功能，值拼接，将第二个参数的值给第一个参数，如果没有就新增
			boundingBox.css({
				width: this.cfg.width + 'px',
				height:  this.cfg.height + 'px',
				left:(this.cfg.x || (window.innerWidth - this.cfg.width)/2) + 'px',
				top: (this.cfg.y || (window.innerHeight - this.cfg.height)/2) + 'px'
			});
		},
		confirm: function(){},
		prompt: function(){}
	}

	return {
		Window: Window
	}
});