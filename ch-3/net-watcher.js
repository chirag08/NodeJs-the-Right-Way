'use strict';
const
	fs = require('fs'),
	net = require('net'),

	filename = process.argv[2],
	server = net.createServer(function(connection){
		console.log('subscriber connected');
		connection.write("Now watching '"+filename+"' for change...\n");

		let watcher = fs.watch(filename,function(){
			connection.write("File '"+filename+"' changed: "+Date.now()+"\n");
		});

		connection.on('close',function(){
			console.log('subscriber disconnected');
			watcher.close();
		});

	});

	if(!filename){
		throw Error('No target filename was specified');
	}

	server.listen(5432,function(){
		console.log('Listening for subscribers........');
	});

	// process.on('uncaughtException', function(err){
	// 	console.log('ssssssssssssss'+err);
	// });