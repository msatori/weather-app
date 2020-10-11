//our html will be structured in a way that allows for containers 
var cityInputEl = document.getElementById("#search-input");
var submitButtonEl = document.getElementById("#search-butt")
var cityName = `Madison`
const dateTime = moment().format(" dddd, MMMM Do YYYY, h:mm a");
var todayEl = document.getElementById("#today");

//document.querySelector("#search-input").value;


//access openweathermap + get a response
//format the openweathermap api


$("#submit-butt").on("click", function () {
var citySubmitHandler = function (event) {
    
        event.preventDefault();
        var citySearchInput = submitButtonEl.val().trim();
        if (citySearchInput) {
            console.log(citySearchInput);
        }
        else {
            alert("Please Enter a City")
        }
        console.log(event)

    };
    citySubmitHandler();
});


//create a variable to display city
var displayCityWeather = function (weather) {
    //check if api found cities weather 

}


function getWeather() {

    //use the fetch function to retreive an open weather api response
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8f7b4d33732f41b547ee00737e827bb7&units=imperial`
    fetch(apiURL).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            console.log(data.weather[0].description);
       
        //.then(function (data) {
        //clear old content
        todayEl = document.querySelector("#today");
        todayEl.textContent = "";
        
        //create HTML elements for todays weather (heading, div, p)
        //add html elements (classes, cards for forecast and today)



        //create a title element for today's forecast
        var titleEl = document.createElement("h3");
        titleEl.classList.add("card-title");
        titleEl.textContent = data.name + "," + dateTime;
    
        
        //create a card for storing today's forecast
        var cardEl = document.createElement("div");
        cardEl.classList.add("card");

        //make a body for the card
        var cardBodyEl = document.createElement("div");
        cardBodyEl.classList.add("card-body");

        //pull data for weather description
        var weatherDesc = document.createElement("p")
        weatherDesc.classList.add("card-text");
        weatherDesc.textContent = data.weather[0].description

        //pull data for temperature
        var tempEl = document.createElement("p");
        tempEl.classList.add("card-text");
        tempEl.textContent = "Temperature: " + data.main.temp + "°F";

        //pull data for wind speed
        var windSpeedEl = document.createElement("p");
        windSpeedEl.classList.add("card-text");
        windSpeedEl.textContent = "Wind Speed: " + data.wind.speed;

        //pull data for humidity
        var humidEl = document.createElement("p");
        humidEl.classList.add("p");
        humidEl.textContent = "Humidity: " + data.main.humidity + "%";

        //create image element for icons
        var iconEl = document.createElement("img")
        iconEl.setAttribute("src", " http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
        
        
      //add icon to title element
      titleEl.appendChild(iconEl);
      todayEl.appendChild(titleEl);
      //place card into today div
      todayEl.appendChild(cardEl);
      todayEl.appendChild(cardBodyEl);
      //place data into card
      cardBodyEl.appendChild(weatherDesc);
      cardBodyEl.appendChild(tempEl);
      cardBodyEl.appendChild(windSpeedEl);
      cardBodyEl.appendChild(humidEl);

    });
    });
    };

function getForecast {
    
} 


getWeather();


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