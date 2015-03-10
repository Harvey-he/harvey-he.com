/**
 * Created by harvey on 3/10/15.
 */

var models = require('../models');
var Topic = models.Topic;

exports.newAndSave = function (title, content, callback) {
    var topic = new Topic();
    topic.title = title;
    topic.content = content;
    topic.save(callback);
};