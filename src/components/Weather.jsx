import React, { useState } from 'react';

const Weather = ({ weather, temp }) => {
  const [tempState, setTempState] = useState(true);

  const handleButton = () => {
    setTempState(!tempState);
  };

  return (
    <section className="weather-app">
      {weather && (
        <div className="weather-container">
          <div className="weather-header">
            <h1>Weather App</h1>
            <p>{weather.name}</p>
          </div>
          <div className='weather-container-information'>
            <figure className="weather-icon">
                <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                />
            </figure>
            <div className="weather-info">
                <h2>"{weather.weather[0].description}"</h2>
                <div className='weather-info-details'>
                    <p>Wind Speed </p>
                    <p>{weather.wind.speed} m/s</p>
                </div>
                <div className='weather-info-details'>
                    <p>Clouds</p>
                    <p>{weather.clouds.all}%</p>
                </div>
                <div className='weather-info-details'>
                    <p>Pressure</p>
                    <p>{weather.main.pressure} hPa</p>
                </div>
            </div>
          </div>
          <div className="weather-temp">
            <p>{tempState ? `${temp.cel} °C` : `${temp.fah} °F`}</p>
            <button onClick={handleButton}>
              {tempState ? 'Change to °F' : 'Change to °C'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Weather;
