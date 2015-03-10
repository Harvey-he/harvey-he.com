/**
 * Created by harvey on 3/5/15.
 */
var Topic = require('../proxy').Topic;

exports.index = function (req, res) {

    res.render('index',{'fortimes':100});
}
