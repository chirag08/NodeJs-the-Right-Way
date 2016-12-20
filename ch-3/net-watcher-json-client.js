"use strict";
const
	net = require('net'),
	client = net.connect({port: 5432});
	client.on('data',function(){
		let message = JSON.parse(data);
		if(message.type === 'watching'){
			console.log("Now Watching: " + message.file);
		}
		else if (message.type === 'changed'){
			let date = new Date(message.timestamp);
			console.log("File '"+ message.file +"'changed at "+date);
		}else {
			throw Error("Unrecognized message type: " + message.type);
		}
	})