tinymce.init({
    selector: '#texteditor',
});

$(document).ready(function() {

    $("#get-data-form").submit(function(e) {

        var content = tinymce.get("texteditor").getContent();
        $("#data-container").html(content);
        return false;

    });

});


// post request


// get request
