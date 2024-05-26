import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const MovieCategory = ({ title, id, movies }) => {
  return (
    <div id={id} className="mb-8">
      <h2 className='font-maven-pro text-2xl font-semibold text-white mb-4'>{title}</h2>
      <ul className="hidden md:flex justify-center">
        {movies.map(movie => (
          <li key={movie.title} className="mr-4">
            <img src={movie.image} alt={movie.title} className="h-48" />
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <Carousel 
          showArrows={true} 
          showThumbs={false} 
          showStatus={false} 
          axis='horizontal'
        >
          {movies.map(movie => (
            <div key={movie.title}>
              <img src={movie.image} alt={movie.title} className="w-full h-auto" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MovieCategory;