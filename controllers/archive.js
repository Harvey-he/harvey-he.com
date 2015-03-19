/**
 * Created by harvey on 3/15/15.
 */
var Topic = require('../proxy').Topic;

exports.index = function (req, res) {
    Topic.getAllTopic(function (err, topics) {
        if (err) {
            return next(err);
        }
        res.render('archive',{'topics':topics});
    });
}
