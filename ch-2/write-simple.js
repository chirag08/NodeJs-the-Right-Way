const fs = require('fs');
fs.writeFile('target1.txt','a new file made with node write methods', function(err){
	if(err){
		throw err;
	}
	console.log("File saved!");
	// body
});