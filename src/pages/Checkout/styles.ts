import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2.5rem;
  gap: 2rem;
`
export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
`
export const TitleBox = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.9375rem;
`

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
