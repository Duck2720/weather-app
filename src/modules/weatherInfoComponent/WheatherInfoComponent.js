import styles from "./WheatherInfoComponent.module.scss"
import {WeatherInfoIcons} from "./iconWeather"

const WeatherInfoComponent = (props) => {
    const {name, value} = props
    return (
        <div className={styles.infoContainer}>
            <img className={styles.infoIcon} src ={WeatherInfoIcons[name]}></img>
            <div className={styles.infoLabel}>
                {value}
                <span>{name}</span>
            </div>
        </div>
    )
}

const WeatherComponent = (props) => {
    const {weather} = props
    const isDay = weather?.weather[0].icon?.includes("d")
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <div className={styles.weatherCondition}>
                <div className={styles.condition}>
                <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> {`| ${weather?.weather[0].description}`}
                </div>
                <img className={styles.weatherLogo} src="/icons/perfect-day.svg"></img>
            </div>
            <span className={styles.location}>{`${weather?.name}, ${weather?.sys?.country}`}</span>
            <span className={styles.weatherInfoLabel}>Weather Info</span>
            <div className={styles.weatherInfoContainer}>
                <WeatherInfoComponent
                 name={isDay ? "sunset" : "sunrise"}    
                 value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
                 />
                <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
                <WeatherInfoComponent name="pressure" value={weather?.main?.pressure}/>
            </div>
        </>
    )
}

export default WeatherComponent