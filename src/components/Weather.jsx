import React from 'react'

function Weather(props) {
  const { weather } = props;
  
  return (
    <>
      {
        weather && (
          <div>
              <h2>{weather.name}</h2>
              <p>현재온도: {weather.main.temp}</p>
              <p>설명: {weather.weather[0].description}</p>
          </div>
        )  
      }
    </>
  )
}

export default Weather