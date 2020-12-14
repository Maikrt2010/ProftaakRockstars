tinymce.init({
    selector: '#texteditor',
    plugins: 'code image',
    toolbar: 'undo redo | image code'
});

$(document).ready(function() {

    $("#get-data-form").submit(function(e) {

        var content = tinymce.get("texteditor").getContent();
        $("#data-container").html(content);
        alert(content);
        return false;
    });

});


// post request


// get request
