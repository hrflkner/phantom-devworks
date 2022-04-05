import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import { About } from './pages/About';
import { Timeline } from './pages/Timeline';
import { Portfolio } from './pages/Portfolio';
//import SubHeader from './components/SubHeader';
//import Headline from './components/Headline';
// import Background from './components/Background';

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
                {/* <SubHeader /> */}
                {/* <Headline /> */}
                {/* <Background /> */}
            </div>
        </Router>
    );
}

export default App;
