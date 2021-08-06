import express from 'express'

const port = 5000;

const app = express();

app.get('/',(request,response)=>{
    response.send("Hello world!");
});

app.listen(port, ()=> console.log(`Server started on port ${port}`));

