var koa = require('koa');
var app = koa();

//an es6 generator
app.use(function* (){
	this.body = "hello world!!";
});

app.listen(5000);