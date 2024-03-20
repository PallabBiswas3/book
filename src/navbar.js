import React from 'react';
import './Navbar.css'; // Import CSS file

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#best-selling">Best Selling</a></li>
                <li><a href="#our-collection">Our Collection</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
