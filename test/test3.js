var http = require("http");
http.get({
    hostname: 'localhost',
    port: 8081,
    path: '/',
    agent: false  // create a new agent just for this one request
  }, (res) => {
    console.log(res.rawHeaders);
});