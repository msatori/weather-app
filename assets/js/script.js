//our html will be structured in a way that allows for containers 
var weatherDesc = document.getElementById("weather-description");
const key = `bf15e932d8b235141ed24b1a785cca0f`;
var cityInputEl = document.getElementById("#search-input");
var submitButtonEl = document.getElementById("#button")
var cityName = document.querySelector("#search-input").value;


//access openweathermap + get a response
//format the openweathermap api
function getWeather(cityName) {

    //use the fetch function to retreive an open weather api response
    fetch(`http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=(bf15e932d8b235141ed24b1a785cca0)&units=imperial`)
        .then(function (response) {
            return response.json;
        })
        .then(function (data) {
            //clear old content
            todayEl = document.querySelector("#today");
            todayEl.textContent = "";
        });
        //create HTML elements for todays weather (heading, div, p)
        var 






























         
};


function submitCity(event) {
    //prevent browser from sending the form's input to URL
    //get value from input box
    getWeather(cityName)
    console.log(event)
};

//create a variable to display city
var displayCityWeather = function (weather) {
    //check if api found cities weather 
    if (weather.length === 0) {
        console.log("data not available");
    }
};


//based on response, we are going to populate different parts of the html with properties from the response object
//every time the user enters  search term, we are going to not only create a new button, but also save the search term to local storage--side bar(uses aside in HTML)
//every time the page reloads, recreate the search history buttons based on info in local storage
//worry about uv after most is functional

submitButtonEl.addEventListener("submit", submitCityHandler);