import React from 'react';
import './OurCollection.css';
import booksData from './books.json';

const OurCollection = () => {
    const ourCollection = booksData.ourCollection;

    return (
        <section id="best-selling">
            <h2 style={{ textAlign: 'center', color: 'green' }}>Our Collection</h2>
            <div className="books">
                {ourCollection.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={process.env.PUBLIC_URL + '/image/' + book.url} alt="Book Cover" />
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>{book.description}</p>
                        <p>Price: {book.price}</p>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurCollection;
