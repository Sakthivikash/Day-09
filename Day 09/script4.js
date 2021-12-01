//1.d. Print the total population of countries using reduce function

var request= new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
 
    var data=JSON.parse(request.response);
  
    var res = [];
    for(let i=0;i < data.length;i++){
      res.push(data[i].population);
    }
      var result = res.reduce((acc,item)=>acc + item);
    console.log(result);
}