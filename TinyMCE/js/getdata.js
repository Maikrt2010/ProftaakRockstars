$(document).ready(function(){

	$("#get-data-form").submit(function(e){

        var content = tinymce.get("texteditor").getContent();
        alert(content);
		$("#data-container").html(content);
		return false;

	});

});