//our html will be structured in a way that allows for containers 
var cityInputEl = document.getElementById("#search-input");
var submitButtonEl = document.getElementById("#button")
var cityName = document.querySelector("#search-input").value;


//access openweathermap + get a response
//format the openweathermap api


$("#search-butt").click(function(event){
    event.preventDefault();
    citySearchInput = $("#search-input").val()
        console.log(citySearchInput);
});

//create a variable to display city
var displayCityWeather = function (weather) {
    //check if api found cities weather 
    if (weather.length === 0) {
        console.log("data not available");
    }
};

function getWeather(cityName) {

    //use the fetch function to retreive an open weather api response
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8f7b4d33732f41b547ee00737e827bb7&units=imperial`
        fetch(apiURL).then(function (response) {
            return response.json;
        })
        .then(function (data) {
            //clear old content
            todayEl = document.querySelector("#today");
            todayEl.textContent = "";
        });
        //create HTML elements for todays weather (heading, div, p)

};
//based on response, we are going to populate different parts of the html with properties from the response object
//every time the user enters  search term, we are going to not only create a new button, but also save the search term to local storage--side bar(uses aside in HTML)
//every time the page reloads, recreate the search history buttons based on info in local storage
//worry about uv after most is functional

/* **EXAMPLE FROM TUTORING SESSION -- keep for refrence** 
var city = `Boston`;
var key = `9f43c0077cac6c11a2366bdfccb82d6f`;
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(function(response){
   response.json().then(function(data) {
       console.log(data);
       console.log(data.weather[0].description)
       weatherDesc.innerHTML = data.weather[0].description
   })
});*/