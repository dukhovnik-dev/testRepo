import React from 'react';

export const PrintHouseBox = (props) => {
    const {name, imgLink, text} = props.printHouseData;
    return (
        <div>
            <div className="lbox__tag">{name}</div>
            <div className="lbox__main">
                <div className="lbox__main-inner">
                    <div className="lbox__logo">
                        <img className="lbox__img" src={imgLink}
                             alt="logo"/>
                    </div>
                </div>
            </div>
            <div className="lbox__site">
                <p className="lbox__site-txt">{text}</p>
            </div>
        </div>
    );
};