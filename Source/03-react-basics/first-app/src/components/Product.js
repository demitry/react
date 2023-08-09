import React from 'react';
import './Product.css'

export default function Product({title, price, description}) {
    return (
        <article className="product">
            <h2>{title}</h2>
            <p className="price">${price}</p>
            <p>{description}</p>
        </article>
    );
}
