$(document).ready(function () {
<<<<<<< HEAD
    $('#datatables').DataTables({
        "ajax": LoadIndexSupplier()
=======
    $('#datatables').DataTable({
        "ajax":LoadIndexSupplier()
>>>>>>> feee5ec2ad927d1ebe657db19a4ce771a7577cfe
    });
    LoadIndexSupplier();
});

function LoadIndexSupplier() {
    $.ajax({
        type: "GET",
        url: 'http://localhost:22980/api/suppliers/',
<<<<<<< HEAD
        async: false,
=======
		async: false,
>>>>>>> feee5ec2ad927d1ebe657db19a4ce771a7577cfe
        dateType: "json",
        success: function (data) {
            var html = '';
            $.each(data, function (index, val) {
                html += '<tr>';
                html += '<td>' + val.Name + '</td>';
                html += '<td> <a href="#" onclick="return GetById(' + val.Id + ')">Edit</a>';
                html += '| <a href="#" onclick="return Delete(' + val.Id + ')">Delete</a> </td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        }
    });
}

function LoadIndexSearch() {
    debugger;
    var supplier = new Object($('#search').val());
    $.ajax({
        type: "GET",
        url: "http://localhost:22980/api/suppliers/?name=" + supplier,
        dataType: "json",
        success: function (data) {
            var html = '';
            $.each(data, function (index, val) {
                html += '<tr>';
                html += '<td>' + val.Name + '</td>';
                html += '<td> <a href="#" onclick="return GetById(' + val.Id + ')">Edit</a>';
                html += '| <a href="#" onclick="return Delete(' + val.Id + ')">Delete</a> </td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        }
    });
}

function Edit() {
    var supplier = new Object();
    supplier.id = $('#Id').val();
    supplier.name = $('#Name').val();
    $.ajax({
        url: "http://localhost:22980/api/suppliers/" + $('#Id').val(),
        data: supplier,
        type: "PUT",
        dataType: "json",
        success: function (result) {
            LoadIndexSupplier();
            $('#myModal').modal('hide');
            $('#Name').val('');
        }
    });
};

function GetById(Id) {
    $.ajax({
        url: "http://localhost:22980/api/suppliers/" + Id,
        type: "GET",
        dataType: "json",
        success: function (result) {
            $('#Id').val(result.Id);
            $('#Name').val(result.Name);
            $('#myModal').modal('show');
            $('#Update').show();
            $('#Save').hide();
        }
    })
}

function Save() {
    var supplier = new Object();
    supplier.name = $('#Name').val();
    $.ajax({
        url: 'http://localhost:22980/api/suppliers/',
        type: 'POST',
        dataType: 'json',
        data: supplier,
        success: function (result) {
            LoadIndexSupplier();
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
            url: "http://localhost:22980/api/suppliers/" + Id,
            type: "DELETE",
            success: function (response) {
                swal({
                    title: "Deleted!",
                    text: "That data has been soft delete!",
                    type: "success"
                },
                function () {
                    window.location.href = '/Suppliers/Index/';
                });
            },
            error: function (response) {
                swal("Oops", "We couldn't connect to the server!", "error");
            }
        });
    });
}