window.emojiPickerHelper = (function($, window, document) {
	var $emojiContainer,
		$emojiContainerLabel,
		$editor,
		$parentForm,
		WYSIWYGClass = 'emoji-wysiwyg-editor',
		options = {
			generalErrorClass: 'error',
			requiredErrorClass: 'error-required',
			generalSuccessClass: 'validate-success'
		};

	var validateField = function (e) {
		var content = $editor.text();

		if (e.type === 'focus') {
			$emojiContainerLabel.removeClass(options.generalErrorClass + ' ' + options.requiredErrorClass);
		}

		// By the moment, only a 'required' validation is implemented
		if (!content) {
		  $editor.add($emojiContainerLabel).addClass(options.generalErrorClass + ' ' + options.requiredErrorClass)
		  	.removeClass(options.generalSuccessClass);

		  if (e) {
		  	if (e.type === 'submit') {
		  		$parentForm.addClass(options.requiredErrorClass);
		  		return false;
		  	}

		  	return true;
		  }
		}

		clearValidation();
		$editor.add($emojiContainerLabel).addClass(options.generalSuccessClass);
	};

	var clearValidation = function () {
	    $editor.add($emojiContainerLabel).add($parentForm)
	    	.removeClass(options.generalErrorClass + ' ' + options.requiredErrorClass + ' ' + options.generalSuccessClass);
	};

	var init = function (options) {
		window.emojiPicker = new EmojiPicker(options);
		$emojiContainer = window.emojiPicker.discover();
		$emojiContainer.parent().addClass(WYSIWYGClass + '-wrapper');

		$editor = $emojiContainer.siblings('.' + WYSIWYGClass).first();

		$parentForm = $($emojiContainer).parents('form');
		$emojiContainerLabel = $parentForm.find('[for=' + $emojiContainer.attr('name') + ']');

		initEvents();
	};

	var initEvents = function () {
	    if ($emojiContainer.attr('required')) {
			$emojiContainer.removeAttr('required');

			$emojiContainer.siblings('.emoji-picker').on('click', validateField);
			$parentForm.on('submit', validateField);
		    $editor.on('mousedown mouseup focus change keyup', validateField);
		}
	};

	return {
		init: init
	}
})(jQuery, window, document);
