//jshit esversion:6
const express = require("express");
const app = express();

// Port: 3000 and call back function
app.listen(3000, function(){
	console.log("Server started on port 3000");
});

// The below code works for root url
app.get('/', (req,res) => {
	console.log(req);
	res.send('Hello Potti!!')
})