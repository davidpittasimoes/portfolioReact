import React, { useState, useEffect } from 'react';
import Home from '../components/screens/home/Home';
import About from '../components/screens/about/About';
import Works from '../components/screens/works/Works';
import ReactPageScroller from 'react-page-scroller';
import Header from '../components/layout/header/Header';

function index() {
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(()=> {
    setCurrentPage(0)
  }, [currentPage])
  return (
    <div className="App">
      <Header />
        <Home handleGoToWorks={() => setCurrentPage(1)}/>
        <Works />
        <About />
      <style jsx global>
        {
          `
          .App {
            text-align: center;
          }

          .App-logo {
            height: 40vmin;
            pointer-events: none;
          }

          @media (prefers-reduced-motion: no-preference) {
            .App-logo {
              animation: App-logo-spin infinite 20s linear;
            }
          }

          .App-header {
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          }

          .App-link {
            color: #61dafb;
          }

          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          `
        }
      </style>
    </div>
  );
}

export default index;
