'use strict';
const
	fs = require('fs'),
	net = require('net'),

	filename = process.argv[2],
	server = net.createServer(function(connection) {
		console.log('subscriber connected');
		connection.write('{"type":"changed","file":"targ');

		let timer = setTimeout(function(){
			connection.write('et.txt","timestamp":1358175758495}' + "\n");
			connection.end();
		}, 1000);

		// let watcher = fs.watch(filename, function() {
		// 	connection.write(JSON.stringify({
		// 		type: 'changed',
		// 		file: filename,
		// 		timestamp: Date.now()
		// 	}) + '\n');
			
		// });


		connection.on('end', function() {
			clearTimeout(timer);
			console.log('Subscriber disconnected');
		});

	});

if (!filename) {
	throw Error('No target filename was specified');
}

server.listen(3000, function() {
	console.log('Listening for subscribers........');
});