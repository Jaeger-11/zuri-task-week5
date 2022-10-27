const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res) => {

    // PATH FOR HOME PAGE
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile('./content/home.html', null, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        })
    } 
    // PATH FOR ABOUT PAGE
    else if( req.url === '/about'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile('./content/about.html', null, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        })
    } 
    // PATH FOR CONTACT PAGE
    else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile('./content/contact.html', null, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        })
    }
    else(
        res.end("PAGE NOT FOUND")
    )
})

server.listen(5000);