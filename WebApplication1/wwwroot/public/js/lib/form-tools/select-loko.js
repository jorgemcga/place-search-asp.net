var selectLoko = function () {

    let _elem;
    let _itens = [];
    let _dataList = null;
    let _clickCallback = null;

    let _setClickCallback = function (clickCallback) {
        _clickCallback = clickCallback;
        return this;
    };

    let _addItem = function (value, name) {
        let item = {
            value: value,
            name: name
        };
        _itens.push(item);
    };

    let _clearItens = function () {
        _itens = [];
        return this;
    };

    let _makeList = function (elem) {
        _elem = elem;
        _getDataList();

        for (let i = 0; i < _itens.length; i++) {
            let item = _itens[i];
            let div = document.createElement('div');
            div.innerHTML = item.name;
            div.setAttribute('data-value', item.value);

            if (_clickCallback) {
                div.addEventListener('click', function () {
                    // _removeDataList();
                    _clickCallback(this);
                });
            }

            _dataList.appendChild(div);
        }

        _itens = [];
        //_elem.removeAttribute('readonly');
    };

    let _setDataListPosition = function () {
        let top = _elem.offsetTop + _elem.clientHeight;
        let left = _elem.offsetLeft;
        _dataList.style.top = top + 'px';
        _dataList.style.left = left + 'px';
    };

    let _getDataList = function () {

//        let elemAttrib = _elem.getAttribute('data-list-id');
//
//        if (elemAttrib) {
//            _dataList = document.getElementById(elemAttrib);
//            _dataList.innerHTML = '';
//            return _dataList;
//        }

        if (_dataList === null) {
            _dataList = document.createElement('div');
            _dataList.id = 'select-loko-data-list';

            let dataListContainer = _elem.getAttribute('data-list-id');
            if (dataListContainer) {
                document.getElementById(dataListContainer).appendChild(_dataList);
            } else {
                document.body.appendChild(_dataList);
            }
        }
        _dataList.innerHTML = '';
        _setDataListPosition();
        return _dataList;
    };

    let _removeDataList = function () {
        _dataList.innerHTML = '';
        //document.body.removeChild(_dataList);
        //jQuery(_dataList).remove();
        _dataList = null;
    };

    let _addListeners = function () {
        document.addEventListener('click', function () {
            _removeDataList();
        });
    };

    let _ready = function () {
        _addListeners();
    };

    return {
        addItem: _addItem,
        makeList: _makeList,
        clearItens: _clearItens,
        setClickCallback: _setClickCallback,
        ready: _ready
    };

}();

document.addEventListener('DOMContentLoaded', function () {
    selectLoko.ready();
});