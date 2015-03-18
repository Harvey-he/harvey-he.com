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

exports.getAllTopic = function (callback) {
  Topic.find(null, null, null, function(err,docs){
      if (err) {
          return callback(err);
      }
      if (docs.length === 0) {
          return callback(null, []);
      }

      return callback(null, docs);

  });
};

exports.getOneTopicById = function (topicId, callback) {
    Topic.findOne({_id:topicId}, function(err, docs){
        if (err) {
            return callback(err);
        }
        if (docs.length === 0) {
            return callback(null, []);
        }

        return callback(null, docs);
    });
}