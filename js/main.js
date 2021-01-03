window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    let calc = require('.parts/calc.js'),
        forms = require('.parts/forms.js'),
        slider = require('.parts/slider.js'),
        tabs = require('.parts/tabs.js'),
        timer = require('.parts/timer.js'),
        modal = require('.parts/modal.js');

        calc();
        forms();
        slider();
        tabs();
        timer();
});