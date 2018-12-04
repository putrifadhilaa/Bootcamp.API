$(document).ready(function () {
    $('#datatables').DataTable({
        "ajax":LoadIndexItem()
    });
    LoadIndexItem();
});

function LoadIndexItem() {
	var item = new Object($('#search').val());
    $.ajax({
        type: "GET",
        url: 'http://localhost:22980/api/items/?name=' + item,
        dateType: "json",
        success: function (data) {
            var html = '';
            $.each(data, function (index, val) {
                html += '<tr>';
                html += '<td>' + val.Name + '<td>';
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

function LoadIndexSearch() {
    $.ajax({
        type: "GETNAME",
        url: "http://localhost:22980/api/items/",
		async: false,
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