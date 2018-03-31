/*
 * Depende de: https://jqueryui.com
 * Ref: https://jqueryui.com/dialog/#modal-confirmation
 */

var dialogConfirm = function () {

    let _elem = '';
    let _elemTrigger = '';
    let _elemDialogId = 'dialog-confirm';
    let _elemDialogClass = 'dialog-confirm-class';
    let _destUrl;
    let _msg;

    let _make = function (elem) {
        _elemTrigger = elem;
        _getMessage();
        _getDestUrl();
        _makeElem();
        _makeDialog();
    };
    
    let _getMessage = function () {
        _msg = jQuery(_elemTrigger).attr('data-dialog-confirm-msg');
    };
    
    let _getDestUrl = function () {
        _destUrl = jQuery(_elemTrigger).attr('data-dialog-confirm-url');
    };
    
    let _getElem = function () {
        if (_elem == '') {
            _elem = jQuery('#' + _elemDialogId);
        }
        return _elem;
    };

    let _makeDialog = function () {
        
        _getElem().dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                OK: function () {
                    jQuery(this).dialog("close");
                    _removeElem();
                    location = _destUrl;
                },
                Cancelar: function () {
                    jQuery(this).dialog("close");
                    _removeElem();
                }
            }
        });
    };

    let __start = function () {
        jQuery('.dialog-confirm').click(function () {
            _make(this);
        });
    };

    let _makeElem = function () {

        let elemDialog = document.createElement('div');
        elemDialog.id = _elemDialogId;
        elemDialog.title = 'Atenção!';
        elemDialog.style.display = 'none';
        elemDialog.className = _elemDialogClass;

        let dialogP = document.createElement('p');
        
        let dialogSpanIcon = document.createElement('span');
        dialogSpanIcon.className = 'ui-icon ui-icon-alert';
        dialogSpanIcon.style.float = 'left';
        dialogSpanIcon.style.margin = '12px 12px 20px 0';

        let dialogSpanMsg = document.createElement('span');
        dialogSpanMsg.innerHTML = _msg;
        dialogSpanMsg.style.float = 'left';
        dialogSpanMsg.style.margin = '12px 12px 20px 0';
        
        dialogP.appendChild(dialogSpanIcon);
        dialogP.appendChild(dialogSpanMsg);
        elemDialog.appendChild(dialogP);
        document.body.appendChild(elemDialog);
    };

    let _removeElem = function () {
        jQuery('.' + _elemDialogClass).remove();
    };

    return {
        start: __start
    };

}();

dialogConfirm.start();