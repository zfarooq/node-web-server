const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next)=>{
    var now = new Date().toString();
    console.log(`${now}`);
    next();
});

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})

app.get('/',(req, res)=>{
    res.render('home.hbs', {
        pageTitle:'Home Page',
        welcomeMessage:'Welcome'
    });
});

app.get('/about',(req, resp)=>{
    resp.render('about.hbs',{
        pageTitle:'About Page',
    });   
});

app.get('/projects',(req, resp)=>{
    resp.render('projects.hbs',{
        pageTitle:'Projects Page',
    });
});
app.listen(port, ()=> {
    console.log(`Server is running at ${port}`);
});
