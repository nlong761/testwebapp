var dotenv = require('dotenv');
dotenv.config();

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var beerController = require('./controllers/beer');

mongoose.connect('mongodb://localhost:27017/test', {
    useMongoClient: true
});
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
var router = express.Router();
var port = process.env.PORT || 3000;
////////////////////////////////////////
router.route('/beers')
    .post(beerController.postBeers)
    .get(beerController.getBeers);

router.route('/beers/:beer_id')
    .get(beerController.getBeer)
    .put(beerController.putBeer)
    .delete(beerController.deleteBeer);
////////////////////////////////////////
app.use('/api', router);
app.listen(port);
console.log('Running at ' + port);