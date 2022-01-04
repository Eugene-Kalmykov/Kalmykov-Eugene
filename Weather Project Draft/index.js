import {Forecast} from "./Forecast.js"; 

let url = "http://api.weatherapi.com/v1/forecast.json?key=b42ec53b7614492ea26173900212112&q=&q=Minsk&days=7&aqi=yes&alerts=yes";

const forecastAllRawValue = (forecastEntity) => {
   
    const divFirstLine = document.getElementById("firstLine");
    const divMainLine = document.createElement("div");
    divMainLine.className = "main_line"; 
    divFirstLine.after(divMainLine);
    
    divMainLine.innerHTML = `<h2> ${forecastEntity.city}  ${forecastEntity.country}  ${forecastEntity.currentDataTime} </h2> 
                            <img src='${forecastEntity.currentConditionIcon}'></img>
                            <h3> Облачность: ${forecastEntity.currentCondition} = ${forecastEntity.currentCloud}% </h3>
                            <h4> Температура: ${forecastEntity.currentTemp_C}°С </h4>
                            <h4> Ощущается как: ${forecastEntity.currentFeelslike_c}°С </h4>
                            <h4> Ветер: ${forecastEntity.currentWind_kph}км/ч ${forecastEntity.currentWind_dir} с порывами до: ${forecastEntity.currentGust_kph}км/ч </h4>
                            <h4> Давление: ${forecastEntity.currentPressure_mb} </h4>
                            <h4> Влажность: ${forecastEntity.currentHumidity}% </h4>
                            <h4> Видимость: ${forecastEntity.currentVis_km}км </h4>`;

        return divMainLine;                    
    }

    
  const promise = fetch(url);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data);
      
        const forecast = new Forecast(data)
        forecastAllRawValue(forecast);
    });