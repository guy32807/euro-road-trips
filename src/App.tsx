import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import BlogIndexPage from './pages/BlogIndexPage';
import UKRoadTripsPost from './pages/BlogPost';
import ItalyRoadTripsPost from './pages/ItalyRoadTripsPost';
import DestinationsPage from './pages/DestinationsPage';
import RoadTripsPage from './pages/RoadTripsPage';
import SeoHead from './components/seo/SeoHead';
import theme from './styles/theme';
import './styles/global.css';
import './i18n';

const helmetContext = {}; 

const App: React.FC = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider theme={theme}>
        {/* HashRouter is already being used, which is good for GitHub Pages */}
        <Router>
          <SeoHead />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/uk-road-trips" element={<UKRoadTripsPost />} />
              <Route path="/blog/italy-road-trips" element={<ItalyRoadTripsPost />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/road-trips" element={<RoadTripsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
