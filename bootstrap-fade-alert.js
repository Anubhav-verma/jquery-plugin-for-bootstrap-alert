

/*Jquery plugin for showing bootstrap alert*/


(function ($) {
    'use strict';

    $.fn.bootstrapAlert = function (options) {

        var parameters = $.extend({
            type: 'info',
            dismissible: true,
            dismissibleTiming: 2000,
            heading: '',
            message: '',
            clear: true
        }, options);

        if (parameters.message.length === 0) {
            console.log('Message can not be empty!!');
            return false;
        }

        var div = $('<div class="alert alert-' + parameters.type + '"  role="alert">');

        if (parameters.dismissible) {
            $(div).addClass('alert-dismissible');
            $(div).addClass('fade show');
            var closeButton = $('<button style="float:right" type="button" class="close" data-dismiss="alert" aria-label="Close">');
            var span = $('<span aria-hidden="true">').html('&times;');
            $(span).appendTo(closeButton);
            $(closeButton).appendTo(div);
            $("#alert-container").fadeOut(parameters.dismissibleTiming);
          
        }

        if (parameters.heading.length > 0) {
            var heading = $('<strong>').html(parameters.heading).append("!! ");
            $(heading).appendTo(div);
        }

        $(div).append(parameters.message);

        if (parameters.clear) {
            $(this).empty();
        }

        $(div).appendTo(this);

        return this;
    };
})(jQuery);
