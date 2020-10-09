var weatherDesc = document.getElementById("weather-description");
//access openweathermap + get a response

//our html will be structured in a way that allows for containers 
//use the fetch function to retreive an open weather api response
var city = `Boston`;
var key = `e0e07d12772a13e40e92f2380bb4c14d`;
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(function(response){
   response.json().then(function(data) {
       console.log(data);
       console.log(data.weather[0].description)
       weatherDesc.innerHTML = data.weather[0].description
   })
});

var test = {
    propertyA: "hello",
    propertyB: "world"
}; 
console.log(test.propertyB);

//based on response, we are going to populate different parts of the html with properties from the response object
//every time the user enters  search term, we are going to not only create a new button, but also save the search term to local storage
//every time the page reloads, recreate the search history buttons based on info in local storage
//worry about uv after most is functional

