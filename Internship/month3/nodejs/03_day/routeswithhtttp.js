const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=== "/"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("This is landing page");
        res.end();
    }
    else if(req.url === "/home"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("This is home page");
        res.end();
    }
    else if(req.url === "/about"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("This is about page");
        res.end();
    }
    
})

server.listen(8080,()=>{
    console.log('Server is running on port 8080');
})

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('this is server ...');
// })
// server.listen(undefined, () => {
//     console.log('Server is listening on port:', server.address().port);
// });

// // when server is listening and port is undefine given to listen method 
// // os will randomly choose a random port which is free and not used by any other activity