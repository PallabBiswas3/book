import React from 'react';
import './Review.css';
import reviewsData from './reviews.json';
const Review = () => {
    const reviews = reviewsData.reviews;

    return (
        <section id="reviews">
            <h2 style={{ textAlign: 'center', color: 'green' }}>Customer Reviews</h2>
            <div className="reviews">
                {reviews.map(reviews => (
                    <div key={reviews.id} className="review">
                        <img src={reviews.avatar} alt="Customer Avatar" />
                        <div className="review-content">
                            <h3>{reviews.name}</h3>
                            <p>{reviews.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Review;
