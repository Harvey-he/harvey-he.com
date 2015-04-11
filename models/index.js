/**
 * Created by harvey on 3/10/15.
 */
var mongoose = require('mongoose');
var config = require('../config/config');

mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

// models
require('./topic');
require('./user');

exports.Topic = mongoose.model('Topic');
exports.User = mongoose.model('User');