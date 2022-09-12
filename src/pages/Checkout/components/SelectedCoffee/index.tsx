import { useContext } from 'react'

import { CartContext } from '../../../../contexts/CoffeeContext'
import { formatValue } from '../../../../utils/formatValue'
import { SelectedCoffeeCard } from '../SelectedCoffeeCard'

import {
  BoxPrice,
  BoxSelectedCoffee,
  ButtonConfirmOrder,
  PriceRows,
  TextPrice,
} from './styles'

export function SelectedCoffee() {
  const { coffeeItems } = useContext(CartContext)

  const totalItems = coffeeItems.reduce((acum, coffeePrice) => {
    return (acum += coffeePrice.price * coffeePrice.quantity)
  }, 0)

  const total = totalItems + 3.5

  return (
    <BoxSelectedCoffee>
      {coffeeItems.map((coffee) => {
        return <SelectedCoffeeCard coffee={coffee} key={coffee.id} />
      })}

      <BoxPrice>
        <PriceRows>
          <TextPrice size={0.875} weigth="regular" colorText="#574F4D">
            Total de itens
          </TextPrice>
          <TextPrice size={1} weigth="regular" colorText="#574F4D">
            R$ {formatValue(totalItems)}
          </TextPrice>
        </PriceRows>
        <PriceRows>
          <TextPrice size={0.875} weigth="regular" colorText="#574F4D">
            Entrega
          </TextPrice>
          <TextPrice size={1} weigth="regular" colorText="#574F4D">
            R$ 3,50
          </TextPrice>
        </PriceRows>
        <PriceRows>
          <TextPrice size={1.25} weigth="bold" colorText="#403937">
            Total
          </TextPrice>
          <TextPrice size={1.25} weigth="bold" colorText="#403937">
            R$ {formatValue(total)}
          </TextPrice>
        </PriceRows>
      </BoxPrice>
      <ButtonConfirmOrder type="submit" form="order">
        confirmar pedido
      </ButtonConfirmOrder>
    </BoxSelectedCoffee>
  )
}
