import express from 'express';
import path from "path";
const server=express();
const port=3400;


server.set('view engine','ejs');
server.set("views",path.join(path.resolve(),"src","views"));



server.listen(port,()=>{
    console.log(`server is running on port:${port}`);
});