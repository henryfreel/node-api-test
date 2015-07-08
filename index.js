var express = require("express");
var bodyParser = require("body-parser")
var _ = require("underscore");

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

var users = [
	{
		id: 1,
		username: "bobjones",
		firstname: "Bob",
		lastname: "Jones",
		age: 30
	},
	{
		id: 2,
		username: "joesmith",
		firstname: "Joseph",
		lastname: "Smith",
		age: 35
	},
	{
		id: 3,
		username: "henryfreel",
		firstname: "Henry",
		lastname: "Freel",
		age: 24
	},
	{
		id: 4,
		username: "izzyackerman",
		firstname: "Isabela",
		lastname: "Ackerman",
		age: 16
	}
]

app.put("/users/:id", function (req, res) {

	// set the value of the id
	var targetID = parseInt(req.params.id);

	// find the item in 'users' array matching the id
	var foundUser = _.findWhere(users, {id: targetID});

	// update the keys/values
	if (foundUser) {
		foundUser.username = req.body.username || foundUser.username;
		foundUser.firstname = req.body.firstname || foundUser.firstname;
		foundUser.lastname = req.body.lastname || foundUser.lastname;
		foundUser.age = req.body.age || foundUser.age;
	}

	// send back editted Object
	res.json(foundUser);
});


app.delete("/users/:id", function (req, res) {

	// set the value of the id
	var targetID = parseInt(req.params.id);

	// find the item in 'users' array matching the id
	var foundUser = _.findWhere(users, {id: targetID});

	if (foundUser) {
		// get index of found
		var index = users.indexOf(foundUser);

		// remove it from array
		users.splice(index, 1);

		// send back editted Object
		res.json(users);
	} else {
		res.json(users);
	}


});

app.get("/users", function (req, res) {
	res.json(users);
});

app.get("/users/:id", function (req, res) {
	var targetID = parseInt(req.params.id);

	// find the item in 'users' array matching the id
	var foundUser = _.findWhere(users, {id: targetID});

	res.json(foundUser);
});

app.post("/users", function (req, res) {
	var newUser = req.body;

	users.push(newUser);

	res.json(newUser)
});

app.listen(3000);










