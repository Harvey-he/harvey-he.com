/**
 * Created by harvey on 3/29/15.
 */

var User = require('../proxy').User;

exports.index = function ( req, res ) {
    res.render('admin/signup');
};

exports.signup = function ( req, res ) {
    var prams = req.body;
    var name = prams.uname;
    var email = prams.email;
    var password = prams.password;
    var repassword = prams.repassword;

    if( password !== repassword ) {
        res.render('error', {
            message: "密码不一致"
        });
    }

    User.newAndSave(name, email, password, function(){
        res.redirect('admin/signin');
    } );
};