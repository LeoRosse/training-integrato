import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export const LandingPage = () => (
    <div>
        <Navigation />
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Training Integrato</span>
                    <span className="heading-primary--sub">Alberto Santarato</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Scienze Motorie - Personal Training - Naturopatia
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Training Integrato
                        </h3>
                        <p className="paragraph">
                            Percorso mirato al raggiungimento e mantenimento di un buono stato di salute e di forma fisica. Si basa su un corretto stile di vita, su una alimentazione consapevole e su una attività fisica mirata.
                        </p>
                        <a href="#popup_1" className="btn-text buttonPopup">Scopri di più &rarr;</a>
                    </div>
                    {/*                 <div className="composition">
                        <video muted loop autoPlay className="video">
                            <source src="video/videoNuovoSmall.mov" />
                        </video>
        </div>*/}
                </div>
            </section>

            <section className="section-features">
                <div className="row">
                    <div className="feature-box">
                        <h3 className="heading-tertiary u-margin-bottom-small">Composizione Corporea</h3>
                        <span className="feature-box__text">
                            Conoscere la <b>composizione corporea</b> non vuol dire solo conoscere il proprio peso, ma significa capire in modo oggettivo ed analitico da cosa è composto e come le componenti cambiano nel tempo.
                            <br />
                            <br />
                            Attraverso la <b>metodica BIA</b> siamo in grado di analizzare:
                            <ul className="feature-box__list">
                                <li>lo stato di idratazione</li>
                                <li>valutare la quantità di muscolo e grasso corporeo</li>
                                <li>stimare il metabolismo basale</li>
                                <li>analizzare lo stato di stress cellulare</li>
                            </ul>
                        </span>
                        <a href="/composizionecorporea" className="btn-text">Scopri di più &rarr;</a>

                    </div>

                </div>
            </section>
            <section className="section-tours" id="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Scopri la tua necessità
                </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <a href="/sport"><div className="card__picture card__picture--1">
                                    &nbsp;
                            </div></a>
                                <h4 className="card__heading">
                                    <span className="card__heading-span">
                                        Sport
                                </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Personal Training</li>
                                        <li>Preparazione Atletica</li>
                                        <li>Rieducazione Funzionale</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    {/*                                     <div className="card__price-box">
                                        <p className="card__price-value">€50</p>
                                    </div> */}
                                    {/*<a href="#popup_2" className="btn btn--white">Scopri di più</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <a href="/relax"><div className="card__picture card__picture--2">
                                    &nbsp;
                            </div></a>
                                <h4 className="card__heading">
                                    <span className="card__heading-span">
                                        Relax
                                </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Massaggio Olistico</li>
                                        <li>Trattamento Riequilibrante</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    {/*                                     <div className="card__price-box">
                                        <p className="card__price-value">€60</p>
                                    </div> */}
                                    {/*<a href="#popup_2" className="btn btn--white">Scopri di più</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <a href="/salute"><div className="card__picture card__picture--3">
                                    &nbsp;
                            </div></a>
                                <h4 className="card__heading">
                                    <span className="card__heading-span">
                                        Salute
                                </span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Training Integrato</li>
                                        <li>Alimentazione Consapevole</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    {/*                                     <div className="card__price-box">
                                            <p className="card__price-value">€75</p>
                                        </div> */}
                                    {/*<a href="#popup_2" className="btn btn--white">Scopri di più</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*             <section className="section-stories">
                <div className="bg-video">
                    <img src="images/people-writing.jpg" alt="People writing" className="bg-video__content" />
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Percorsi al passo con la ricerca
                </h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                         <figcaption className="story__caption">
                                Mary Smith
                        </figcaption>
                        </figure>

                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, molestias architecto? Asperiores, totam numquam culpa similique
                            commodi, modi maxime delectus dolore, ipsum eum odio ab voluptatum distinctio aliquid. Numquam,
                            nulla!
                        </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                         <figcaption className="story__caption">
                                Jack Wilson
                        </figcaption>
                        </figure>

                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Wow my life is completely different now</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, molestias architecto? Asperiores, totam numquam culpa similique
                            commodi, modi maxime delectus dolore, ipsum eum odio ab voluptatum distinctio aliquid. Numquam,
                            nulla!
                        </p>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Vai agli articoli &rarr;</a>
                </div>
            </section> */}
        </main>
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="images/Logo3dtrasp.png" alt="Full Logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__logo--box">
                        <a href="http://www.facebook.com/trainingintegrato.it" target="blank"><i className="fab fa-facebook-square icon"></i></a>
                        <a href="https://www.youtube.com/user/albertosantarato" target="blank"><i className="fab fa-youtube icon"></i></a>
                        <a href="https://www.instagram.com/trainingintegrato/" target="blank"><i className="fab fa-instagram icon"></i></a>
                    </div>
                    <div className="footer__copyright">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Partner</a>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact" className="footer__link">
                                    Contattaci</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/info" className="footer__link">Curriculum</Link>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Termini e privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="footer__logo--box">
                        <a href="http://www.cnmitalia.com/"><img src="images/CNM-Logo.png" alt="CNM Logo" className="footer__logo__cnm" /></a>
                        <a href="https://www.unifi.it"><img src="images/logo-unifi.png" alt="Unifi Logo" className="footer__logo__unifi" /></a>
                        <a href="https://web.uniroma2.it/"><img src="images/logo-TorVergata.png" alt="CNM Logo" className="footer__logo__vergata" /></a>
                    </div>
                    <p className="footer__copyright">
                        Built by <a href="" className="footer__link"> Leonardo Rosseti</a> {/* for his site
                    <a href="" className="footer__link">Advanced Site</a> Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for
                    both personal and commercial use, but NOT to claim it as your own design. A credit to the original author
                    is of cours highly appreciated! */}
                    </p>
                </div>
            </div>
        </footer>




        <div className="popup" id="popup_1">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="images/sport_popup-web.jpg" alt="Sport" className="popup__img" />
                </div>
                <div className="popup__right">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Percorso:
                    </h3>
                    <div className="paragraph">
                        <ul className="paragraph__list">
                            <li className="paragraph__item">Colloquio Iniziale</li>
                            <li className="paragraph__item">Studio della costituzione</li>
                            <li className="paragraph__item">Analisi BIA</li>
                            <li className="paragraph__item">Educazione Alimentare</li>
                        </ul>
                    </div>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Al termine della consulenza vengono indicati:
                    </h3>
                    <div className="paragraph">
                        <ul className="paragraph__list">
                            <li className="paragraph__item">Consigli per un sano stile di vita</li>
                            <li className="paragraph__item">Regole generali per una corretta alimentazione</li>
                            <li className="paragraph__item">Suggerimenti di tecniche da praticare a casa</li>
                            <li className="paragraph__item">Indicazione per una adeguata attività fisica</li>
                        </ul>
                    </div>
                    <a href="/contact" className="btn btn--green">Contatta</a>

                </div>
            </div>
        </div>
    </div>
);


export default LandingPage;
