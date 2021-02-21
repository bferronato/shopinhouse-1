import React, { Fragment, useState, useEffect } from 'react';
import { FaTrash, FaArrowDown } from 'react-icons/fa'
import './Card.css'

let buttonClick = false

const Card = ({ card, setActiveCard, setBag, setOperation }) => {

    const [active, setActive] = useState(false)
    const [activeDesc, setActiveDesc] = useState(false)
    const [expansiveTitle, setExpansiveTitle] = useState(false)
    const [titleSmall, setTitleSmall] = useState(card.name.substr(0,16))

    useEffect(() => {
        setActiveDesc(!activeDesc)
    }, [active])

    const titleSize = (range) => {
        if (active) {
            if (range <= 43) { return "48px" }
            if (range <= 57) { return "35px" }
            if (range <= 80) { return "27px" }
            if (range > 80) { return "20px" }
        } else {

        }
    }

    console.log(expansiveTitle);
    const Card__body__small = {
        width: "258px",
        height: "448px"
    };
    const Card__body__medium = {
        width: "1128px",
        height: "260px"
    };
    const Card__header__img__small = {
        width: "226px",
        height: "226px",
        top: "10px",
        left: "16px",
        background: `url('${card.image}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        animation: "animation__initial 1s"
    }
    const Card__header__img__medium = {
        width: "195px",
        height: "195px",
        top: "32px",
        left: "32px",
        background: `url('${card.image}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        animation: "animation__focus 2s"
    }
    const Card__section__title__small = {
        width: "70%",
        height: expansiveTitle ? "120px" : "24px",
        top: "252px",
        left: "16px",
        fontSize: "18px",
        transition:  "1s",
        animation: "animation__initial 1s"
    }
    const Card__section__title__medium = {
        width: "90%",
        top: "-64px",
        left: "2px",
        fontSize: titleSize(card.name.length),
        animation: "animation__focus 2s",
        padding: "10px"
    }
    const Card__section__price__high__small = {
        top: "322px",
        left: "16px",
        animation: "animation__initial 1s",
        display: expansiveTitle ? "none" : "block"
    }
    const Card__section__price__high__medium = {
        top: "96px",
        left: "259px",
        animation: "animation__focus 2s"
    }
    const Card__section__installments__small = {
        top: "348px",
        left: "16px",
        animation: "animation__initial 1s",
        display: expansiveTitle ? "none" : "block"
    }
    const Card__section__installments__medium = {
        top: "128px",
        left: "259px",
        animation: "animation__focus 2s"
    }
    const Card__footer__button__buy_small = {
        top: "388px",
        left: "16px",
        animation: "animation__initial 1s"
    }
    const Card__footer__button__buy_medium = {
        top: "184px",
        left: "259px",
        animation: "animation__focus 2s"
    }
    const Card__section__desc__enable = {
        display: "block",
        animation: "animation__focus 2s"
    }
    const Card__section__desc__disable = {
        display: "none"
    }
    const Card__footer__amountBag__sub__small = {
        top: "388px",
        left: "16px",
        animation: "animation__initial 1s"
    }
    const Card__footer__amountBag__sub__medium = {
        top: "184px",
        left: "259px",
        animation: "animation__focus 2s"
    }
    const Card__footer__amountBag__sum__small = {
        top: "388px",
        left: "198px",
        animation: "animation__initial 1s"
    }
    const Card__footer__amountBag__sum__medium = {
        top: "184px",
        left: "441px",
        animation: "animation__focus 2s"
    }
    const Card__footer__amountBag_small = {
        top: "399px",
        left: "119px",
        animation: "animation__initial 1s"
    }
    const Card__footer__amountBag_medium = {
        top: "184px",
        left: "362px",
        animation: "animation__focus 1s"
    }
    const Card__section_expansiveTitle = {

    }
    const activeCard = () => {
        if (!buttonClick) {
            if (!active) {
                setActiveCard(card.id)
                setActive(true)
            } else {
                setActiveCard('')
                setActive(false)
            }
        } else { buttonClick = false }
    };
    const buyButton = () => {
        buttonClick = true

        setBag(card.id)
        setOperation('sum')
    }
    const backButton = () => {
        buttonClick = true

        setBag(card.id)
        setOperation('sub')
    }
    const expansiveClick = () => {
        buttonClick = true
        setExpansiveTitle(!expansiveTitle)
        if (expansiveTitle) {
            setTitleSmall(card.name)
        } else  {card.name.substr(0,16)}
        console.log(titleSmall);
    }

    return (
        <Fragment>
            <article title={card.nome} style={!active ? Card__body__small : Card__body__medium} className="Card__body" onClick={activeCard}>
                <header>
                    <img style={!active ? Card__header__img__small : Card__header__img__medium} className="Card__header__img"></img>
                </header>
                <section>
                    <header>
                        <span style={!active ? Card__section__title__small : Card__section__title__medium} className="Card__section__title">{!active ? titleSmall.toUpperCase() : card.name.toUpperCase()}</span><button className="Card__section_expansiveTitle" onClick={expansiveClick}><FaArrowDown /></button>
                        <span title={card.description} style={!activeDesc ? Card__section__desc__enable : Card__section__desc__disable} className="Card__section__desc">{card.description}</span>
                    </header>
                    <section>
                        <span style={!active ? Card__section__price__high__small : Card__section__price__high__medium} className="Card__section__price__high">
                            {"R$ " + String(card.price).substr(0, 2)}
                            <span className="Card__section__price__small">{"," + String(card.price).substr(3)}</span>
                        </span>
                        <span style={!active ? Card__section__installments__small : Card__section__installments__medium} className="Card__section__installments">{`ou 10x de ${(card.price / 10).toFixed(2)}`}</span>
                    </section>
                </section>
                <footer>
                    {card.shipping < 1 && <button style={!active ? Card__footer__button__buy_small : Card__footer__button__buy_medium} className="Card__footer__button__buy" onClick={buyButton}>Comprar</button>}
                    {card.shipping >= 1 &&
                        <Fragment>
                            <button style={activeDesc ? Card__footer__amountBag__sub__small : Card__footer__amountBag__sub__medium} className="Card__footer__amountBag__sub" onClick={backButton}>{card.shipping > 1 ? "-" : <FaTrash />}</button>
                            <span style={activeDesc ? Card__footer__amountBag_small : Card__footer__amountBag_medium} className="Card__footer__amountBag">{card.shipping}</span>
                            <button style={activeDesc ? Card__footer__amountBag__sum__small : Card__footer__amountBag__sum__medium} className="Card__footer__amountBag__sum" onClick={buyButton}>+</button>
                        </Fragment>
                    }
                </footer>
            </article>
        </Fragment>
    );
};

export default Card;