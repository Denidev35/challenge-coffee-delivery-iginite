import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  IconItem,
  Intro,
  Items,
  ItemsRow,
  Title,
  TitleItems,
  Item,
  CoffeeContainer,
  CoffeeList,
} from './styles'

import imageCoffe from '../../assets/ImageCoffe.svg'

import { CoffeeCard } from './components/CoffeeCard'

import { coffees } from '../../../coffees'

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <TitleItems>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <Items>
            <ItemsRow>
              <Item>
                <IconItem backgroundColor="#C47F17">
                  <ShoppingCart size={16} weight="fill" color="#fff" />
                </IconItem>
                Compra simples e segura
              </Item>

              <Item>
                <IconItem backgroundColor="#DBAC2C">
                  <Timer size={16} weight="fill" color="#fff" />
                </IconItem>
                Entrega rápida e rastreada
              </Item>
            </ItemsRow>
            <ItemsRow>
              <Item>
                <IconItem backgroundColor="#574F4d">
                  <Package size={16} weight="fill" color="#fff" />
                </IconItem>
                Embalagem mantém o café intacto
              </Item>
              <Item>
                <IconItem backgroundColor="#8047F8">
                  <Coffee size={16} weight="fill" color="#fff" />
                </IconItem>
                O café chega fresquinho até você
              </Item>
            </ItemsRow>
          </Items>
        </TitleItems>
        <img src={imageCoffe} alt="" />
      </Intro>
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map((coffee) => {
            return <CoffeeCard coffee={coffee} key={coffee.id} />
          })}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
