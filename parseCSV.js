var fs = require('fs');
var parse = require('csv-parse');

var weekday={0:0,1:0,2:0,3:0,4:0,5:0,6:0};
var hour={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0};

var parser = parse( function(err, data){
  //console.log(data[0][9]);
  //console.log(data[0][5]);
  for(var i in data){
  //console.log(i);
  if(i!=0){
  weekday[data[i][9]]+=parseInt(data[i][5]);
  hour[data[i][8]]+=parseInt(data[i][5]);
  }
  }
  console.log("0,"+hour[0]);
  console.log("4,"+hour[4]);
  console.log("8,"+hour[8]);
  console.log("12,"+hour[12]);
  console.log("16,"+hour[16]);
  console.log("20,"+hour[20]);
  
});
fs.createReadStream('turnstile_weather_v2.csv').pipe(parser);