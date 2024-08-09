import React from 'react';

export const Product = (props) => {
    return (
        <ul className="services__list">
            {
                props.outSourcedProductsData.map((product, index) => {
                    const {productName, productDiscount, productCompletionDate, productLink} = product;
                    return (
                        <li key={index} className="services__el">
                            <a className="services__a" href={productLink}>
                                <span className="services__arrow"></span>
                                <span className="services__name">{productName}</span>
                                <span className="services__rabat">Rabat: </span>
                                <span className="services__rabat-type">{productDiscount}%</span>
                                <span className="services__realzation"> termin realizacji:
                        <span className="services__realization__item"> {productCompletionDate}</span>
                    </span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    );
};