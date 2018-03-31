var citySelect = function () {

    const _inputClassName = "city-select";
    let _searchValue;
    let _elem;

    let _search = function (elem) {
        _elem = elem;
        _searchValue = jQuery(_elem).val();
        _requestSearchToServer();
    };

    let _requestSearchToServer = function () {
        ajaxService.setRoute('city', 'getJson')
                .sendPostRetJson({'search': _searchValue}, _requestSearchToCallBack);
    };

    let _requestSearchToCallBack = function (cityes) {
        selectLoko.clearItens();
        for (let i = 0; i < cityes.length; i++) {
            let cityName = cityes[i].city_name;
            cityName += ' - ' + cityes[i].state_alias;
            let cityId = cityes[i].city_id;
            selectLoko.addItem(cityId, cityName);            
        }
        selectLoko.setClickCallback(_citySelected);
        selectLoko.makeList(_elem);
    };

    let _citySelected = function (elemSel) {
        console.log(elemSel);
        _elem.value = elemSel.innerHTML;
        jQuery("#city-id").val(elemSel.getAttribute('data-value'));
    };

    let _addListeners = function () {
        jQuery('.' + _inputClassName).keyup(function () {
            _search(this);
        });
    };

    let _ready = function () {
        _addListeners();
    };

    return {
        ready: _ready
    };
}();

jQuery(document).ready(function () {
    citySelect.ready();
});