var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myappdatabase', {
  useMongoClient: true,
})
  .then(() => {
    console.log("Connection db success!");
  }).catch(error => {
    console.log("Connection db error:" + error);
  });

var User = require('./models/user');

// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayhadsdsssds',
  password: 'password'
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function (err, name) {
  if (err) throw err;
  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
// User.find({name: chris.name}, function(err, ...users){

// });
var test = chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
console.log(">>><<<" + test);

User.find().then(users => {
  var response = [];
  users.forEach(user => {
    response.push({name: user.name, username: user.username});
  })
  console.log(response);
}).catch(err => {
  console.error(err);
});


// User.find({})
//   .then(function(users) {
//     var jobQueries = [];
//     users.forEach(function(u) {
//     jobQueries.push(User.find({name:u.name}));
//   });
//   return Promise.all(jobQueries );
// }).then(function(listOfJobs) {
//     // res.send(listOfJobs);
//     console.log(listOfJobs);
// }).catch(function(error) {
//     // res.status(500).send('one of the queries failed', error);
//     console.log("error:" + error.message);
// });

// User.find(function(err, users){
//   if (err) {
//     return console.error(error);
//   }
//   return console.log(users);
// });

mongoose.disconnect(function (err) {
  return console.error(err);
});