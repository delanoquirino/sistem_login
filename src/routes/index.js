import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import useAuth from "../hooks/useAuth";

// pages
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({Item}) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {

    return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                {/*Private Home so tem acesso quando logada*/}
                <Route exact path="/home" element={<Private Item={Home} />} /> 
                <Route path="/" element={<Signin/>} />
                <Route exact path="/signup" element={<Signup/>} />
                {/*acessando qualquer link vai ser direcionado para o Signin*/}
                <Route path="*" element={<Signin/>} />
            </Routes>
        </Fragment>
    </BrowserRouter>

    );
};

export default RoutesApp;