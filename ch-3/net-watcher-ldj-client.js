"use strict";
const
	net = require('net'),
	ldj = require('./ldj.js'),
	netClient = net.connect({port: 3000}),
	ldjClient = ldj.connect(netClient);
	// console.log(typeof(ldjClient));
	ldjClient.on('message',function(message){
		// let message = JSON.parse(message);
		if(message.type === 'watching'){
			console.log("Now Watching: " + message.file);
		}
		else if (message.type === 'changed'){
			let date = new Date(message.timestamp);
			console.log("File '"+ message.file +"'changed at "+date);
		}else {
			throw Error("Unrecognized message type: " + message.type);
		}
	});