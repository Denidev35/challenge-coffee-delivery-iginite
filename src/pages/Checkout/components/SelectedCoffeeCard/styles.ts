import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  gap: 3.6875rem;

  width: 23rem;
  height: 5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const SeparatorCoffeeSelected = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const BoxIconAndQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const BoxTexAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const TextCoffee = styled.span`
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const BoxButtons = styled.div`
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

  /* width: 2.25rem; */
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
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
  text-align: center;
  color: ${(props) => props.theme['base-title']};
`

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
  border: 0;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.6;
  cursor: pointer;

  width: 5.6875rem;
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PriceCoffee = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
  white-space: nowrap;
`
