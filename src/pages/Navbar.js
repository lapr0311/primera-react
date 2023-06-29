import React from 'react'
import CartWidget from '../components/Cartwidget/CartWidget'

export default function Navbar() {
  return (
    <nav>

        <h3>Autos</h3>

        <div>

            <button> Jeep</button>
            <button> Fiat</button>
            <button> Kia</button>

         </div>

         <CartWidget/>



    </nav>
  )
}
