$(document).ready(function () {
    $('#datatables').DataTables({
        "ajax": LoadIndexItem()
    });
    LoadIndexItem();
});

function LoadIndexItem() {
    $.ajax({
        type: "GET",
        url: 'http://localhost:22980/api/items/',
        async: false,
        dateType: "json",
        success: function (data) {
            var html = '';
            $.each(data, function (index, val) {
                html +='<tr>'+
                '<td>' + val.Name + '</td>'+
                '<td>' + val.Price + '</td>'+
                '<td>' + val.Stock + '</td>'+
                '<td>' + val.Supplier + '</td>'+
                '<td> <a href="#" onclick="return GetById(' + val.Id + ')">Edit</a>'+
                '| <a href="#" onclick="return Delete(' + val.Id + ')">Delete</a> </td>'+
                '</tr>';
            });
            $('.tbody').html(html);
        }
    });
}

function LoadIndexSearch() {
    $.ajax({
        type: "GETNAME",
        url: "http://localhost:22980/api/items/",
        dataType: "json",
        success: function (data) {
            var html = '';
            $.each(data, function (index, val) {
                html += '<tr>';
                html += '<td>' + val.Name + '</td>';
                html += '<td>' + val.Price + '<td>';
                html += '<td>' + val.Stock + '<td>';
                html += '<td>' + val.Supplier + '<td>';
                html += '<td> <a href="#" onclick="return GetById(' + val.Id + ')">Edit</a>';
                html += '| <a href="#" onclick="return Delete(' + val.Id + ')">Delete</a> </td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        }
    });
}

function Edit() {
    var item = new Object();
    item.id = $('#Id').val();
    item.name = $('#Name').val();
    item.price = $('#Price').val();
    item.stock = $('#Stock').val();
    item.supplier = $('#Supplier').val();
    $.ajax({
        url: "http://localhost:22980/api/items/" + $('#Id').val(),
        data: item,
        type: "PUT",
        dataType: "json",
        success: function (result) {
            LoadIndexItem();
            $('#myModal').modal('hide');
            $('#Name').val('');
            $('#Price').val('');
            $('#Stock').val('');
            $('#Supplier').val('');
        }
    });
};



function GetById(Id) {
    $.ajax({
        url: "http://localhost:22980/api/items/" + Id,
        type: "GET",
        dataType: "json",
        success: function (result) {
            $('#Id').val(result.Id);
            $('#Name').val(result.Name);
            $('#Price').val(result.Price);
            $('#Stock').val(result.Stock);
            $('#Supplier').val(result.Supplier);
            $('#myModal').modal('show');
            $('#Update').show();
            $('#Save').hide();
        }
    })
}

function Save() {
    var item = new Object();
    item.name = $('#Name').val();
    item.price = $('#Price').val();
    item.stock = $('#Stock').val();
    item.supplier = $('#Supplier').val();
    $.ajax({
        url: 'http://localhost:22980/api/items/',
        type: 'POST',
        dataType: 'json',
        data: item,
        success: function (result) {
            LoadIndexItem();
            $('#myModal').modal('hide');
        }
    });
};

function supplieritem() {
    $.ajax({
        url: 'http://localhost:22980/api/suppliers/',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            alert('error');
            var html = '';
            html += '<select name ="comboboxsuppliers" id="comboboxsuppliers" class="form-control">';

            for (i = 0; i < data.length; i++) {
                html += '<option value="' + data[i].Id + '">' + data[i].Name + '</option>';
            }
            html += '</select>';
            $('#supplier').html(html);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Coba Lagi!');
        }
    });
    alert('udah disini');
    $('#Name').val('');
    $('#Id').val('');
    $('#Update').hide();
    $('#Show').show();
}



function Delete(Id) {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function () {
        $.ajax({
            url: "http://localhost:22980/api/items/" + Id,
            type: "DELETE",
            success: function (response) {
                swal({
                    title: "Deleted!",
                    text: "That data has been soft delete!",
                    type: "success"
                },
                function () {
                    window.location.href = '/Items/Index/';
                });
            },
            error: function (response) {
                swal("Oops", "We couldn't connect to the server!", "error");
            }
        });
    });
}