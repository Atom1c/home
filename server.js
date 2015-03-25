var http = require("http");
http.createServer(function(request,response){
	console.log("DONE");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello world");
	response.end();
}).listen(8888);
console.log("Started");