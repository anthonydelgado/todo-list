$('#add').on('click', function () {
    var newTodo = $('#newtask').val();
    var listItem = $('<li class="collection-item">');
    listItem.text(newTodo);
    $('#tasks').append(listItem);
    $("#newtask").val('');
});
