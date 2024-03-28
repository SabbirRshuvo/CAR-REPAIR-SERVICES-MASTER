import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Header from "./Pages/Home/Sheared/Header/Header";
import Footer from "./Pages/Home/Sheared/Footer/Footer";
import ExpertDetails from "./Pages/ExpertDetails/ExpertDetails";
import Login from "./Pages/LogIn/Login/Login";
import Registar from "./Pages/LogIn/Registar/Registar";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route
                    path="/expert/:expertId"
                    element={<ExpertDetails />}
                ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Registar />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
