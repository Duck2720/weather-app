import styles from "./CityComponent.module.scss"

const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props
    return (
        <>
            <img className={styles.weatherLogo} src="/icons/perfect-day.svg"/>
            <span className={styles.chooseCityLabel}>Find Weather of your city</span>
            <form className={styles.searchBox} onSubmit={fetchWeather}>
                <input
                    placeholder="Search City ..."
                    onChange={e => {
                        updateCity(e.target.value)
                    }}
                ></input>
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default CityComponent