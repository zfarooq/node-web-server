const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use((req, res, next)=>{
    var now = new Date().toString();
    console.log(`${now}`);
    next();
});
// app.use((req, res, next)=>{
//     res.render('maintance.hbs');
// });
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
app.listen(3000);
