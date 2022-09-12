import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext, CartItem } from '../../../../contexts/CoffeeContext'
import { formatValue } from '../../../../utils/formatValue'
import {
  BoxButtons,
  BoxIconAndQuantity,
  BoxTexAndButtons,
  ButtonQuantity,
  ButtonRemove,
  ContainerQuantity,
  PriceCoffee,
  Quantity,
  SelectedCoffeeContainer,
  SeparatorCoffeeSelected,
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
    <>
      <SelectedCoffeeContainer>
        <BoxIconAndQuantity>
          <img src={coffee.image} alt="" />
          <BoxTexAndButtons>
            <TextCoffee>{coffee.title}</TextCoffee>
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
        </BoxIconAndQuantity>
        <PriceCoffee>R$ {formatValue(priceItems)}</PriceCoffee>
      </SelectedCoffeeContainer>
      <SeparatorCoffeeSelected />
    </>
  )
}
