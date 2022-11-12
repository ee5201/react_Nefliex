import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import MovieModal from './MovieModal';
import "./Row.css"


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row({isLargeRow,title,id,fetchUrl}) { 

  const [Movies,setMovies] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [movieSelected,setmovieSelected] = useState({});


  useEffect(() => {
    fetchMovieData( );
  },);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl)
    console.log('request',request)
    setMovies(request.data.results);
  };

  const handleClick = (movie) =>{
    setModalOpen(true)
    setmovieSelected(movie)

  };

  return (
    <section className='row'>
      <h2>{title}</h2>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      breakpoints={{
        1378: {
          slidersPerView:6,
          sliderPerGroup: 6,
        },
        998: {
          slidersPerView:5,
          sliderPerGroup: 5,
        },
        625: {
          slidersPerView: 4,
          sliderPerGroup: 4,
        },
        0: {
          slidersPerView: 3,
          sliderPerGroup: 3,
        }
      }}
    >
      
        <div id={id} className="row__posters">
            {Movies.map((movie) => (
              <SwiperSlide>
              <img 
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}/>
              </SwiperSlide>
          ))}
        </div>
        </Swiper>
        


      {
        modalOpen && (
          <MovieModal {...movieSelected} setModalOpen = {setModalOpen}/>
        )
      }
    </section>
  )
}

