import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <main className="header-container">
            <div className="row  d-flex align-item-center">
                <div className="col-md-4 offset-md-2">
                    <small>Math mentoring</small>
                    <h1>Mathematics <br/>Professor</h1>
                    <button className="btn btn-primary">About Me</button>
                    <button className="btn btn-primary">Contact Me</button>
                </div>
                <div className="col-md-4">

                </div>

            </div>
        </main>
    );
};

export default Header;