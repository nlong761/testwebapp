var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/' }));
var storage = multer.memoryStorage();
var upload = multer({
    dest: 'uploads/',
    storage: storage,
    limits: {
        fileSize: 1 << 22, // 4M 
    },
});
var file_upload = upload.single('file_upload');
app.post('/upload', file_upload, function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any 
    res.write("filename:\t\t" + req.file.filename + "\n");
    res.write("path:\t\t" + req.file.path + "\n");
    res.write("mimetype:\t\t" + req.file.mimetype + "\n");
    res.write("originName:\t\t" + req.file.originalname + "\n");
    res.write("Time:\t\t" + (new Date()) + "\n");
    res.write("Size:\t\t" + req.file.size + "\n");
    res.send();
});
app.post('/_upload', function(req, res){
    file_upload(req, res, function(req, err){
        if (err) {
            return res.send({message:"error"});
        }
        res.write("filename:\t\t" + req.file.filename + "\n");
        res.write("path:\t\t" + req.file.path + "\n");
        res.write("mimetype:\t\t" + req.file.mimetype + "\n");
        res.write("originName:\t\t" + req.file.originalname + "\n");
        res.write("Time:\t\t" + (new Date()) + "\n");
        res.write("Size:\t\t" + req.file.size + "\n");
        res.send();
    });
});
app.post('/uploads', upload.array('file_upload'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any 
    res.write("filename:\t\t" + req.file.filename + "\n");
    res.write("path:\t\t" + req.file.path + "\n");
    res.write("mimetype:\t\t" + req.file.mimetype + "\n");
    res.write("originName:\t\t" + req.file.originalname + "\n");
    res.write("Time:\t\t" + (new Date()) + "\n");
    res.write("Size:\t\t" + req.file.size + "\n");
    res.send();
});

// app.get('/index.htm', function (req, res) {
//     res.sendFile(__dirname + "/" + "index.htm");
// })

// app.post('/file', function (req, res) {
//     console.log(req.files.file.name);
//     console.log(req.files.file.path);
//     console.log(req.files.file.type);
//     var file = __dirname + "/" + req.files.file.name;
//     fs.readFile(req.files.file.path, function (err, data) {
//         fs.writeFile(file, data, function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 response = {
//                     message: 'File uploaded successfully',
//                     filename: req.files.file.name
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// })

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})


//____________________________________
// var express = require("express");
// var app = express();

// app.use(express.static("public"));

// app.get('/', function(req, res) {
//     res.send("Hello word");
// });

// app.get('image', function(req, res) {

// });

// var server = app.listen(3000, function(req, res) {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log("Running at: http://" + host + ":" + port);
// });
//__________________________________
// var promise1 = new Promise((resolve, reject) => {

// });

// var buf = new Buffer('abc');
// var json = buf.toJSON();
// console.log(json);

//--------------------------------------
// var buf = new Buffer(26);
// for (var i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }
// console.log(buf.toString('ascii'));

//--------------------------------
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var listner1 = function listner1() {
//     console.log('listner1 executed.');
// };

// var listner2 = function listner2(message) {
//     console.log('listner2 excuted:' + message);
// };

// eventEmitter.addListener('connection', listner1);
// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");
// eventEmitter.emit('connection');
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");
// eventEmitter.emit('connection', "test");
// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");

//-----------------------------------------------------
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log('connection successful.');
//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function () {
//     console.log('data received succesfully.');
// });

// eventEmitter.emit('connection');
// console.log("Program Ended");
//-----------------------------------------------------------------
// const https = require('https');
// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp)=>{
//     let data = '';
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });
//     resp.on('end', () => {
//         console.log(JSON.parse(data).explanation);
//     });
// }).on('error', (err) => {
//     console.log("Error:" + err.message);
// });

//-----------------------------------------------
// var fs = require("fs");
// fs.readFile("note.txt", function(err, data){
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// });
// console.log("Program Ended");