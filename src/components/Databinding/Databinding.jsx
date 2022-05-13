import './Databinding.scss';
import React, {useState, useEffect} from 'react';
import DataItem from '../DataItem/DataItem';
const Databinding = () => {
    const [data, setData] =useState([]);
    const url = "https://yts.torrentbay.to/api/v2/list_movies.json";
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res.data.movies))
    },[])
    console.log(data);
  return (  
      <div className='databinding'>
          <div className='databinding-cap'>DataBinding</div>
          <div className='databinding-wrapper'>
          {
          data.map((movie) => 
            <DataItem 
            title = {movie.title}
            img = {movie["background_image"]}/>)
          }
          </div>       
      </div>
  );
}

export default Databinding;