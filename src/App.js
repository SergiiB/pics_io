import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";
import Testimonial from "./components/Main/Testimonial/Testimonial";
import Faq from "./components/Main/Faq/Faq";
import Signup from "./components/Main/Signup/Signup";

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            {/*<Testimonial />*/}
            {/*<Faq />*/}
            {/*<Signup />*/}
            <Main />
        </div>
);
}

export default App;
