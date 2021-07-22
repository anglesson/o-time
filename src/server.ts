import  express  from "express";
const app = express();
app.get("/",function(req,res){
    res.json(
        {
            "message:":"connected"
        }
    );
});
app.listen(8080,function(){
    console.log("servidor funcionando na porta 8080");
});

