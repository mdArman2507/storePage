import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from "path";
import ProductController from './src/controllers/product.controller.js';
const server=express();


server.set('view engine','ejs');
server.set("views",path.join(path.resolve(),"src","views"));

server.use(ejsLayouts);

const productController=new ProductController();
server.get('/',productController.getProducts);
server.use(express.static('src/views'));

server.listen(3400);