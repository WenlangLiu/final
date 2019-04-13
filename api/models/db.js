const mongoose = require('mongoose');

mongoose.connect(  'mongodb://adressbook:addressbook@address-book-shard-00-00-0qesc.mongodb.net:27017,address-book-shard-00-01-0qesc.mongodb.net:27017,address-book-shard-00-02-0qesc.mongodb.net:27017/test?ssl=true&replicaSet=address-book-shard-0&authSource=admin&retryWrites=true', {
  useMongoClient: true
}
);
    mongoose.Promise = global.Promise;
require('./user_model');
