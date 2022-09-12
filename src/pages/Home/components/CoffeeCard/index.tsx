import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CoffeeContext'
import { formatValue } from '../../../../utils/formatValue'
import {
  CoffeeCardContainer,
  TagCoffee,
  TagContainer,
  TitleCoffee,
  DescriptionCoffee,
  BuyCoffeeContainer,
  PriceCoffee,
  ContainerAmountButton,
  ContainerQuantity,
  ButtonQuantity,
  Quantity,
  ButtonCart,
} from './styles'

export interface Coffee {
  id: string
  image: string
  label: string[]
  title: string
  description: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CartContext)

  function handleIncraseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecraseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    const newItemCart = {
      ...coffee,
      quantity,
    }
    addToCart(newItemCart)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <TagContainer>
        {coffee.label.map((tag) => {
          return <TagCoffee key={tag}>{tag}</TagCoffee>
        })}
      </TagContainer>
      <TitleCoffee>{coffee.title}</TitleCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <BuyCoffeeContainer>
        <PriceCoffee>{formatValue(coffee.price)}</PriceCoffee>
        <ContainerAmountButton>
          <ContainerQuantity>
            <ButtonQuantity onClick={handleDecraseQuantity}>
              <Minus size={14} />
            </ButtonQuantity>
            <Quantity>{quantity}</Quantity>
            <ButtonQuantity onClick={handleIncraseQuantity}>
              <Plus size={14} />
            </ButtonQuantity>
          </ContainerQuantity>
          <ButtonCart onClick={handleAddToCart}>
            <ShoppingCart size={22} color="#fff" weight="fill" />
          </ButtonCart>
        </ContainerAmountButton>
      </BuyCoffeeContainer>
    </CoffeeCardContainer>
  )
}
