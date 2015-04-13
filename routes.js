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
    //博客路由
    app.get('/', index.index);
    app.get('/archive', archive.index);
    app.get('/project', project.index);
    app.get('/about', about.index);
    app.get('/article/:articleId', article.index);

    //后台管理路由
    app.get('/admin', isLoggedIn, admin.index);
    app.get('/admin/signup', signup.index);
    app.get('/admin/signin', signin.index);
    app.get('/admin/topic/edit', isLoggedIn, edit.index);
    app.get('/admin/topic/list', isLoggedIn, list.index);
    app.get('/admin/setting', isLoggedIn, setting.index);
    app.get('/admin/persProf', isLoggedIn, persProf.index);

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    //登录
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/admin/persProf',
        failureRedirect : '/admin/signin',
        failureFlash : true
    }));
    //注册
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/admin/persProf',
        failureRedirect : '/admin/signup',
        failureFlash : true
    }));
}

//登录判断
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/admin/signin');
}

