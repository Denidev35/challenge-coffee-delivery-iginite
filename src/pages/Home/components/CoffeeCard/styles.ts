import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 16rem;
  height: 19.375rem;
  padding: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -40px;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
`
export const TagCoffee = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
`

export const TitleCoffee = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
`

export const DescriptionCoffee = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  margin-top: 0.5rem;
`

export const BuyCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.0625rem;
  gap: 1.8125rem;
`
export const PriceCoffee = styled.span`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.3;

  &::before {
    content: 'R$';
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    margin-right: 0.3125rem;
  }
`

export const ContainerAmountButton = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`

export const ContainerQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 4.5rem;
`

export const ButtonQuantity = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const Quantity = styled.span`
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-title']};
`
export const ButtonCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 0;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
