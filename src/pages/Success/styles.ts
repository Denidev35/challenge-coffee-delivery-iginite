import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.3125rem;
  margin-top: 5rem;

  img {
    width: 492px;
    height: 293px;
    margin-top: 6.25rem;
  }
`
export const OrderInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ConfirmedOrderTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.3;
  color: ${(porps) => porps.theme['yellow-dark']};
`
export const ConfirmedOrderText = styled.p`
  font-size: 1.25rem;
  line-height: 1.3;
  margin-top: 0.25rem;
  color: ${(porps) => porps.theme['base-subtitle']};
`

export const OrderInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 6px 36px;
  margin-top: 2.5rem;
  position: relative;
  background-color: ${(props) => props.theme.background};
  background-clip: padding-box;
  border: 1px solid transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    z-index: -1;
  }
`
export const BoxOrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const BoxOrderInfoTexts = styled.p``
export const OrderInfoText = styled.div`
  font-size: 1rem;
  line-height: 1.3;
  color: ${(porps) => porps.theme['base-text']};
`
interface IconInfoProps {
  backgroundColor: string
}
export const IconInfo = styled.div<IconInfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
`
