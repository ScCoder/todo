const dotenv = require('dotenv');
dotenv.config();

import express from 'express'

import router from './routers/router';

const port = process.env.PORT || 5000;

const app = express();

app.get('/',(request,response)=>{
    response.send("Hello world!");
});

app.use('/api',router);




app.listen(port, ()=> console.log(`Server started on port ${port}`));

