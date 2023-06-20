import { useState } from 'react'
import './App.css'

function App() {
  const [location, setLocation] = useState(''); // 검색어
  const [weather, setWeather] = useState(null); // 날씨 데이터 null 값이 비었음을 명시적 선언

  // 날씨 요청 함수
  const fetchWeather = () => {
    
    const apiKey = 'e11462160015cffa69954c9f67741b7b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'seoul'}&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())  // json포맷으로 변환
      .then(data => {
        console.log(data);
      })
  }

  fetchWeather();


  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  )
}

export default App
