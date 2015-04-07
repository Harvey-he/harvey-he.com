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
            res.redirect('admin/topic/list');
        }
    })

}
