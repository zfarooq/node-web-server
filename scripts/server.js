const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;

var registerRoutes = () => {
    hbs.registerPartials(__dirname + '../../views/partials');
    hbs.registerHelper('getCurrentYear',()=>{
        return new Date().getFullYear();
    });
    app.set('view engine', 'hbs');
    app.get('/', (req, resp) => {
        resp.render('home.hbs'), {
            pageTitle: 'Home Page',
            welcomeMessage: 'Welcome'
        }
    });
    app.get('/about', (req, resp) => {
        resp.render('about.hbs'), {
            pageTitle: 'About Page',
        }
    });
    app.get('/projects', (req, resp) => {
        resp.render('projects.hbs'), {
            pageTitle: 'Projects Page',
        }
    });
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    });
};
module.exports = {
    registerRoutes
};