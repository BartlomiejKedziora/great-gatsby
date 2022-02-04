import React from "react";


const HeroForm = () => {

    return(
        <>
            <div className="hero-form__wrapper">
                <div className="container">
                    <form className="hero-form">
                        <div className="hero-form__title">Lorem ipsum <br></br>
                        Lorem ipsum lorem ipsum</div>
                        <div className="hero-form__subtitle">consectetur adipiscing elit. Ut auctor arcu </div>
                        <div className="hero-form__cta">Zostaw kontakt, zadzwonimy do Ciebie</div>
                        <input type="text" name="name" className="hero-form__item" placeholder="Imię i nazwisko" />
                        <input type="number" name="phone" className="hero-form__item" placeholder="Telefon" />
                        <input type="email" name="email" className="hero-form__item" placeholder="Email" />
                        <input type="text" name="additional" className="hero-form__item" placeholder="Lorem ipsum lorem ipsum" />
                        <div className="hero-form__checkbox-wrapper">
                        <input type="checkbox" className="hero-form__checkbox" />
                        <label className="hero-form__checkbox-label">
                            Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...
                        </label>
                        </div>
                        
                        <button type="submit" className="hero-form__btn">Wyślij</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HeroForm;