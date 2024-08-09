import React from 'react';
import {PrintHouseDetails} from "./PrintHouseDetails";
import {Footer} from "../Footer";
import {printHousesData} from "../../data/printHousesData";

export const PrintHouseList = () => {
    return (
        <>
            <div>
                <div id="page" className="page">
                    <header id="header" className="box-shadow">
                        <div className="topbar container">
                            <div className="topbar__parts">
                                <a className="topbar__part topbar__part--logo" href="/">
                                    <img src="./img/logo-ip-full.png" alt="" className="logo logo--header"/>
                                    <img src="./img/logo-together.png" alt="" className="logo logo--header"/>
                                </a>
                                <div className="topbar__part topbar__part--search">
                                    <div className="search" id="searchbar">
                                        <form className="search__form" id="searchform">
                                            <input type="text" className="search__textinput" id="search__input"
                                                   name="s"/>
                                            <button type="submit" className="btn--search" id="search__btn">
                                                <img src="./img/search.png" alt="" className="icon-search"/>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/*PRIMARY*/}
                    <div id="primary">
                        <div className="listing">
                            <div className="listing__bckg"></div>
                            <div className="listing__header">
                                <div className="row section__header container">
                                    <h2 className="title title--underline">
                                        <small className="undertitle">Sieć współpracy</small> Dostępne drukarnie
                                    </h2>
                                </div>
                            </div>
                            &#xFEFF;
                            {/*Category Menu*/}
                            <div className="listing__filters container">
                                <nav className="filters">
                                    <ul className="filters__list">
                                        <li className="filters__el">
                                            <a className="filters__a active" href="#">Poligrafia</a>
                                            <div className="filters__wrap-submenu">
                                                <div className="filters__submenu js-scrollbar">
                                                    <div className="filters__submenu-inner">
                                                        <ul className="filters__submenu-list ">
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Wizytówki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Ulotki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Ulotki
                                                                    składane</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Plakaty</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Teczki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Katalogi</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Papier</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Papier
                                                                    firmowy</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Koperty</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Zaproszenia</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Notesy</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Broszury</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Karty</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Pocztówki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Pieczątki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Potykacze</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Metki </a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Książki</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '968px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '968px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="filters__el">
                                            <a className="filters__a" href="#">Wielki format</a>
                                            <div className="filters__wrap-submenu">
                                                <div className="filters__submenu js-scrollbar">
                                                    <div className="filters__submenu-inner">
                                                        <ul className="filters__submenu-list ">
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Folie</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Tablice
                                                                    reklamowe</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Roll up</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Bannery</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Siatki Mesh</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Fotoobrazy</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Fototapety</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Blacklight</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Blockout</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Canvas</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">One way vision
                                                                    (auta)</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Wydruk bez
                                                                    kasety</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Billboardy</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '694px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '694px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="filters__el">
                                            <a className="filters__a" href="#">Inne</a>
                                            <div className="filters__wrap-submenu">
                                                <div className="filters__submenu js-scrollbar">
                                                    <div className="filters__submenu-inner">
                                                        <ul className="filters__submenu-list ">
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Kalendarze</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Naklejki /
                                                                    Etykiety</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Druk
                                                                    dokumentów</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Arkusz Plano</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Bilety</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Dyplomy</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Kalendarze
                                                                    listkowe</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Druk UV</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Magnesy
                                                                    reklamowe</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Druki
                                                                    samokopiujące</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Biuwary</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Wydruki na
                                                                    szkle</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Linijki /
                                                                    zakładki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Torby</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Tabliczki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Nacinanie
                                                                    ploterem</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Proof</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Metki i zawieszki
                                                                    ekskluzywne</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Przyłbica
                                                                    ochronna</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Certyfikaty</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Maseczki
                                                                    ochronne</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Leżak</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Etui</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '1267px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '1267px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="filters__el">
                                            <a className="filters__a" href="#">Gadżety</a>
                                            <div className="filters__wrap-submenu">
                                                <div className="filters__submenu js-scrollbar">
                                                    <div className="filters__submenu-inner">
                                                        <ul className="filters__submenu-list ">
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Otwieracze</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Przypinki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Długopisy</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Kubki
                                                                    reklamowe</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Prezerwatywy
                                                                    reklamowe</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Zawieszki
                                                                    zapachowe</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">T-shirt /
                                                                    Koszulki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Smycze
                                                                    reklamowe</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Czapki</a>
                                                            </li>
                                                            <li className="filters__sub-el">
                                                                <a className="filters__sub-a" href="#">Pendrive</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '553px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                    <div className="scroll__bar"
                                                         style={{display: 'block', height: '553px'}}>
                                                        <div className="scrollbar2">
                                                            <div className="scrollbar2__bar"></div>
                                                            <div className="scrollbar2__point"
                                                                 style={{height: '100%'}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="listing__body">
                                <div className="row listing__primary">
                                    <div className="listing__main container">
                                        <div className="listing__breadcrumbs"></div>
                                        <div className="listing__boxes">
                                            {Object.entries(printHousesData).map(([key, value]) => (
                                                <PrintHouseDetails name={value.name} photoSrc={value.imgLink}
                                                                   linkTxt={value.text} link={value.link}/>
                                            ))}
                                            <PrintHouseDetails name={'Miejsce na Twoją reklamę'} link={"#"}
                                                               photoSrc={""}
                                                               linkTxt={'Miejsce na Twoją reklamę'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    &#xFEFF;
                    <div className="modal fade" id="contact-info">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                                    </button>
                                    <h4 className="modal-title"></h4>
                                </div>
                                <div className="modal-body text-center">
                                    <h3 className="modal-heading text-center">Dane kontaktowe do osoby dedykowanej do
                                        współpracy</h3>
                                    <h2 className="modal-phone"></h2>
                                    <h2 className="modal-email"></h2>
                                </div>
                            </div>
                            {/*/.modal-content */}
                        </div>
                        {/*/.modal-dialog */}
                    </div>
                    {/*/.modal */}


                </div>
            </div>
            <Footer/>
        </>

    );
};