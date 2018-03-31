var headerAlert = function () {

    let _elem;
    const _elemIdSuccess = "top-alert-success";
    const _elemIdError = "top-alert-error";
    const _elemHideTime = 10;

    let _start = function () {
        _animate(_getElemSuccess());
        _animate(_getElemError());
        _startObserver();
    };

    let _animate = function (elem) {

        _elem = elem;

        if (_skipNow() === false) {
            _elemShow();
            //_hideAfter(3);
        }
    };

    let _skipNow = function () {
        return _elem.innerHTML == '' ? true : false;
    };

    let _hideAfter = function (seconds = 0) {

        if (seconds === 0) {
            seconds = _elemHideTime;
        }

        setTimeout(function () {
            headerAlert.hideAll();            
        }, seconds * 1000);
    };

    let _elemShow = function () {
        _elem.style.display = 'block';
    };

    let _startObserver = function () {
        document.getElementById(_elemIdSuccess).addEventListener("DOMSubtreeModified", function (event) {
            _animate(event.target);
        });

        document.getElementById(_elemIdError).addEventListener("DOMSubtreeModified", function (event) {
            _animate(event.target);
        });
    };

    let _hideAll = function () {
        _hideElem(_getElemSuccess());
        _hideElem(_getElemError());
    };

    let _hideElem = function (elem) {
        elem.style.display = 'none';
        elem.innerHTML = '';
    };

    let _getElemSuccess = function () {
        return document.getElementById(_elemIdSuccess);
    };

    let _getElemError = function () {
        return document.getElementById(_elemIdError);
    };

    return {
//        startObserver: _startObserver,
        hideAll: _hideAll,
        start: _start
    };

}();

headerAlert.start();


function headerAlertTestOk() {

    document.getElementById('top-alert-success').innerHTML = "oi";
}
;

function headerAlertTestErr() {

    document.getElementById('top-alert-error').innerHTML = "oi";
}
;