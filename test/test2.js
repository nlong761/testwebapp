var http = require("http");

http.createServer(function (req, res) {
    
    console.log(req.headers);
    res.end(JSON.stringify(req.headers));
}).listen(8081, function() {
    console.log('Server running at http://127.0.0.1:8081/');
});
