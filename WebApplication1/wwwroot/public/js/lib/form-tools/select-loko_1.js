var selectLoko = function () {

    let _elem;
    let _itens = [];

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
        //_elem.setAttribute('readonly', '');

        _elem.setAttribute('list', 'select-loko-data-list');
        _elem.style.color = "red";

        let dataList = _getDataList();

        for (let i = 0; i < _itens.length; i++) {
            let item = _itens[i];
            let option = document.createElement('option');
            option.innerHTML = item.name;
            option.value = item.value;
            dataList.appendChild(option);
        }

        _itens = [];
        //_elem.removeAttribute('readonly');
    };

//    let _makeListItem = function (item) {
//        console.log('V: ' + item.value + ' N: ' + item.name);
//    };

    let _getDataList = function () {
        let dataList = document.getElementById('select-loko-data-list');
        if (!dataList) {
            dataList = document.createElement('datalist');
            dataList.id = 'select-loko-data-list';
            document.body.appendChild(dataList);
        }
        return dataList;
    };

    return {
        addItem: _addItem,
        makeList: _makeList,
        clearItens: _clearItens
    };

}();