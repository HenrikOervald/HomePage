var express = require('express');
var app = express();
var request = require('request');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


 



app.get('/', function(req,res){

  request('http://www.bt.dk/bt/seneste/rss', function(error, response, body) {
      if (error){  		
      		res.render('error', {error:error})

      	} else{
      		res.render('index',
				 data ={
					title:'Home',
					users: ['Henrik', 'Signe', 'Thomas', 'Morten'],
					classname:'home',
					profilepic: 'http://whatsappdp.net/wp-content/uploads/2016/03/funny-profile-pictures.jpg',
					rss:body
				});
     	 }
      
    });

	
});


app.get('/about', function(req,res){
	res.render('index',{
		title:'About Us',
		classname:'about'
	});
});



app.listen(3000, function(){
	console.log('Listening on port 3000');
});


