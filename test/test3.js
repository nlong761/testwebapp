var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myappdatabase');

var User = require('./models/user');

// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha2',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;
  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
User.find({name: chris.name}, function(err, ...users){
  
});
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});