

let weather = {
    apikey: "4f1f887424f84aeb0028bc524414f206",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        ).then((response) => response.json())
         .then((data) => this.displayWeather(data));
          
    },
    displayWeather: function(data) {
        console.log(data);
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {speed} = data.wind;
        const {temp,humidity} = data.main;
        const {country} = data.sys;
        const {all} = data.clouds;
        console.log(name,icon,description,speed,temp,humidity,country,all);

        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = " humidity :" + humidity + "%";
        document.querySelector(".speed").innerText = "wind speed :" + speed + "Km/h";
        document.querySelector(".country").innerText = "country :" + country;
        document.querySelector(".clouds").innerText = "all :" + all;
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-city").value);
    }
};

document.querySelector(".search button").addEventListener("click",function (){
    weather.search();
});

// document.querySelector(".search-city").addEventListener("Keyup",function(Event){
//     if (Event.key == "enter"){
//         weather.search();
//     }
// });

weather.fetchWeather("Mumbai");

