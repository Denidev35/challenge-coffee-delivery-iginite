import { CartEmptyContainer, TextCarEmpty, CartEmptyWraper } from './styles'

import emptyBox from '../../../../assets/empty-box.svg'

export function CartEmpty() {
  return (
    <CartEmptyContainer>
      <CartEmptyWraper>
        <TextCarEmpty>
          Seu carrinho está vazio, preencha-o e volte para realizar sua compra
        </TextCarEmpty>
      </CartEmptyWraper>
      <img src={emptyBox} alt="" />
    </CartEmptyContainer>
  )
}
