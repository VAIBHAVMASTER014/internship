const http = require('http');

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    res.end('GET request to the /users page');
  } else if (method === 'POST' && url === '/users') {
    res.end('POST request to the /users page');
  } else if (method === 'PUT' && url.startsWith('/users/')) {
    res.end(`PUT request called`);
  } else if (method === 'PATCH' && url.startsWith('/users/')) {
    res.end(`PATCH request called`);
  } else if (method === 'DELETE' && url.startsWith('/users/')) {
    res.end(`DELETE request called`);
  } else {
    res.end('Invalid request');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
