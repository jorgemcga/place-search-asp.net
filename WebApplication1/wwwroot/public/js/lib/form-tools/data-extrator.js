var formDataExtrator = function () {
    
    let _formId;
    
    let _setFormId = function (formId) {
        _formId = formId;
        return this;
    };

    let _getInputsToObject = function () {
        let itens = jQuery("#" + _formId).serializeArray();
        const c = itens.length;
        let dataReturn = "{";
        for (let i = 0; i < c; i++) {
            dataReturn += '"' + itens[i].name + '":"' + itens[i].value + '"';
            dataReturn += i < c - 1 ? "," : "";
        }
        dataReturn += "}";

        let dataFinal = JSON.parse(dataReturn);

        alert(dataReturn);

        return dataFinal;
    };

    return {
        setFormId: _setFormId,
        getInputsToObject: _getInputsToObject
    };
}();