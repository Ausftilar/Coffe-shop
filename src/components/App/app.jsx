import { Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

import './App.css';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;