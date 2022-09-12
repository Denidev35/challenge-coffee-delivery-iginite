import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`
const BaseActionNav = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.875rem;
  line-height: 1.3;
  padding: 0.5rem;
  border-radius: 6px;
`
export const Locale = styled(BaseActionNav)`
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
`
export const Cart = styled(BaseActionNav)`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  position: relative;

  &::after {
    content: attr(data-badge);
    position: absolute;
    top: -8px;
    right: -8.35px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    line-height: 1.3;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &[data-badge='0']::after {
    display: none;
  }
`
