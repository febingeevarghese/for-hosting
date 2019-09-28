const express=require('express');
const path=require('path');
const app=express();
app.use(express.stastic(__dirname + '/dist/my-app'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/my-app/index.html'))
});
app.listen(process.env.port || 3000);
