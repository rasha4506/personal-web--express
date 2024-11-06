var express=require('express');
var app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static('public'));
app.use(express.static('public/CSS'));
app.use(express.static('public/IMG'));
app.set('view engine','ejs');
app.set('views','./views');
app.get('/',function(req,res){res.render('portfolio');});
app.listen(4000);

