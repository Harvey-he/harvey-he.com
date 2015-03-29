/**
 * Created by harvey on 3/25/15.
 */
var models = require('../models');
var User = models.User;

exports.newAndSave = function(loginName, email, password, callback){
    var user = new User();
    user.loginName = loginName;
    user.email = email;
    user.password = password;

    user.save(callback);
}

exports.getAllUsers = function(callback){
    User.find({ $query: {}, $orderby: { create_at : -1 } }, function(err,users){
        if (err) {
            return callback(err);
        }
        if (users.length === 0) {
            return callback(null, []);
        }

        return callback(null, users);

    });
}

exports.getOneUser = function(email, password,callback){
    User.findOne({email: email, password: password}, function(err, user){
        if (err) {
            return callback(err);
        }
        if (user.length === 0) {
            return callback(null, []);
        }

        return callback(null, user);
    });
}