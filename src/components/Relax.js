import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const relax = () => (
    <div>
        <Navigation />
        <header className="header__relax">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Relax</span>
                </h1>

                {/*                 <Link className="btn btn--white btn--animated" to="/dashboard-public">Entra</Link>
                <Link className="btn btn--white btn--animated" to="/login">Login</Link> */}

            </div>
        </header>
        <section className="section-home-fitness" id="section-relax">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary--relax">
                    Scegli il tuo trattamento
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="card--relax">
                        <div className="card--relax__side card--relax__side--front">
                            <div className="card--relax__picture card--relax__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card--relax__heading">
                                <span className="card--relax__heading-span card--relax__heading-span--2">
                                    Massaggio Olistico
                                </span>
                            </h4>
                            <div className="card--relax__details">
                                <p>
                                    Il massaggio Olistico è particolarmente utile per sciogliere tensioni fisiche ed emotive. Migliora la capacità di rilassamento e di ascolto corporeo.
                                    Favorisce la circolazione e l'ossigenazione dei tessuti, migliorando di conseguenza il drenaggio e la depurazione.
                                    Privilegiando tecniche specifiche, eseguite con ritmo più rapido e con utilizzo di olii sinergici che hanno un effetto tonificante sui tessuti e
                                    sull'umore. Nell'olio da massaggio è possibile solubilizzare facilmente olii essenziali che arricchiscono il ventaglio di principi attivi per ottenere 
                                    un prodotto finale più specifico per l'esigenze individuali. E' possibile creare anche misceli emulsionando Fiori di Bach utili per il bisogno della persona.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="card--relax">
                        <div className="card--relax__side card--relax__side--front">
                            <div className="card--relax__picture card--relax__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card--relax__heading">
                                <span className="card--relax__heading-span card--relax__heading-span--3">
                                    Trattamento Riequilibrante
                                </span>
                            </h4>
                            <div className="card--relax__details">
                                <p>
                                    Sedute di rimuscolazione post infortunio e recupero delle capacità condizionali per la ripresa dell'attività fisica e atletica.
                                    Viene strutturato un'allenamento specifico a corpo libero e con l'uso di sovraccarichi, coadiuvato da esercizi propriocettivi per
                                    migliorare equilibrio, tono muscolare e stabilità articolare.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="images/logo-trasparente.png" alt="Full Logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Partner</a>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact" className="footer__link">
                                    Contattaci</Link>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Curriculum</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Termini e privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="footer__logo--box">
                        <img src="images/CNM-Logo.png" alt="CNM Logo" className="footer__logo__cnm" />
                        <img src="images/logo-unifi.png" alt="Unifi Logo" className="footer__logo__unifi" />
                        <img src="images/logo-TorVergata.png" alt="CNM Logo" className="footer__logo__vergata" />
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
    </div>

);

export default relax;