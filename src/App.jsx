import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";

const apikey = '6c439f40ad0469de84da9618de6dad25'

function App() {

    const [coords, setCoords] = useState()
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()

    const succes = (pos) => {
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      })
    }

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(succes)
    }, [])
    
    useEffect(() => {
      if(coords){
        const {lat, lon} = coords
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
        axios.get(url)
        .then(res => {
          const cel = (res.data.main.temp - 273.15).toFixed(2)
          const fah = (cel * 9/5 + 32).toFixed(2)
          setTemp({
            cel: cel,
            fah: fah
          })
          setWeather(res.data)
        })
        .catch(err => console.log(err))
      }
    }, [coords])

    return (
        <main>
            <Weather 
              weather={weather}
              temp={temp}
            />
        </main>
    );
}

export default App;
