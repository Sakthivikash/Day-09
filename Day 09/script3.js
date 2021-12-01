//1.c. Print the following details name, capital, flag using forEach function

var request= new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
    let res = data.forEach(element => console.log(element.name,element.capital,element.flag));
}