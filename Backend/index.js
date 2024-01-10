const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const userRouter = require('./routes/user')
app.use(bodyParser.json());

app.use("/user",userRouter);


app.listen(port,()=>{
    console.log(`port running on http://localhost:${port}`)
})