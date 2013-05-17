(function($){
	$.fn.cal = function(options) {
		
		var that = this;
		var settings = $.extend({
			'link_class'       : 'cal-link',
			'link_class_marked': 'cal-link-marked'
		}, options);
		
		var draw = function() {
			that.each(function(){
				prepareATag($(this));
			});
		};
		
		var prepareATag = function(input) {
			var anchor = $('<a href="#"></a>');
			$(anchor).data('id', input.attr('id')).addClass(settings.link_class);
			var anchorText = input.parents('label').text();
			anchor.html(anchorText);
			
			anchor.on('click', function(e){
				e.preventDefault();
				if(input.is(':checked')) {
					input.removeAttr('checked');
					$(anchor).removeClass(settings.link_class_marked ).addClass(settings.link_class);
				} else {
					input.attr('checked', 'checked');
					$(anchor).addClass(settings.link_class_marked ).removeClass(settings.link_class);
				}
			});
			$(anchor).insertAfter(input.parents('label'));
			input.parents('label').css('position', 'absolute').css('left', '-10000px');
		}
		
		return draw();
	}
})(jQuery)
