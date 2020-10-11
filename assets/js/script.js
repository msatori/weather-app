//our html will be structured in a way that allows for containers 
var cityInputEl = document.getElementById("#search-input");
var submitButtonEl = document.getElementById("#search-butt")
var cityName = `Madison`
var todayEl = document.getElementById("#today");
const dateTime = moment().format(" dddd, MMMM Do YYYY, h:mm a");

//document.querySelector("#search-input").value;


//access openweathermap + get a response
//format the openweathermap api


var citySubmitHandler = function (event) {
    $("#submit-butt").on("click", function () {
        event.preventDefault();
        var citySearchInput = submitButtonEl.val().trim();
        if (citySearchInput) {
            console.log(citySearchInput);
        }
        else {
            alert("Please Enter a City")
        }
        console.log(event)

    });
};



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
            console.log(data.weather[0].description)
            console.log(data.weather[0].description);
       
        // .then(function (data) {
        //clear old content
        todayEl = document.querySelector("#today");
        todayEl.textContent = "";
        // });
        //create HTML elements for todays weather (heading, div, p)
        //add html elements (classes, cards for forecast and today)


    

        //create a title element for today's forecast
        var titleEL = document.createElement("h3");
        titleEL.classList.add("card-title");
        titleEL.textContent = data.name + "," + dateTime;
    
        
        //create a card for storing today's forecast
        var cardEl = document.createElement("div");
        cardEl.classList.add("card");

        //make a body for the card
        var cardBodyEl = document.createElement("div")
        cardBodyEl.classList.add("card-body");



        todayEl.appendChild(cardBodyEl);
        todayEl.appendChild(cardEl);
        todayEl.appendChild(titleEL);

    });

    });
};
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