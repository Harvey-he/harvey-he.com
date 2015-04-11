/**
 * Created by harvey on 3/5/15.
 */
var index = require('./controllers/index');
var archive = require('./controllers/archive');
var project = require('./controllers/project');
var about = require('./controllers/about');
var article = require('./controllers/article');
var admin = require('./controllers/admin');
var signup = require('./controllers/signup');
var signin = require('./controllers/signin');
var edit = require('./controllers/edit');
var list = require('./controllers/list');
var setting = require('./controllers/setting');
var persProf = require('./controllers/persProf');


module.exports = function(app, passport) {
    app.get('/', index.index);
    app.get('/archive', archive.index);
    app.get('/project', project.index);
    app.get('/about', about.index);
    app.get('/article/:articleId', article.index);
    app.get('/admin', admin.index);
    app.get('/admin/signup', signup.index);
    app.get('/admin/signin', signin.index);
    app.post('/signup',signup.signup);
    //app.post('/signin',signin.signin);
    app.get('/admin/topic/edit', edit.index);
    app.get('/admin/topic/list', list.index);
    app.get('/admin/setting', setting.index);
    app.get('/admin/persProf', persProf.index);
    app.post('/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err) }
            if (!user) {
                req.session.messages =  [info.message];
                return res.redirect('/admin/signin')
            }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.redirect('/');
            });
        })(req, res, next);
    });
}
