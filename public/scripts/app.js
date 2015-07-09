// 
// APP.JS
// PUT YOUR CUSTOM SCRIPTS AND FUNCTIONS HERE
// 

//WHEN THE DOCUMENT IS FINISHED LOADING RUN THESE SCRIPTS
$(document).ready(function() {
  console.log($) // JQUERY IS WORKING!
  console.log(_) // UNDERSCORE IS WORKING!
  console.log("Ready to code!");

  var template = _.template($("#user-template").html());
  var index;

  $("#first-name-input").focus();

 //  var users = [
	// 	{
	// 		id: 1,
	// 		username: "bobjones",
	// 		firstname: "Bob",
	// 		lastname: "Jones",
	// 		age: 30
	// 	},
	// 	{
	// 		id: 2,
	// 		username: "joesmith",
	// 		firstname: "Joseph",
	// 		lastname: "Smith",
	// 		age: 35
	// 	},
	// 	{
	// 		id: 3,
	// 		username: "henryfreel",
	// 		firstname: "Henry",
	// 		lastname: "Freel",
	// 		age: 24
	// 	},
	// 	{
	// 		id: 4,
	// 		username: "izzyackerman",
	// 		firstname: "Isabela",
	// 		lastname: "Ackerman",
	// 		age: 16
	// 	}
	// ];

	// for (el in users) {
	// 	console.log(el);
	// 	$(".user-table tbody").append(template(users[el]));
	// }

	$.ajax({
		url: "http://localhost:3000/users",
		type: "GET",
		success: function(data) {

			index = data.length;
			console.log(data);
			console.log(index);

			var template = _.template($("#user-template").html());

			_.each(data, function(user) {
				$(".user-table tbody").append(template(user));
			});
		}
	});

	$("#user-form").on("submit", function() {

		var newIndex = index + 1;

		var userObj = {
			id: newIndex,
			firstname: $("#first-name-input").val(),
			lastname: $("#last-name-input").val(),
			age: $("#age-input").val()
		};

		$.ajax({
			url: "http://localhost:3000/users",
			type: "POST",
			data: userObj,
			success: function() {
				window.location.reload();
			},
			error: function() {
				alert("Error!");
			}

		});

	});
  

});



