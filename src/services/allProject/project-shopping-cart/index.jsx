import React, { useEffect } from 'react'
import './style.css'

function ShoppingCart () {
  useEffect(() => {
    const script = require('./script').default
    script()
  }, [])

  return (
    <div className='body'>
      <header className="header">
        <div className="container-title">
          <span className="title">
            <strong>shopping</strong>
          </span>
        </div>
        <i className="material-icons">shopping_cart</i>
        <div className="container-cartTitle">
          <span className="cart__title">Meu carrinho</span>
          <div className="price-display">
            <strong>
              Valor Total - R$ <span className="total-price"></span>
            </strong>
          </div>
        </div>
      </header>
      <section className="container">
        <section className="items"></section>
        <section className="cart">
          <ol className="cart__items"></ol>
          <button className="empty-cart">Esvaziar carrinho</button>
        </section>
      </section>
    </div>
  )
}

export default ShoppingCart
