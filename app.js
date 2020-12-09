const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function(req, res){
	var today = new Date();

	var options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	var day = today.toLocaleDateString("id-ID", options);

	/*var day = today.getDay();
	var dayname = "";
	switch(day){
		case 0:
			dayname = "Sunday";
			break;
		case 1:
			dayname = "Monday";
			break;
		case 2:
			dayname = "Tuesday";
			break;
		case 3:
			dayname = "Wednesday";
			break;
		case 4:
			dayname = "Thursday";
			break;
		case 5:
			dayname = "Friday";	
			break;
		case 6:
			dayname = "Saturday";					
			break;
		default:
			console.log("Error: current day is equal to " + day);

	}*/


	//console.log(dayname);
	res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
	var item = req.body.newItem;

	items.push(item);

	res.redirect("/");
})



app.listen(3000, function(){
	console.log("Your port is running at 3000");
});