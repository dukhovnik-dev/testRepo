import React from 'react';

export const PrintHouseDetails = (props) => {

    const {name, link, linkTxt, photoSrc} = props;

    return (
        <div className="listing__box" data-id="0">
            <a className="lbox"
               href={link}>
                <div className="lbox__tag">{name}</div>
                <div className="lbox__main">
                    <div className="lbox__main-inner">
                        <div className="lbox__logo">
                            {
                                !photoSrc
                                    ? <p className="lbox__special_text">Miejsce na Twoją reklamę</p>
                                    : <img className="lbox__img" src={photoSrc} alt="logo"/>
                            }

                        </div>
                    </div>
                </div>
                <div className="lbox__site">
                    <p className="lbox__site-txt">{linkTxt}</p>
                    <i className="lbox__i icon icon--arrow-next"></i>
                </div>
            </a>
        </div>
    );
};
