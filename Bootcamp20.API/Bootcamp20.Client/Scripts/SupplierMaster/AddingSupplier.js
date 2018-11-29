$("#Save").click(function () {
    debugger;
    var supplier = new Object();
    supplier.name = $('#Name').val();
    $.ajax({
        url: 'http://localhost:22980/api/suppliers',
        type: 'POST',
        dataType: 'json',
        data: supplier
    });
});