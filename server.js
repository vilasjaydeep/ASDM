
express=require("express");
app=express();
fs=require("fs");
mymodule=require("./module");
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("form.html",{root:__dirname});
    console.log("file send to response");
});

app.post("/calculate",function(req,resp){
    result=mymodule.average(req.body.marks1,req.body.marks2,req.body.marks3);
	

     resp.send("Average: "+result);
	 console.log("o/p is send to  response");
});
app.listen(2304,function(){
	console.log("server started on port 2304");
})
































/*var fs=require("fs");
var http=require("http");
var url=require("url");
var query=require("querystring");
var module=require("./module");
processRequest=function(req,res)
{
	var d=url.parse(req.url);
	switch(d.pathname){
		case "/":
		res.writeHead(200,{'content-Type':'text/html'});
		fs.readFile("form.html",function(error,data){
			if(error){
				res.end("error");
				console.log("in error");
			}
			else{
				res.end(data).toString();
				console.log("in data");
			}
		});
		break;
		case "/calculate":
		data=query.parse(d.query);
		res.writeHead(200,{'content-Type':'text/html'});
		  f=module.average(data.marks1,data.marks2,data.marks3);
		  res.write(f.toString());
		  res.end();
		  break;
	}
	}
http.createServer(processRequest).listen(1000);*/
