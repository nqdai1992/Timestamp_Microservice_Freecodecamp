/**
 * Created by Dainguyen on 16/04/2017.
 */
var express = require('express');
var app = express();
app.get('/', (req,res)=>{
    res.end('Hello world');
});
app.listen(process.argv[2]||3000);