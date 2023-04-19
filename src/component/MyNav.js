import React from 'react';
import  './MyNav.css';

const MyNav = () => {
    return (
        <div>

            <nav className="navbar hed navbar-expand-sm  navbar-dark">
                <div className="container">
                    <a className="navbar-brand logs mx-5" href="#">EyüboğluIskele</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link mx-5" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-5" href="#">Our projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-5" href="#">Product Catalog</a>
                            </li>
                        </ul>
                        <input type="text" className="search mx-5" placeholder="search..."/>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MyNav;