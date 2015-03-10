/**
 * Created by harvey on 3/10/15.
 */
var Topic = require('../proxy').Topic;

exports.new = function (req, res) {
    var title = '测试标题';
    var content = '测试内容';

    Topic.newAndSave(title, content, function (err, topic) {
        if (err) {
            return next(err);
        }

        res.render('admin', {'notic': '成功发表文章','topicId': topic._id});

    });

}
