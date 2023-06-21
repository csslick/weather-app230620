import React from 'react'

function Search(props) {
  console.log(props);
  const {
    handleWeatherSearch, 
    location,
    handleLocationChange 
  } = props;

  return (
    <form onSubmit={handleWeatherSearch}>
    <div className="input-group">
      <input 
        type="search" 
        value={location}
        placeholder='위치를 입력'
        required
        onChange={handleLocationChange}
      />
      <button 
        className='btn' 
        type='submit'
      >검색</button>
    </div>
  </form>
  )
}

export default Search