//1.a. Get all the countries from Asia continent /region using Filter function
var request= new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
 
    let res = data.filter((x)=>{
        //console.log(x);
        for(let i in x.continents){
           if(x.continents[i]==="Asia")
           return true;
        }
    })
     console.log(res);
      
    }