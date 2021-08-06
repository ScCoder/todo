const dotenv = require('dotenv');
dotenv.config();

import express from 'express'

const port = process.env.PORT || 5000;

const app = express();

app.get('/',(request,response)=>{
    response.send("Hello world!");
});

app.listen(port, ()=> console.log(`Server started on port ${port}`));

