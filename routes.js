/**
 * Created by harvey on 3/5/15.
 */
var site = require('./controllers/site');
var admin = require('./controllers/admin');

module.exports = function(app) {
    app.get('/', site.index);
    app.get('/admin', admin.new);
}
