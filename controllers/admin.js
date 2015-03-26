/**
 * Created by harvey on 3/10/15.
 */
var User = require('../proxy').User;

exports.index = function (req, res) {


    User.getAllUsers(function(err, users){
        if(err){
            return next(err);
        }
        if(users.length === 0) {
            res.redirect('/admin/signup');
        }else{
            res.render('admin/admin');
        }
    })

}

exports.signup = function ( reg, res ) {
    res.render('admin/signup');
}

exports.signin = function ( reg, res ) {
    res.render('admin/signin');
}
