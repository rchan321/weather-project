/* GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city */
const API_KEY = '&appid=315e5beaee652fc73f83bfbe8aace06a'
const API_URL = 'https://api.openweathermap.org/data/2.5/'

var currentCoords = function() {

fetch(`${API_URL}weather?q=Columbus${API_KEY}`)
  .then(response => response.json())
  .then(currentData =>{
    let coord = currentData.coord; 
    let {lat, lon} = coord
     weather(lat, lon)
    });
}

var weather = function(lat, lon) {
fetch(`${API_URL}onecall?lat=${lat}&lon=${lon}${API_KEY}`)
  .then(response => response.json())
  .then(data =>{
    
    });

}
currentCoords()