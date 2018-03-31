var viewUser = function () {

    let _maskDate = function () {
        jQuery(".mask-date").mask('99-99-9999');
    };

    let _ready = function () {
        _maskDate();
    };

    return {
        ready: _ready
    };

}();

jQuery(document).ready(viewUser.ready);