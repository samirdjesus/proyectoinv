import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path, { join } from 'path'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.get('/', function(req,res){
    res.send('hello samir de j ');
});
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));
app.set('puerto',process.env.port||3000);
app.listen(app.get('puerto'),function(){
    console.log('consola puerto:'+app.get('puerto'));
});
