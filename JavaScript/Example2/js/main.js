// Per availability of native implementations, load required widget assets.
yepnope({
    test: Modernizr.inputtypes && Modernizr.inputtypes.date,
    nope: {
        'js': 'js/vendor/jquery-ui-1.10.4.custom.js',
        'css': 'css/vendor/jquery-ui-1.10.4.custom.min.css'
    },
    callback: { // executed once files are loaded
        'js': function() { // define the jquery min and max dates
            $('input[type=date]').datepicker({
                minDate: 0,
                maxDate: '+1Y',
                gotoCurrent: true
            });
        }
    },
    complete: function() { // define the HTML5 min and max dates
        var maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate = $.datepicker.formatDate('yy-mm-dd', maxDate);
        var minDate = $.datepicker.formatDate('yy-mm-dd', new Date());
        $('input[type=date]').attr('min', minDate).attr('max', maxDate);
    }
});