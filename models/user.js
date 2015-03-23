/**
 * Created by harvey on 3/23/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    loginName: { type: String },
    email: { type: String },
    password: { type: String },
    create_at: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);