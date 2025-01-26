import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'



const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzNhZWRlM2MzNjIxYTA5YzcxNDI5YTkyOGFjMmUzYiIsIm5iZiI6MTYwMjY1NjI0Mi41ODksInN1YiI6IjVmODY5N2YyYTgwNjczMDAzNjNiOTkwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JoPgEa2arVx-5WyB0uNOAQEG0QkKn0QDkdB25xcgkLk'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  },[])

  // const cardsRef = useRef();

  // const handleWheel = (e) => {
  //   e.preventDefault();
  //   cardsRef.current.scrollLeft += e.deltaY;
  // }

  //   useEffect(() => {
  //     cardsRef.current.addEventListener('wheel', handleWheel)
  //   },[])
  return (
    <div className='title-cards'>
      <h2>{title? title : "Popular on Netflix"}</h2>
      <div className="card-list" /*ref={cardsRef}*/>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards
