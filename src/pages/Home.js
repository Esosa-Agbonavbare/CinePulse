import React from 'react';
import { Link } from 'react-router-dom';
import { light, ascend, raw, container } from '../assets';

const Home = () => {
  return (
    <div className='bg-starry-night bg-cover bg-center h-screen w-full'>
        <img 
          src={light} 
          alt="Decorative-light" 
          className="absolute top-[-298px] left-[-107px] w-[849px] h-[943px] rounded-none"
        />
        <nav className='flex justify-between items-center p-4 bg-transparent'>
            <Link to="/" className='text-white text-2xl font-bold z-50'>CinePulse</Link>
            <button 
                className='text-white bg-blue-500 hover:bg-blue-700 text-sm font-bold py-2 px-4 rounded'
            >
                Get Started
            </button>
        </nav>
        <div className="flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-2xl sm:text-4xl font-bold font-maven-pro">Igniting Your Passion for Movies, <br /> Feel the Pulse!</h1>
            <p className="text-sm sm:text-lg mt-4 font-rubik">
                Welcome to CinePulse, where the screen comes alive, offering a captivating web app <br />
                experience that fuels your love for movies.
            </p>
        </div>
        <div className='mt-8 text-center relative z-50'>
            <button className='bg-red-500 text-white rounded-full py-2 px-4 hover:bg-red-700 transition duration-300'>
                Discover CinePulse
            </button>
        </div>
        <img 
            src={ascend}
            alt='movie-ascend'
            className='absolute hidden sm:inline-block sm:top-[205px] sm:right-0 sm:w-[200px] sm:h-[256px]'
        />
        <img 
            src={raw}
            alt='movie-raw'
            className='absolute hidden sm:inline-block sm:top-[205px] sm:left-0 sm:w-[200px] sm:h-[256px]'
        />
        <section className='relative h-[50%] sm:h-[52%] overflow-hidden mt-4'>
            <img 
                src={container}
                alt='img-container'
                className='absolute top-[-21px] h-[350px] sm:top-[-1px] sm:left-[150px] sm:w-[978px] sm:h-[570px] rounded-[8px]'
            />
        </section>
    </div>
  )
};

export default Home;