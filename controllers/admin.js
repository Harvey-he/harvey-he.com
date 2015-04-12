/**
 * Created by harvey on 3/10/15.
 */
var User = require('../proxy').User;

exports.index = function (req, res) {
    res.redirect('/admin/topic/list');
}
