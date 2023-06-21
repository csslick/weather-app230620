import React from 'react'

function Weather(props) {
  const { weather, error } = props;
  
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
      {
        // true 면 에러메시지 보이고 아님 말고
        error &&
          <p style={{ color: 'red' }} >올바른 지역명이 아닙니다.</p>
      }
    </>
  )
}

export default Weather