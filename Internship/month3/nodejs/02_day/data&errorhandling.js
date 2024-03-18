const http = require('http');

let data = '';
http.get('http://jsonplaceholder.typicode.com/posts', (res) => {

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    // console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});




let options = {
  hostname: 'reactapiforpostdata-default-rtdb.firebaseio.com',
  path: '/dummydata.json',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
};

let req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(`Response: ${chunk}`);
  });
  res.on('end', () => {
    console.log('Data added to Firebase');
  });
});

req.on('error', (error) => {
  console.error(`Problem with request: ${error.message}`);
});

req.write(JSON.stringify(data));
req.end();
