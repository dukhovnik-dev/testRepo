import React from 'react';
import {Product} from "./Product";

export const PhOutsourcedProducts = (props) => {
    const {outSourcedProductsData} = props;
    return (
        <div className="listing__aside">
            <div className="scroll js-scrollbar">
                <div className="services">
                    <Product outSourcedProductsData={outSourcedProductsData}/>
                </div>
                <div className="scroll__bar" style={{height: '780px'}}>
                    <div className="scrollbar2">
                        <div className="scrollbar2__bar"></div>
                        <div className="scrollbar2__point" style={{height: '49.2611%'}}></div>
                    </div>
                </div>
                <div className="scroll__bar" style={{height: '780px'}}>
                    <div className="scrollbar2">
                        <div className="scrollbar2__bar"></div>
                        <div className="scrollbar2__point" style={{height: '49.2611%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};