/**
 * Created by Dainguyen on 16/04/2017.
 */
var express = require('express');
var path = require('path');
var app = express();
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
app.use('/',express.static(path.join(__dirname, '/public')))
app.get('/:timeInfo', (req,res)=>{
    var timeInfo = req.params.timeInfo;
    var timeInfoString = Number(timeInfo).toString();
    if(timeInfoString !== "NaN"){
        timeInfo = +timeInfo
    }
    var d = new Date(timeInfo);
    var date = d.getDate(),month = d.getMonth() ,year = d.getFullYear();
    var unixTime = d.getTime();
    var naturalTime = monthNames[month] + ' ' + date.toString() + ',' + year.toString();
    var jsonResult = {unix:unixTime, natural: naturalTime};
    res.send(JSON.stringify(jsonResult));
});
app.listen(process.argv[2]||3000);