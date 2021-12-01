// 1. e. Print the country which uses US Dollars as currency.

var request= new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
 
    let res = data.filter((x)=>{
        //console.log(x);
        for(let i in x.currencies){
           if(x.currencies[i].code==="USD")
           return true;
        }
    })
     console.log(res);
      
    }