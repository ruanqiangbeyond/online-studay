//window.js
define(['jquery'],function($) {
	function Window() {
		this.cfg = {
			width:500,
			height: 300,
			content: '',
			handler: null,
			title: '系统消息'
		};
	}

	Window.prototype = {
		/**
		 *	@param content 显示内容
		 *	@param handler 回调函数
		 *	@param cfg 控制弹出框的样式
		 */
		alert: function(cfg){
			// jQuery自带功能，值拼接，将第二个参数的值给第一个参数，如果没有就新增
			var CFG = $.extend(this.cfg, cfg);
			
			var boundingBox = $(
				'<div class="window_boundingBox">'+
					'<div class="window_header">'+CFG.title+'</div>'+
					'<div class="window_content">'+CFG.content+'</div>'+
					'<div class="window_footer">'+
						'<input type="button" value="确定">'+
					'</div>'+
				'</div>');
			boundingBox.appendTo('body');

			var btn = boundingBox.find('.window_footer input');
			btn.on('click', function(){
				CFG.handler && CFG.handler();//如果回调存在，就执行
				boundingBox.remove();
			});

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