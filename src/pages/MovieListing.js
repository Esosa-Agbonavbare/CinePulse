import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { light, search, ifj, quantumdawn, mulitverse, rmi, couple, tik, 
    vampire, wildforest, sportcar, thecodes, thespace, si, poison, enroute, genesis, 
    secret, faith, romance } from '../assets';
import { MovieCategory, Footer } from '../components';

const MovieListing = () => {
    const movieCategories = [
        {
          title: "Top Rated",
          id: "top-rated",
          movies: [
            { title: "quantum dawn", image: quantumdawn },
            { title: "Inside fun journey", image: ifj},
            { title: "Secrets of the Multiverse", image: mulitverse},
            { title: "Ascend", image: romance},
            { title: "Return of the Machine Intelligence", image: rmi}
          ]
        },
        {
          title: "New Release",
          id: "new-release",
          movies: [
            { title: "Couple", image: couple },
            { title: "Sport Car", image: sportcar },
            { title: "Vampire", image: vampire },
            { title: "InterdimensionalKey", image: tik },
            { title: "Wild Forest", image: wildforest }
          ]
        },
        {
            title: "Popular",
            id: "popular",
            movies: [
                { title: "en route", image: enroute },
                { title: "the space", image: thespace },
                { title: "the codes", image: thecodes },
                { title: "poison", image: poison },
                { title: "si", image: si },
                { title: "genesis", image: genesis },
                { title: "faith", image: faith },
                { title: "secret", image: secret}
            ]
        },
    ];

    const scrollToSection = (id) => {
        scroller.scrollTo(id, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }

    return (
        <div className='bg-starry-night bg-cover bg-center h-screen w-full'>
            <img 
                src={light} 
                alt="Decorative-light" 
                className="absolute top-[-298px] left-[-107px] w-[849px] h-[943px] rounded-none"
            />
            <nav className='flex justify-between items-center p-4 bg-transparent'>
                <Link to="/" className='text-white text-2xl font-bold z-50'>CinePulse</Link>
                <div className="hidden md:flex space-x-4 font-maven-pro font-bold">
                    <button onClick={() => scrollToSection('top-rated')} className='text-white'>Top Rated</button>
                    <button onClick={() => scrollToSection('new-release')} className='text-white'>New Release</button>
                    <button onClick={() => scrollToSection('popular')} className='text-white'>Popular</button>
                </div>
            </nav>
            <div className="flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-2xl sm:text-4xl font-bold font-maven-pro">Discover The Perfect Film, <br /> With An Effortless Search And Selection</h1>
                <div className="relative mt-8 w-full sm:mx-auto max-w-md sm:max-w-xl">
                    <input 
                        type="text" 
                        placeholder="What are you looking for" 
                        className="w-full p-2 pl-10 rounded-[26px] border border-white bg-[#3A3A3AFF] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <img 
                        src={search}
                        alt='search-icon'
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400'
                    />
                </div>
                <div className="mt-4 z-50">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Search History
                    </button>
                </div>
            </div>
            <div className="mt-16 mx-[16px] px-4">
                {movieCategories.map(category => (
                    <MovieCategory key={category.title} title={category.title} movies={category.movies} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default MovieListing