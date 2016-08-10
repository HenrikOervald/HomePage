var express = require('express');
var app = express();
var request = require('request');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


 



app.get('/', function(req,res){

	res.render('index',{
		title:'Home',
		users: ['Henrik', 'Signe', 'Thomas', 'Morten'],
		classname:'home',
		profilepic: 'http://whatsappdp.net/wp-content/uploads/2016/03/funny-profile-pictures.jpg',
		rss: request('http://www.bt.dk/bt/seneste/rss', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
  			  console.log(body); // Print the google web page.
  			  console.log("in request");
  			  return body;
 			 }else{console.log(error)}
		})


	});
});

app.get('/about', function(req,res){
	res.render('index',{
		title:'About Us',
		classname:'about'
	});
});



var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});