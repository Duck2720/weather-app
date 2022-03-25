import axios  from "axios";
import styles from './App.module.scss'
import CityComponent from "./modules/citycomponent/CityComponent";
import WeatherComponent from "./modules/weatherInfoComponent/WheatherInfoComponent"
import { useState } from "react"

const API_KEY = "97c848b579d71e0c5df6605498f9c7a1"

function App() {
  const [city, updateCity] = useState()
  const [weather, updateWeather] = useState()

  const fetchWeather = async (e) => {
    e.preventDefault()
    const response = await 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    updateWeather(response.data)
  }

  return (
    <div >
        <div className={styles.container}>
          <span className={styles.appLabel}>React Wheather App 
          </span>  
          
          {weather ? (
            <WeatherComponent weather = {weather}/>
        ) : (
          <CityComponent updateCity = {updateCity} fetchWeather = {fetchWeather}/>
        )}
        </div>
    </div>
  );
}

export default App;
