const express =require('express');
const app = express();
app.listen(5000,()=>{
		console.log("sever started");
});
app.get('/',(req,res)=>{
res.send("hello recieved get request");
});
