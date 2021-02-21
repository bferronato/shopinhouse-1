import React, { useState, useEffect } from 'react';
import Card from './Components/Card/Card';
import './App.css'

const INITIAL_CARD = [
  {
    id: 1,
    name: 'MMMMMMMMMMM',
    price: 19.99,
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with 1987 - 1993 Mitsubishi and Chrysler vehicles; color-coded wires',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643691_rc.jpg',
  },
  {
    id: 2,
    name: 'Metra - Speaker Connector for Select Mitsubdsadas das das',
    price: 19.99,
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with 1987 - 1993 Mitsubishi and Chrysler vehicles; color-coded wires',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643691_rc.jpg',
  },
  {
    id: 3,
    name: 'Metra - Speaker Connector for Select Mitsubishi and Chrysler Vehicles',
    price: 19.99,
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with 1987 - 1993 Mitsubishi and Chrysler vehicles; color-coded wires',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643691_rc.jpg',
  },
  {
    id: 4,
    name: 'A condicional switch avalia uma expressão, combinando o valor da expressão para voce eu',
    price: 19.99,
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with 1987 - 1993 Mitsubishi and Chrysler vehicles; color-coded wires',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643691_rc.jpg',
  }
];

function App() {

  const [card, setCard] = useState(INITIAL_CARD)
  const [activeCard, setActiveCard] = useState('')
  const [bag, setBag] = useState('')
  const [operation, setOperation] = useState('')

  useEffect(() => {
    const preventCard = card

    for (const x in preventCard) {
      if (preventCard[x].id === bag) {
        if (operation === 'sum') {
          preventCard[x].shipping += 1
        } else {preventCard[x].shipping -= 1}
        
        setCard(preventCard)
        break
      }
    }
    setBag(0)

  }, [bag])
 
  return (
    <div className="App_body">
      {
        card.map((item) => {
          if (activeCard.length === 0) {
            return <Card card={item} setBag={setBag} setOperation={setOperation} key={item.id} setActiveCard={setActiveCard} />
          } else if (item.id === activeCard) {
            return <Card card={item} setBag={setBag} setOperation={setOperation} key={item.id} setActiveCard={setActiveCard} />
          }
        })
      }
    </div>
  );
}

export default App;
