import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import { About } from './pages/About';
import { Timeline } from './pages/Timeline';
import { Portfolio } from './pages/Portfolio';
import Footer from './components/footer/Footer';

import './css/globals.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/about" element={<About />} exact />
                    <Route path="/timeline" element={<Timeline />} exact />
                    <Route path="/portfolio" element={<Portfolio />} exact />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
