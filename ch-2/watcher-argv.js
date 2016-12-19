const 
	fs = require('fs'),
	filename = process.argv[2];
	console.log(process.argv.length);
	if(!filename){
		throw Error("A file to watch must be specified!");
	}
fs.watch(filename,function(){
	console.log("File "+ filename +" just changed..");
});
console.log("Now watching target.txt for changes...");