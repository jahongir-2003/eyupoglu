import React from 'react';
import './header.css';
import MyNav from "./MyNav";


const Header = () => {
    return (
        <>
            <MyNav/>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 morst">
                        <img src={"/assets/losd.png"} alt=""/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;