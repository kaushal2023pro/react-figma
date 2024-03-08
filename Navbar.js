import React from 'react';
import './Navbar.css';
import '../../MyStyle/frame.css';
import Assets from '../../assets/image-Xme.png';

const Navbar = () => {
    return (
        <>
            <div className="frame-VtY">
                <div className="auto-group-dves-5Lx">
                    <div className="image-1XS">
                    </div>
                    <div className="rectangle-3DE">
                    </div>
                    <img className="image-rAg" src={Assets} alt='search' />
                    <p className="categories-Ka4">Categories</p>
                    <p className="website-builders-tWg">Website Builders</p>
                    <p className="todays-deals-Gn8">Today&#39;s deals</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
