/**
 * Created by harvey on 3/29/15.
 */
var User = require('../proxy').User;

exports.index = function ( req, res ) {
    res.render('admin/signin');
}

exports.signin = function ( req, res ) {
    var prams = req.body;
    User.getOneUser(prams.email, prams.password, function(){
        res.redirect('admin');
    })

}