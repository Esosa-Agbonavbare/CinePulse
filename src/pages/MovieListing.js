import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroller } from 'react-scroll';
import { light, search, ifj, quantumdawn, mulitverse, rmi, couple, tik, 
    vampire, wildforest, sportcar, thecodes, thespace, si, poison, enroute, genesis, 
    secret, faith, romance } from '../assets';
import { MovieCategory, Footer, Modal, ErrorResponse } from '../components';
import { AxiosInstance } from '../utils';

const MovieListing = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [searchResponse, setSearchResponse] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSearchError, setShowSearchError] = useState(false);
    const [showHistoryError, SetShowHistoryError] = useState(false);
    const [error, setError] = useState('');

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

    const handleSearch = async (query) => {
        setShowSearchError(false);
        SetShowHistoryError(false);
        if (!query) return;
        try {
            const response = await AxiosInstance.get('/movie/search',
                {
                    params: { title: query}
                }
            );
            setSearchResults(response.data.data);
            setSearchResponse(response.data.data.response);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError('Error fetching search results. Please try again.');
            setShowSearchError(true);
        }
    };

    const handleKeyPress = (event) => {
        setShowSearchError(false);
        SetShowHistoryError(false);
        if (event.key === 'Enter') {
            handleSearch(searchQuery);
        }
    };

    const fetchSearchHistory = async () => {
        setShowSearchError(false);
        SetShowHistoryError(false);
        try {
            const response = await AxiosInstance.get('/movie/history');
            setSearchHistory(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching search history:', error);
            setError('Error fetching search history. Please try again.');
            SetShowHistoryError(true);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='bg-starry-night bg-cover bg-center min-h-screen flex flex-col'>
            <img 
                src={light} 
                alt="Decorative-light" 
                className="absolute top-[-298px] left-[-107px] w-[849px] h-[943px] rounded-none"
            />
            <nav className='flex justify-between items-center p-4 bg-transparent'>
                <Link to="/" className='text-white text-2xl font-bold z-50'>CinePulse</Link>
            </nav>
            <div className="flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-2xl sm:text-4xl font-bold font-maven-pro">Discover The Perfect Film, <br /> With An Effortless Search And Selection</h1>
                <div className="relative mt-8 w-full sm:mx-auto max-w-md sm:max-w-xl">
                    <input 
                        type="text" 
                        placeholder="What are you looking for" 
                        className="w-full p-2 pl-10 rounded-[26px] border border-white bg-[#3A3A3AFF] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <img 
                        src={search}
                        alt='search-icon'
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400'
                        onClick={() => handleSearch(searchQuery)}
                        style={{ cursor: "pointer"}}
                    />
                </div>
                {showSearchError && <ErrorResponse message={error} />}
                <div className="mt-4 z-50">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={fetchSearchHistory}
                    >
                        Get Search History
                    </button>
                    <div className="mt-2 text-center">
                        {searchHistory && searchHistory.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold">Search History:</h2>
                                <ul className="text-white flex flex-wrap justify-center font-rubik">
                                    {searchHistory.map((item, index) => (
                                        <li key={index} className="mx-2">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {showHistoryError && <ErrorResponse message={error} />}
                    </div>
                </div>
            </div>
            <div className="mt-16 mx-[16px] px-4">
                {searchResults && searchResponse === "True" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div 
                            className="bg-gray-800 p-4 rounded z-50"
                            onClick={openModal}
                            style={{ cursor: 'pointer'}}
                        >
                            <img 
                                src={searchResults.poster} 
                                alt={searchResults.title} 
                                className="w-full h-auto rounded"
                            />
                        </div>
                    </div>
                ) : searchResults && searchResults.Response === "False" ? (
                    <div className="text-white text-center">
                        <h2 className="text-2xl">No result found</h2>
                    </div>
                ) : (
                    movieCategories.map(category => (
                        <MovieCategory key={category.title} id={category.id} title={category.title} movies={category.movies} />
                    ))
                )}
            </div>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal} movie={searchResults} />
        </div>
    )
}

export default MovieListing;