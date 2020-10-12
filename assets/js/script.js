//our html will be structured in a way that allows for containers 
const dateTime = moment().format(" dddd, MMMM Do YYYY, h:mm a");
var todayEl = document.getElementById("#today");
//document.querySelector("#search-input").value;



//format the openweathermap api



function citySubmitHandler() {
    var searchInput = document.querySelector("#search-input").value;
    getWeather(searchInput)
    saveHistory(searchInput);
    
};


//access openweathermap + get a response
function getWeather(searchInput) {

    //use the fetch function to retreive an open weather api response
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=8f7b4d33732f41b547ee00737e827bb7&units=imperial"
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
            windSpeedEl.textContent = "Wind Speed: " + data.wind.speed + "MPH";

            //pull data for humidity
            var humidEl = document.createElement("p");
            humidEl.classList.add("p");
            humidEl.textContent = "Humidity: " + data.main.humidity + "%";

            //create image element for icons
            var iconEl = document.createElement("img")
            iconEl.setAttribute("src", " http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");


            //add icon to title element
            titleEl.appendChild(iconEl);
            cardBodyEl.appendChild(titleEl);
            cardBodyEl.appendChild(weatherDesc);
            cardBodyEl.appendChild(tempEl);
            cardBodyEl.appendChild(windSpeedEl);
            cardBodyEl.appendChild(humidEl);
            cardEl.appendChild(cardBodyEl);
            //place card into today div
            todayEl.appendChild(cardEl);
           

            getForecast(searchInput);

        });
    });
};

function getForecast(searchInput) {
    //fetch forecast API
    var futureApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&exclude=minutely,hourly&appid=8f7b4d33732f41b547ee00737e827bb7&units=imperial";
    fetch(futureApi).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        //get forecast container
        var forecastEl = document.querySelector("#future-forecast");
        var display = document.createElement("h3");
        display.classList.add("row");
        display.textContent = "5 Day Forecast:";

        forecastEl.appendChild(display);

        //loop over the forecasts
        for (var i = 5; i < 40; i += 8) {

             //display forecast text
            
              

                //create cards to push info into
                var cardColEl = document.createElement("div");
                cardColEl.classList.add("col-md-2");
                var cardEl = document.createElement("div");
                cardEl.classList.add("card", "bg-primary", "text-white");
                //body for card
                cardBodyEl = document.createElement("div");
                cardBodyEl.classList.add("card-body", "p-2");
                //card deck
                var cardDeckEl = document.createElement("div");
                cardDeckEl.classList.add("card-deck", "justify-center");

                //info for date
                var dateDisplay = document.createElement("h5");
                dateDisplay.classList.add("card-title");
                dateDisplay.textContent = data.list[i].dt_hour;

                //pull temperature data
                var tempEl = document.createElement("p");
                tempEl.classList.add("card-text");
                tempEl.textContent = "Temp:" + data.list[i].main.temp + "°F";

                //pull windspeed data
                var windSpeedEl = document.createElement("p");
                windSpeedEl.classList.add("card-text")
                windSpeedEl.textContent = data.list[i].wind.speed + "MPH";

                //pull humidity data
                var humidEl = document.createElement("p");
                humidEl.classList.add("card-text");
                humidEl.textContent = "Humidity: " + data.list[i].main.humidity + "%";


                var iconEl = document.createElement("img");
                iconEl.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png")

                //append cards to html and info to cards
                cardColEl.appendChild(cardEl);
                
                cardBodyEl.appendChild(dateDisplay);
                cardBodyEl.appendChild(iconEl);
                cardBodyEl.appendChild(tempEl);
                cardBodyEl.appendChild(windSpeedEl);
                cardBodyEl.appendChild(humidEl);
                cardEl.appendChild(cardBodyEl);
                cardDeckEl.appendChild(cardEl);

                forecastEl.appendChild(cardDeckEl);

            };
        
    });
};
//create search history list--attch to ul element in html
function saveHistory(searchInput) {
   let listItem = $("<li>").addClass("list-group-item").text(searchInput);
   $(".search-history").append(listItem);
    };


document.querySelector("#search-butt").addEventListener("click", citySubmitHandler);

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