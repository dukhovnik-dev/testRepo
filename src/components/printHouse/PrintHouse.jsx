import React, {useEffect} from 'react';
import $ from 'jquery';
import {PhOutsourcedProducts} from "./products/PHOutsourcedProducts";
import {Footer} from "../Footer";
import {PrintHouseBox} from "./products/printHouseBox";

export const PrintHouse = (props) => {

    const {outSourcedProductsData, printHouseData} = props;

    useEffect(() => {
        $(document).ready(function () {
            $('.filters__sub-a').each(function () {
                $(this).attr('href', './lista-drukarni#' + $(this).text().toLowerCase().replace(/_/g, '-'));
            });

            $('.filters__a').each(function () {
                $(this).attr('href', './lista-drukarni#parent_' + $(this).text().toLowerCase().replace(/_/g, '-'));
            });
        });
    }, []);

    return (
        <>
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
                                        <input type="text" className="search__textinput" id="search__input" name="s"/>
                                        <button type="submit" className="btn--search" id="search__btn">
                                            <img src="./img/search.png" alt="" className="icon-search"/>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="primary">
                    <div className="listing">
                        <div className="listing__bckg"></div>
                        <div className="listing__header">
                            <div className="c-row section__header c-container">
                                <h2 className="title title--underline">
                                    <small className="undertitle">Sieć współpracy</small> Dostępne drukarnie
                                </h2>
                            </div>
                        </div>
                        &#xFEFF;
                        <div className="listing__filters container">
                            <nav className="filters">
                                <ul className="filters__list">

                                    <li className="filters__el">
                                        <a className="filters__a active"
                                           href="./lista-drukarni#parent_poligrafia">Poligrafia</a>
                                        <div className="filters__wrap-submenu">
                                            <div className="filters__submenu js-scrollbar">
                                                <div className="filters__submenu-inner">
                                                    <ul className="filters__submenu-list ">
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#wizytówki">Wizytówki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#ulotki">Ulotki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#ulotki-składane">Ulotki
                                                                składane</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#plakaty">Plakaty</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#teczki">Teczki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#katalogi">Katalogi</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#papier">Papier</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#papier-firmowy">Papier firmowy</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#koperty">Koperty</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#zaproszenia">Zaproszenia</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#notesy">Notesy</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#broszury">Broszury</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#karty">Karty</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#pocztówki">Pocztówki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#pieczątki">Pieczątki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#potykacze">Potykacze</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#metki-  ">Metki </a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#książki">Książki</a>
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
                                        <a className="filters__a" href="./lista-drukarni#parent_wielki-format">Wielki
                                            format</a>
                                        <div className="filters__wrap-submenu">
                                            <div className="filters__submenu js-scrollbar">
                                                <div className="filters__submenu-inner">
                                                    <ul className="filters__submenu-list ">
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#folie">Folie</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#tablice-reklamowe">Tablice
                                                                reklamowe</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#roll-up">Roll
                                                                up</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#bannery">Bannery</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#siatki-mesh">Siatki
                                                                Mesh</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#fotoobrazy">Fotoobrazy</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#fototapety">Fototapety</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#blacklight">Blacklight</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#blockout">Blockout</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#canvas">Canvas</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#one-way vision (auta)">One way
                                                                vision
                                                                (auta)</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#wydruk-bez kasety">Wydruk bez
                                                                kasety</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#billboardy">Billboardy</a>
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
                                        <a className="filters__a" href="./lista-drukarni#parent_inne">Inne</a>
                                        <div className="filters__wrap-submenu">
                                            <div className="filters__submenu js-scrollbar">
                                                <div className="filters__submenu-inner">
                                                    <ul className="filters__submenu-list ">
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#kalendarze">Kalendarze</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#naklejki-/ etykiety">Naklejki /
                                                                Etykiety</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#druk-dokumentów">Druk
                                                                dokumentów</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#arkusz-plano">Arkusz
                                                                Plano</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#bilety">Bilety</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#dyplomy">Dyplomy</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#kalendarze-listkowe">Kalendarze
                                                                listkowe</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#druk-uv">Druk
                                                                UV</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#magnesy-reklamowe">Magnesy
                                                                reklamowe</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#druki-samokopiujące">Druki
                                                                samokopiujące</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#biuwary">Biuwary</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#wydruki-na szkle">Wydruki na
                                                                szkle</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#linijki-/ zakładki">Linijki /
                                                                zakładki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#torby">Torby</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#tabliczki">Tabliczki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#nacinanie-ploterem">Nacinanie
                                                                ploterem</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#proof">Proof</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#metki-i zawieszki ekskluzywne">Metki
                                                                i
                                                                zawieszki ekskluzywne</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#przyłbica-ochronna">Przyłbica
                                                                ochronna</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#certyfikaty">Certyfikaty</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#maseczki-ochronne">Maseczki
                                                                ochronne</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#leżak">Leżak</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#etui">Etui</a>
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
                                        <a className="filters__a" href="./lista-drukarni#parent_gadżety">Gadżety</a>
                                        <div className="filters__wrap-submenu">
                                            <div className="filters__submenu js-scrollbar">
                                                <div className="filters__submenu-inner">
                                                    <ul className="filters__submenu-list ">
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#otwieracze">Otwieracze</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#przypinki">Przypinki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#długopisy">Długopisy</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#kubki-reklamowe">Kubki
                                                                reklamowe</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#prezerwatywy-reklamowe">Prezerwatywy
                                                                reklamowe</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#zawieszki-zapachowe">Zawieszki
                                                                zapachowe</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#t-shirt-/ koszulki">T-shirt /
                                                                Koszulki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#smycze-reklamowe">Smycze
                                                                reklamowe</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#czapki">Czapki</a>
                                                        </li>
                                                        <li className="filters__sub-el">
                                                            <a className="filters__sub-a"
                                                               href="./lista-drukarni#pendrive">Pendrive</a>
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
                            <div className="listing__breadcrumbs c-container">
                                <a className="btn--back" href="./lista-drukarni">
                                    <i className="icon-arrow-back"> &lt; </i> Lista drukarni
                                </a>
                            </div>
                            <div className="c-row listing__primary c-container">
                                <div className="listing__main2">
                                    <div className="listing__box">
                                        <div className="lbox">
                                            <PrintHouseBox printHouseData={printHouseData}/>
                                            <div className="lbox__buttons">
                                                <a className="c-btn btn--primary btn--full" data-toggle="modal"
                                                   data-target="#contact-info" href="">Współpracuj</a>
                                                <div style={{height: '18px'}}></div>
                                                <a className="c-btn btn--secondary btn--full"
                                                   href="https://iwareprint.pl/uruchom" target="_blank">Uruchom system
                                                    IwarePrint</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PhOutsourcedProducts outSourcedProductsData={outSourcedProductsData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};