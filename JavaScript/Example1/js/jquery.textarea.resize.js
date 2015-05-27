/**
 *  Auto-resize a given textarea.
 *
 *  Adding additional 'rows', to a text area, once the current
 *  row length is exceeded. Limits are optional, and can
 *  be set to limit the min and max height of the textarea.
 *
 * Depends:
 *  jquery-1.x.js
 *
 * @example $('textarea').textareaResize();
 * @result  limits set to default config of 0 and 999
 *
 * @example $('textarea').textareaResize({minHeight:16, maxHeight:140});
 * @result  limits set to default user specifications of 16 and 140
 */

(function($) {

    /**
     * Method for auto-resizing a given textarea(s).
     *
     * @param options
     */
    $.fn.textareaResize = function(options) {

        // Set defaults.
        var settings = $.extend({
            minHeight: 0,
            maxHeight: 999
        }, options);

        // Initialization.
        $(this).each(function() {

            // Plugin (element) validation.
            if (!$(this).is('textarea')) return;

            // Bind and update the element.
            $(this).bind('focus keyup', resize);
            $(this).css('padding-bottom', '0px').css('padding-top', '0px');

            resize(this);
        });

        // Monitor textarea changes and resize as needed.
        function resize(e) {

            var ele = e.target || e; // specify the target, in multiple browsers
            var inLength = ele.value.length; // incoming content length
            var inWidth = ele.offsetWidth; // incoming container width (account for scrollbars)

            // Verify that we have a change in size.
            if (inLength != ele.outLength || inWidth != ele.outWidth) {

                if (!e.target) ele.style.height = '0px'; // proper sizing on initialization

                var height = Math.max(settings.minHeight, Math.min(ele.scrollHeight, settings.maxHeight)); // determine our height

                ele.style.overflow = (ele.scrollHeight > height ? 'auto' : 'hidden'); // enable/disable scrollbars
                ele.style.height = height + 'px'; // set our height

                // Set our outgoing values
                ele.outLength = inLength;
                ele.outWidth = inWidth;
            }

        }

    };

})(jQuery);