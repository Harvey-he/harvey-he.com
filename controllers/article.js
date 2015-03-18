/**
 * Created by harvey on 3/15/15.
 */

var Topic = require('../proxy').Topic;

exports.index = function (req, res) {
    var topicId = req.params.articleId;
    Topic.getOneTopicById(topicId,function (err, topic) {
        if (err) {
            return next(err);
        }
        res.render('article',{'topic':topic});
    });
}

