import styled from 'styled-components'

export const CartEmptyWraper = styled.div`
  max-width: 40rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 40px;

  margin-top: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextCarEmpty = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme['base-subtitle']};
`
export const CartEmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
    height: 25rem;
    margin-top: 3.125rem;
  }
`
