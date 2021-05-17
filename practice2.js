const http = require("http");
const server = http.createServer();
const fs = require("fs");
const cv = require("opencv")
 
server.on("request", function( request , response ) {
    fs.readFile("index.html", "utf-8",
        ( error , content ) => {
               response.writeHead(200, { "Content-Type": "text/html" });
               response.write( content );
                response.end();
        });
});
server.listen(3000);