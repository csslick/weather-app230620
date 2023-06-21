import { useState } from 'react'
import './App.css'
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState(''); // 검색어
  const [weather, setWeather] = useState(null); // 날씨 데이터 null 값이 비었음을 명시적 선언
  const [error, setError] = useState(false); // 에러 상태 true | false

  // 날씨 요청 함수
  const fetchWeather = () => {
    
    const apiKey = '5e3dd9073954b1f47758e6b5849178d4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    // AJAX 요청
    fetch(url)
      .then(res => res.json())  // json포맷으로 변환
      .then(data => {
        setError(false);
        // 검색 결과가 없을 때 
        if(data.cod === '404') {
          setWeather(null);
          setError(true);  // 에러남
          return;
        }
        setWeather(data);
        console.log(data);
      })
      // 에러처리
      .catch(() => {
        console.log('에러')
      })
  }

  // 입력함수
  const handleLocationChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  }

  // 검색 버튼 눌렀을 때
  const handleWeatherSearch = (e) => {
    // 전송 이벤트 취소(기본 이벤트)
    e.preventDefault();
    console.log('검색 호출');
    // 날씨 데이터 요청
    fetchWeather();
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search
        handleWeatherSearch={handleWeatherSearch}
        handleLocationChange={handleLocationChange}
        location={location}
      />
      <Weather weather={weather} error={error}/>
    </div>
  )
}

export default App
