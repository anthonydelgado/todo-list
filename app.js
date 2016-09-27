$(document).ready(function() {


    $(document).on("click","#add",function() {

        var newTodo = $('#newtask').val();
        var listItem = $('<li class="collection-item remove dismissable">');
        listItem.text(newTodo);
        $('#tasks').append(listItem);
        $("#newtask").val('');
    });



    $(document).on("click",".remove",function() {

        $(this).fadeOut();
    });

});

