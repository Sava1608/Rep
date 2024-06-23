import React from 'react';
import Home from "../Home/Home";
import Switch from "../Switch/Switch";

const Header = () => {
    return (
        <div className="container d-flex justify-content-around">
            <div className="d-flex align-items-center">
                    <div className={"m-3"}>
                        <Home/>
                    </div>
                    <div>
                        <Switch/>
                    </div>
            </div>
        </div>
    );
};

export default Header;