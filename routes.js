/**
 * Created by harvey on 3/5/15.
 */
var index = require('./controllers/index');
var archive = require('./controllers/archive');
var project = require('./controllers/project');
var about = require('./controllers/about');
var article = require('./controllers/article');
var admin = require('./controllers/admin');

module.exports = function(app) {
    app.get('/', index.index);
    app.get('/archive', archive.index);
    app.get('/project', project.index);
    app.get('/about', about.index);
    app.get('/article/:articleId', article.index);
    app.get('/admin', admin.index);
    app.get('/admin/signup', admin.signup);
    app.get('/admin/signin', admin.signin)

}
