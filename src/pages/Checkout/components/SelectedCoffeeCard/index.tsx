import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext, CartItem } from '../../../../contexts/CoffeeContext'
import { formatValue } from '../../../../utils/formatValue'
import {
  BoxButtons,
  BoxTexAndButtons,
  ButtonQuantity,
  ButtonRemove,
  ContainerQuantity,
  PriceAndTextCoffee,
  PriceCoffee,
  Quantity,
  SelectedCoffeeContainer,
  TextCoffee,
} from './styles'

interface SelectedCoffeeProps {
  coffee: CartItem
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeProps) {
  const { incraseQuantityItem, decreseQuantityItem, removeItemCoffee } =
    useContext(CartContext)

  function handleDecreseItem() {
    if (coffee.quantity > 1) {
      decreseQuantityItem(coffee)
    }
  }

  function handleIncreseItem() {
    incraseQuantityItem(coffee)
  }

  function handleRemoveItem() {
    removeItemCoffee(coffee.id)
  }

  const priceItems = coffee.price * coffee.quantity
  return (
    <SelectedCoffeeContainer>
      <img src={coffee.image} alt="" />
      <BoxTexAndButtons>
        <PriceAndTextCoffee>
          <TextCoffee>{coffee.title}</TextCoffee>
          <PriceCoffee>R$ {formatValue(priceItems)}</PriceCoffee>
        </PriceAndTextCoffee>
        <BoxButtons>
          <ContainerQuantity>
            <ButtonQuantity onClick={handleDecreseItem}>
              <Minus size={14} color="#8047F8" />
            </ButtonQuantity>
            <Quantity>{coffee.quantity}</Quantity>
            <ButtonQuantity onClick={handleIncreseItem}>
              <Plus size={14} color="#8047F8" />
            </ButtonQuantity>
          </ContainerQuantity>
          <ButtonRemove onClick={handleRemoveItem}>
            <Trash size={16} color="#8047F8" />
            Remover
          </ButtonRemove>
        </BoxButtons>
      </BoxTexAndButtons>
    </SelectedCoffeeContainer>
  )
}
