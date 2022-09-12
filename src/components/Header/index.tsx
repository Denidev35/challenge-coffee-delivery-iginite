import { MapPin, ShoppingCart } from 'phosphor-react'

import { Cart, HeaderContainer, Locale } from './styles'

import logoCoffeDelivery from '../../assets/logoCoffeDelivery.svg'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffeeItems } = useContext(CartContext)

  const totalItems = coffeeItems.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeDelivery} alt="" />
      </NavLink>
      <nav>
        <Locale>
          <MapPin size={22} weight="fill" />
          Salvador, Ba
        </Locale>
        <NavLink to="/checkout">
          <Cart data-badge={totalItems}>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
