/**
 * Created by harvey on 3/5/15.
 */
var Topic = require('../proxy').Topic;
var moment = require('moment');

exports.index = function (req, res) {
    Topic.getAllTopic(function (err, topics) {
        var topicArray = [];
        if (err) {
            return next(err);
        }
        topics.forEach(function(topic){
            var obj = {};
            obj._id = topic._id;
            obj.title = topic.title;
            obj.content = topic.content;
            var date = moment(topic.create_at, null, 'zh-cn');
            var fdate = date.fromNow();
            obj.create_at = fdate;
            topicArray.push(obj);

        })
        res.render('index',{'topics':topicArray});
    });

}
