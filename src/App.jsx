import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

import { LandingPage } from "./pages/landingpage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <div>
      <Router>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
      </Router>
    </div>
  );
};

export default App;
