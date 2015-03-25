/**
 * Created by harvey on 3/10/15.
 */
var User = require('../proxy').User;

exports.new = function (req, res) {

    User.getAllUsers(function(err, users){
        if(err){
            return next(err);
        }
        if(users.length === 0) {
            res.render('admin/signup');
        }
    })

    res.render('admin/admin');

}
