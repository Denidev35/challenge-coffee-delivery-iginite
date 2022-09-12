import styled from 'styled-components'

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  margin-bottom: 1.5rem;
`

export const PriceRows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`
interface TextPriceProps {
  size: number
  weigth: string
  colorText: string
}

export const TextPrice = styled.span<TextPriceProps>`
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weigth};
  color: ${(props) => props.colorText};
  line-height: 1.3;
`
export const ButtonConfirmOrder = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 700;
  border: 0;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
export const BoxSelectedCoffee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  width: 100%;
`
