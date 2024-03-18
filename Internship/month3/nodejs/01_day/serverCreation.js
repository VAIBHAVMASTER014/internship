const http = require('http');
const fs = require('fs');

const content = fs.readFileSync('../../month1/html&CssSandbox/cssSandbox/12_formStyle.html')
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(content);
}
)
server.listen(8080,()=>{
    console.log('Server is running on port 8080');
})