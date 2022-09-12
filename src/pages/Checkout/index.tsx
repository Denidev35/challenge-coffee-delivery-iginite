import {
  CheckoutContainer,
  CompleteOrder,
  SelectedCoffeeContainer,
  TitleBox,
} from './styles'

import { OrderForm } from './components/OrderForm'
import { SelectedCoffee } from './components/SelectedCoffee'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CoffeeContext'
import { CartEmpty } from './components/CartEmpty'

export function Checkout() {
  const { coffeeItems } = useContext(CartContext)

  return (
    <div>
      {coffeeItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <CheckoutContainer>
          <CompleteOrder>
            <TitleBox>Complete seu pedido</TitleBox>
            <OrderForm />
          </CompleteOrder>
          <SelectedCoffeeContainer>
            <TitleBox>Cafés selecionados</TitleBox>
            <SelectedCoffee />
          </SelectedCoffeeContainer>
        </CheckoutContainer>
      )}
    </div>
  )
}
