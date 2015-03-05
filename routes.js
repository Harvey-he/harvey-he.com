/**
 * Created by harvey on 3/5/15.
 */
var site = require('./controllers/site');

module.exports = function(app) {
    app.get('/', site.index);
}
