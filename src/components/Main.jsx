import React from 'react';
import {Footer} from "./Footer";

export const Main = () => {
    return (
        <>
            <main>
                {/*MENU*/}
                <div id="c-header" className="section header--fixed">
                    <div className="c-container">
                        <div className="c-navbar" id="c-navbar">
                            <div className="navbar__grid">
                                <div className="navbar__el navbar__el--page-brand">
                                    <div className="page-brand">
                                        <img src="/img/logo-module-page.png" alt=""
                                             className="page-brand__img"/>
                                        <a href="/" className="page-brand__title">
                                            {/*<span className="page-brand__line">Moduł</span> */}
                                            <strong
                                                className="page-brand__line page-brand__line--strong">Podzlecanie</strong>
                                            <strong className="page-brand__line page-brand__line--strong">druku</strong>
                                        </a>
                                    </div>
                                </div>
                                <a className="navbar__el navbar__el--logo-ip" href="https://iwareprint.pl/">
                                    {/*<img src="img/logo-ip-color.png" alt="" className="navbar__logo navbar__logo--ip" />*/}
                                    <div className="navbar__logo navbar__logo--ip"></div>
                                </a>
                                <div className="navbar__el navbar__el--menu">
                                    <nav className="menu menu--main">
                                        <ul className="menu__list">
                                            <li className="menu__el"><a className="menu__a" href="#jakdziala">Jak
                                                działa</a>
                                            </li>
                                            <li className="menu__el"><a className="menu__a"
                                                                        href="#workflow">Workflow</a>
                                            </li>
                                            {/*<li className="menu__el"><a className="menu__a menu__active-item" href="#">Podzlecenie z drukomat.pl</a></li>*/}
                                            <li className="menu__el"><a className="menu__a"
                                                                        href="#iwareprint">IwarePrint</a></li>
                                            {/*<li className="menu__el"><a className="menu__a" href="https://iwareprint.pl/konferencja2021" target="_blank"> KONFERENCJA </a></li>*/}
                                            <li className="menu__el"><a className="menu__a"
                                                                        href="./lista-drukarni"> LISTA
                                                DRUKARNI </a>
                                            </li>
                                            <li className="menu__el"><a target="_blank" className="menu__a"
                                                                        href="https://iwareprint.pl/kontakt/">Kontakt</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="navbar__el navbar__el--btn">
                                    {/*<!--                    <a className="c-btn btn--primary btn--lg" href="https://creator.iwareprint.pl/">URUCHOM</a>-->*/}
                                </div>
                                <div className="navbar__el navbar__el--ham">
                                    <a className="hamburger" id="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                                <div className="navbar__el navbar__el--mobile">
                                    <nav className="menu menu--mobile">
                                        <ul className="menu__list">
                                            <li className="menu__el"><a className="menu__a" href="#jakdziala">Jak
                                                działa</a>
                                            </li>
                                            <li className="menu__el"><a className="menu__a menu__active-item"
                                                                        href="#workflow">Workflow</a>
                                            </li>
                                            {/*<li className="menu__el"><a className="menu__a menu__active-item" href="#">Podzlecenie z drukomat.pl</a></li>*/}
                                            <li className="menu__el"><a className="menu__a"
                                                                        href="#iwareprint">IwarePrint</a></li>
                                            {/*<li className="menu__el"><a className="menu__a" href="http://konferencja.podzlecdruk.pl/" target="_blank"> KONFERENCJA </a></li>*/}
                                            <li className="menu__el"><a className="menu__a" href="/listing"> LISTA
                                                DRUKARNI </a>
                                            </li>
                                            <li className="menu__el"><a target="_blank" className="menu__a"
                                                                        href="https://iwareprint.pl/kontakt/">Kontakt</a>
                                            </li>
                                            <li className="menu__el"><a className="c-btn btn--primary btn--lg"
                                                                        href="https://creator.iwareprint.pl/">Wypróbuj
                                                30
                                                dni za
                                                darmo</a></li>
                                            <li className="menu__el"><a className="menu__a" href="#"> <img
                                                src="/img/logo-ip-gray.png" alt=""
                                                className="navbar__logo navbar__logo--ip"/>
                                            </a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-header"></div>
                {/*end MENU */}

                {/*INTRO */}
                <section className="section section--intro">
                    <div className="section__inner">
                        <div className="slider">
                            <div className="slider__el">
                                <div className="intro">
                                    <div className="intro__inner c-container">
                                        <div className="intro__content">
                                            <div className="c-row">
                                                <h4 className="intro__subtitle">
                                                    Dedykowane dla Drukarni i Agencji Reklamowych
                                                </h4>
                                            </div>
                                            <div className="c-row">
                                                <h1 className="intro__title">
                                                    Rewolucja na rynku <br/> poligraficznym i reklamowym
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<a href="https://iwareprint.pl/konferencja2021" target="_blank"><img className="conf conf-desktop" src="./img/desktop.jpg" alt="Baner"></a>*/}
                            {/*<a href="https://iwareprint.pl/konferencja2021" target="_blank"><img className="conf conf-tablet" src="./img/tablet.jpg" alt="Baner"></a>*/}
                            {/*<a href="https://iwareprint.pl/konferencja2021" target="_blank"><img className="conf conf-mobile" src="./img/mobile.jpg" alt="Baner"></a>*/}

                            {/*<!-- <div className="slider__el">*/}
                            {/*<a className="intro intro--2" href="#">*/}
                            {/*    <div className="intro__float intro__float--top">*/}
                            {/*        <span className="intro__sep"></span>*/}
                            {/*    </div>*/}
                            {/*    <div className="intro__inner container">*/}
                            {/*        <div className="intro__content">*/}
                            {/*            <div className="row">*/}
                            {/*                <h2 className="intro__title">*/}
                            {/*                    Konferencja Podzlecania druku*/}
                            {/*                </h2>*/}
                            {/*            </div>*/}
                            {/*            <div className="row">*/}
                            {/*                <h4 className="intro__subtitle">*/}
                            {/*                    <strong>Miejsce: </strong> Hotel Focus<br/>*/}
                            {/*                    ul. Łąkowa 23, 90-554 Łódź*/}
                            {/*                </h4>*/}
                            {/*            </div>*/}
                            {/*            <div className="row">*/}
                            {/*                <p className="intro__date">07.12.2018</p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="intro__float intro__float--bottom">*/}
                            {/*        <img src="/img/img23143.png" alt="" className="intro__img"/>*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </section>
                {/*end INTRO */}

                {/*HOW */}
                <section className="section section--how" id="jakdziala">
                    <div className="section__inner ">
                        <div className="c-row section__header container">
                            <h2 className="title title--underline">Jak to działa</h2>
                        </div>
                        <div className="c-row section__main">
                            <div className="bw">
                                <div className="bw__part bw__part--1 ">
                                    <div className="part__content--left">
                                        <div className="c-row bw__row-title">
                                            <h3 className="title">Udostępniasz swoje produkty</h3>
                                        </div>
                                        <div className="c-row bw__row-main ">
                                            <div className="boxes">

                                                {/*box 1 */}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon1.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">1.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt">Uruchamiasz sklep on&#8209;line <br/>na
                                                            stronie
                                                            iwareprint.pl</p>
                                                    </div>
                                                </div>

                                                {/*box 2 */}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon2.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">2.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt">Tworzysz i Udostępniasz <br/>własne
                                                            produkty innym Drukarniom <br/>/ Agencjom Reklamowym</p>
                                                    </div>
                                                </div>

                                                {/*box 3 */}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon3.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">3.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt"> Drukarnia / Agencja Reklamowa Podzleca
                                                            Ci
                                                            usługę
                                                            druku, <br/>zbiera zamówienia, <br/>Ty realizujesz druk</p>
                                                    </div>
                                                </div>

                                                {/*box 4 */}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon4.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">4.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt">Wysyłasz w imieniu Klienta, <br/>zarabiasz
                                                            drukując <br/>u
                                                            siebie.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bw__part bw__part--2">
                                    <div className="part__content--right">
                                        <div className="c-row bw__row-title">
                                            <h3 className="title">Podzlecasz produkty od innych</h3>
                                        </div>
                                        <div className="c-row bw__row-main">
                                            <div className="boxes">
                                                {/*box 1 */}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon5.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">1.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt">Uruchamiasz sklep on-line <br/>na
                                                            stronie
                                                            iwareprint.pl
                                                        </p>
                                                    </div>
                                                </div>
                                                {/*box 2 */}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon6.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">2.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt">Zaciągasz produkty <br/>od innych
                                                            Drukarni <br/>/
                                                            Agencji
                                                            Reklamowych</p>
                                                    </div>
                                                </div>
                                                {/*box 3*/}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon7.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">3.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt">Zbierasz zamówienia, <br/>sprzedajesz
                                                            produkty
                                                            jako
                                                            własne, <br/>które realizuje Drukarnia <br/>/ Agencja
                                                            Udostępniająca</p>
                                                    </div>
                                                </div>
                                                {/*box 4*/}
                                                <div className="boxes__el box">
                                                    <div className="box__row box__row--img">
                                                        <img src="/img/icon8.png" alt="" className="box__img"/>
                                                        <div className="box__count count"><span
                                                            className="count__txt">4.</span>
                                                        </div>
                                                    </div>
                                                    <div className="box__row box__row--content">
                                                        <p className="box__txt">Wysyłkę z Twoimi danymi <br/>realizuje
                                                            Drukania <br/>/
                                                            Agencja Udostępniająca</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bw__float">
                                    <div className="bw__logo">
                                        <img src="/img/logo-ip.png" alt="" className="bw__float-logo"/>
                                    </div>
                                    <div className="bw__btn">
                                        <a className="c-btn btn--primary" href="#workflow">Czytaj więcej</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*end HOW*/}

                {/*WORKFLOW */}
                <section className="section section--workflow" id="workflow">
                    <div className="section__inner workflow">
                        <div className="c-row section__header container">
                            <h2 className="title title--underline">Workflow <span>(cykl zamówienia)</span></h2>
                        </div>

                        <div className="c-row section__main container">
                            <div className="workflow__parts">
                                <div className="workflow__part">
                                    <div className="c-row">
                                        <h4 className="workflow__title">Podzlecenie <strong>Workflow</strong></h4>
                                    </div>
                                    <div className="c-row">
                                        <p className="workflow__subtitle">Cykl zamówienia
                                            wygląda <span>w następujący sposób:</span></p>
                                    </div>
                                    <div className="c-row">
                                        <ul className="workflow__list">
                                            <li className="workflow__li">Złożenie przez Klienta zamówienia (oraz jego
                                                opłacenie)
                                                na
                                                sklepie Podzlecającego
                                            </li>
                                            <li className="workflow__li">Wgranie plików przez Klienta do zamówienia na
                                                sklepie
                                                Podzlecającego
                                            </li>
                                            <li className="workflow__li">Automatyczne podzlecenie całego zamówienie do
                                                Udostępniającego
                                                produkt
                                            </li>
                                            <li className="workflow__li">Opłacenie zamówienia dla Udostępniającego
                                                produkt
                                                (realizującego produkcję) **
                                            </li>
                                            <li className="workflow__li">Preflight (sprawdzanie plików) przez
                                                Udostępniającego
                                                produkt
                                            </li>
                                            <li className="workflow__li">Przekazanie zamówienia na produkcję
                                                Udostępniającego
                                                produkt
                                            </li>
                                            <li className="workflow__li">Obieg zlecenia na produkcji (zmiany statusów,
                                                komentarze między
                                                systemami)
                                            </li>
                                            <li className="workflow__li">Wysyłka realizowana przez Udostępniającego
                                                produkt
                                                z
                                                danymi
                                                Podzlecającego i jego Klienta
                                            </li>
                                            <li className="workflow__li workflow__li--active">Zakończenia zamówienia
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="workflow__subs">
                                        <small className="workflow__sub">(**dla płatności terminowych opłacenie
                                            następuje po
                                            zakończeniu
                                            zamówienia, w ustalonym terminie)</small>
                                    </div>

                                </div>
                                {/*<div className="workflow__part">*/}
                                {/*    <div className="row">*/}
                                {/*        <h4 className="workflow__title">Podzlecenie <strong>Workflow z preflightem Drukomat*/}
                                {/*            (DMT) </strong></h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="row">*/}
                                {/*        <ul className="workflow__list">*/}
                                {/*            <li className="workflow__li">ZłoĹźenie i opłacenie zamówienia przez Klienta na*/}
                                {/*                Twoim*/}
                                {/*                sklepie*/}
                                {/*                on-line*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li">Wgranie plików przez Klienta Twojego sklepu</li>*/}
                                {/*            <li className="workflow__li">Podzlecenie zamówienia do Drukomat.pl w sposób*/}
                                {/*                ręczny*/}
                                {/*                bądĹş*/}
                                {/*                automatyczny*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li">W Drukarni / Agencji zaciągającej produkty z*/}
                                {/*                drukomat.pl, w*/}
                                {/*                sekcji menagera plików pojawi się automatyczny Preflight drukomat.pl*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li">Sprawdzenie preflightu drukomat.pl, akceptacja*/}
                                {/*                plików*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li">Opłacenie zamówienia dla drukomat.pl ***/}
                                {/*                <small className="workflow__sub">(**dla płatności terminowych opłacenie*/}
                                {/*                    następuje po*/}
                                {/*                    zakończeniu zamówienia, w ustalonym terminie) </small>*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li">Przekazanie zamówienia na produkcję drukomat.pl*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li">Obieg zlecenia na produkcji drukomat.pl (zmiany*/}
                                {/*                statusów)*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li">Wysyłka realizowana przez drukomat.pl z Twoimi i*/}
                                {/*                Twojego*/}
                                {/*                Klienta danymi*/}
                                {/*            </li>*/}
                                {/*            <li className="workflow__li workflow__li--active">Zakończenie zamówienia</li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>


                    </div>
                </section>
                {/*end WORKFLOW */}

                {/*INFO */}
                {/*<section className="section section--info">*/}
                {/*    <div className="section__inner info container">*/}

                {/*        <div className="row">*/}
                {/*            <h2 className="info__title">Podzlecenie z <a href="#" className="pink">drukomat.pl</a></h2>*/}
                {/*        </div>*/}

                {/*        <div className="row">*/}
                {/*            <img src="../public/img/drukomat-logo.jpg" alt="drukomat" className="info__drukomat"/>*/}
                {/*        </div>*/}

                {/*        <div className="row">*/}
                {/*            <p className="info__subtitle">Moduł podzlecenia umoĹźliwia:</p>*/}
                {/*        </div>*/}

                {/*        <div className="row ">*/}
                {/*            <div className="info__parts">*/}

                {/*                <div className="info__part">*/}
                {/*                    <ul className="info__list">*/}
                {/*                        <li className="info__li"><strong>nawiązanie współpacy</strong> z drukomat.pl</li>*/}
                {/*                        <li className="info__li">zaciąganie produktów <strong>bezpośrednio z bazy*/}
                {/*                            drukomat.pl</strong>*/}
                {/*                        </li>*/}
                {/*                        <li className="info__li"><strong>automatyczne przekazywanie</strong> zamówień na*/}
                {/*                            produkcję do*/}
                {/*                            drukomat.pl*/}
                {/*                        </li>*/}
                {/*                        <li className="info__li">korzystanie z <strong>preflightu drukomat.pl</strong> **/}
                {/*                        </li>*/}
                {/*                        <li className="info__li">moĹźliwośÄ <strong>wykluczenia określonych*/}
                {/*                            nakładów</strong>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}

                {/*                <div className="info__part">*/}
                {/*                    <ul className="info__list">*/}
                {/*                        <li className="info__li">moĹźliwośÄ ustawienia <strong>identycznej kwoty*/}
                {/*                            bazowej</strong></li>*/}
                {/*                        <li className="info__li"><strong>dodawanie marĹźy procentowej</strong></li>*/}
                {/*                        <li className="info__li"><strong>modyfikator czasu realizacji</strong></li>*/}
                {/*                        <li className="info__li">przesyłka tylko z <strong>Twoimi i Twojego Klienta*/}
                {/*                            danymi</strong></li>*/}
                {/*                        <li className="info__li"><strong>płatności terminowe</strong></li>*/}
                {/*                        <li className="info__li"><strong>pełna automatyzacja</strong> obiegu zlecenia</li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}


                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="row ">*/}
                {/*            <div className="workflow__parts">*/}

                {/*                <div className="workflow__part">*/}
                {/*                    <div className="promo">*/}
                {/*                        <span className="promo__line">Z pewnością</span>*/}
                {/*                        <span className="promo__line">na start dajemy Ci</span>*/}
                {/*                        <strong className="promo__line promo__line--strong">30 dni testów</strong>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="workflow__part">*/}
                {/*                    <p className="workflow__sub">*/}
                {/*                        * Preflight Drukomat znajduje się w Panelu Administracyjnym systemu.*/}
                {/*                        Preflight Drukomat dostępny jest w panelu klienta w drukarni podzlecającej,*/}
                {/*                        wyłącznie jeśli*/}
                {/*                        posiada*/}
                {/*                        ona aktywny Moduł Preflight. Preflight Drukomat w panelu klienta wyświetla*/}
                {/*                        informację o*/}
                {/*                        ewentualnych*/}
                {/*                        błędach plików i umoĹźliwia akceptację plików przez klienta końcowego.*/}
                {/*                    </p>*/}
                {/*                </div>*/}

                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</section>*/}
                {/*end INFO*/}

                {/*float logo*/}
                <div className="logo-float">
                    <img src="/img/logo-ip.png" alt="LOGO FLOAT" className="logo-float__img"/>
                </div>

                {/*MODULES*/}
                <section className="section section--offer" id="iwareprint">
                    <div className="section__inner offer container-fluid">

                        <div className="c-row">
                            <p className="p1">
                                Pierwszy w Polsce w pełni automatyczny <strong style={{fontWeight: 900}}>system
                                Web2Print</strong>.<br/>
                                Rozwiązanie e-commerce do zarządzania produkcją i sprzedażą on-line.
                            </p>
                            <p className="p2">
                                Dedykowane dla Drukarni i Agencji Reklamowych
                            </p>
                        </div>


                        <div className="c-row row-title">
                            <h3 className="offer__title">Modułowa budowa</h3>
                            <p className="p3">Sam decydujesz który moduł <strong>jest Ci potrzebny</strong></p>
                        </div>
                        <img className="wheel" src="/img/ip3-0_wheel.png"/>
                    </div>
                </section>
                {/*end MODULES*/}

                {/*CTA*/}
                <section className="section section--cta">
                    <div className="section__inner">
                        <div className="cta c-container">
                            <div className="c-row">
                                <h2 className="cta__title">Sprawdź listę dostępnych drukarni</h2>
                            </div>
                            <div className="c-row">
                                <a className="c-btn btn--wide btn--primary" href="./lista-drukarni">Zobacz listę</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*end CTA*/}
                <div id="root"></div>
            </main>
            <Footer/>
        </>

    );
};
