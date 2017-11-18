var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test2', {
    useMongoClient: true,
}).then(() => {
    console.log("Connection db success!");
}).catch(error => {
    console.log("Connection db error:" + error);
});
var Schema = mongoose.Schema;
//---------------------SCHEMA---------------------
var userSchema = new Schema({
    _id: Number,
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // admin: Boolean,
    // location: String,
    // meta: {
    //     age: Number,
    //     website: String
    // },
    // created_at: Date,
    // updated_at: Date
});
var User = mongoose.model('User', userSchema);
//------------------------------------------------
// for (let i = 0; i < 10; i++) {
//     let user = new User({
//         _id: i,
//         username: 'name_' + i,
//         password: 'password_' + i,
//     });
//     user.save();
// }

User.findById(1).then(user => console.log(user));


mongoose.disconnect(function (err) {
    return console.error("Error:" + err);
});