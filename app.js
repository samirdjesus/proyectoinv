import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path, { join } from 'path'

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
// Or using promises
mongoose.connect(uri, options).then(
/** ready to use. The `mongoose.connect()` promise resolves to
mongoose instance. */
() => { console.log('Conectado a DB') },
/** handle initial connection error */
err => { console.log(err) }
);


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));



app.use('/api', require('./routes/nota'));
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));
app.set('puerto',process.env.port||3000);
app.listen(app.get('puerto'),function(){
    console.log('consola puerto:'+app.get('puerto'));
});
