import React from 'react';

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-auto">
      <div className="bg-white rounded-lg overflow-hidden pt-14 shadow-lg max-w-lg w-full">
        <div className="relative">
          <button 
            className="absolute top-[100px] right-[20px] mt-1 mr-2 text-black font-bold z-[60] bg-white rounded-full w-10 h-10 flex items-center justify-center text-3xl"
            onClick={onClose}
          >
            &times;
          </button>
          <img src={movie.poster} alt={movie.Title} className="w-full pt-14 h-[500px]"/>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
          <p className="mb-2"><strong>Plot:</strong> {movie.plot}</p>
          <p className="mb-2"><strong>Genre:</strong> {movie.genre}</p>
          <p className="mb-2"><strong>Director:</strong> {movie.director}</p>
          <p className="mb-2"><strong>Actors:</strong> {movie.actors}</p>
          <p className="mb-2"><strong>Released:</strong> {movie.released}</p>
          <p className="mb-2"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
