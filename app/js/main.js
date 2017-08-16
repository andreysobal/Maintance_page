$(document).ready(function() {
	$("#callback").submit(function() {				//send a callback form 
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Ожидайте звонка");
		});
		return false;
	});
}); //end ready