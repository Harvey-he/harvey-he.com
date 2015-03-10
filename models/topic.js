/**
 * Created by harvey on 3/10/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
    title: { type: String },
    content: { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    content_is_html: { type: Boolean }
});

mongoose.model('Topic', TopicSchema);

