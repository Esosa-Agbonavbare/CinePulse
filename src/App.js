import React, { Suspense } from 'react';
import { ErrorBoundary } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, MovieListing } from './pages';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieListing />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
