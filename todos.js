//Check off specific to-do by clicking <li> element
$("ul").on("click", "li", function(){
	//will toggle the completed class for entire <li> which
	//grays the text out and adds a line-through
	$(this).toggleClass("completed");
});

//Delete an element by clicking the trash icon
$("ul").on("click", "span", function(){
	//once clicked we need to remove entire <li> element
	//we will use parent() to achieve this
	//we also use the fade out property
	$(this).parent().fadeOut(1000, function(){
		//remove occurs after the fade is finished
		//make sure to only call this and not $(this).parent()
		//which refers to the entire <ul>
		$(this).remove();
	});
});

//add new to-dos using the text input
$("input[type='text']").on("keypress", function(e){
	//check if enter is pressed to add to list
	if(e.which === 13){
		//set variable equal to input
		var txtInput = $(this).val();
		//append new li to <ul>
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>" + txtInput + "</li>");
		//clear the input text
		$(this).val("");
	}
});

//here we will select the plus sign and allow it to make the form
//appear and disappear
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});
