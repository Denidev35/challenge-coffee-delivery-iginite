import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export const OrderFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: 'great' | 'small' | 'medium'
}

export const Input = styled.input<InputProps>`
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  height: 2.625rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  width: ${(props) =>
    props.width === 'great'
      ? '100%'
      : props.width === 'medium'
      ? '200px'
      : '60px'};

  &::placeholder {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }
`
export const OrderAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-bottom: 12px;
  width: 100%;
`

export const BoxIconTexts = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const BoxTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`

export const TitleBoxTexts = styled.h2`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
`

export const TextBoxTexts = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
export const PaymentMethodButton = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 0;
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;

  width: 11.166875rem;
  height: 3.1875rem;

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`
