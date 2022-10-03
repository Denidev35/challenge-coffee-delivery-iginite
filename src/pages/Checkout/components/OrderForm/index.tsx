import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FocusEventHandler, useContext } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../../contexts/CoffeeContext'
import { Order, OrderContext } from '../../../../contexts/OrderContext'

import {
  BoxIconTexts,
  BoxTexts,
  Input,
  InputContainer,
  OrderAndPaymentContainer,
  OrderFormContainer,
  PaymentMethod,
  PaymentMethodButton,
  TextBoxTexts,
  TitleBoxTexts,
} from './styles'

const orderFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentMethod: z.string(),
})

type OrderFormData = z.infer<typeof orderFormSchema>

export function OrderForm() {
  const { addToOrder } = useContext(OrderContext)
  const { coffeeItems, removeAllCartItem } = useContext(CartContext)
  const { register, handleSubmit, setValue, setFocus, control } =
    useForm<OrderFormData>({
      resolver: zodResolver(orderFormSchema),
    })
  const navigate = useNavigate()

  const checkCEP: FocusEventHandler<HTMLInputElement> = (event) => {
    const cep = event.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty('erro')) {
          alert('Cep incorreto')
        } else {
          setValue('street', data.logradouro)
          setValue('district', data.bairro)
          setValue('city', data.localidade)
          setValue('uf', data.uf)
          setFocus('number')
        }
      })
  }

  function handleCreateNewOrder(data: OrderFormData) {
    const {
      cep,
      street,
      number,
      complement,
      district,
      city,
      uf,
      paymentMethod,
    } = data
    const newOrder: Order = {
      address: {
        cep,
        street,
        number,
        complement,
        district,
        city,
        uf,
      },
      paymentMethod,
      itemsCart: coffeeItems,
    }
    addToOrder(newOrder)
    if (!paymentMethod) {
      alert('Escolha forma de pagamento')
      return
    }
    removeAllCartItem()
    navigate('/success')
  }

  return (
    <>
      <OrderAndPaymentContainer>
        <BoxIconTexts>
          <MapPinLine size={22} color="#C47F17" />
          <BoxTexts>
            <TitleBoxTexts>Endereço de Entrega</TitleBoxTexts>
            <TextBoxTexts>
              Informe o endereço onde deseja receber seu pedido
            </TextBoxTexts>
          </BoxTexts>
        </BoxIconTexts>
        <OrderFormContainer
          id="order"
          onSubmit={handleSubmit(handleCreateNewOrder)}
        >
          <Input
            placeholder="CEP"
            width="medium"
            {...register('cep')}
            onBlur={checkCEP}
            required
            maxLength={8}
            minLength={8}
          />
          <Input placeholder="Rua" width="great" {...register('street')} />
          <InputContainer>
            <Input
              placeholder="Número"
              type="number"
              width="medium"
              min={1}
              required
              {...register('number', { valueAsNumber: true })}
            />
            <Input
              placeholder="Complemento"
              width="great"
              {...register('complement')}
            />
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Bairro"
              width="medium"
              {...register('district')}
              required
            />
            <Input
              placeholder="Cidade"
              width="great"
              {...register('city')}
              required
            />
            <Input
              placeholder="UF"
              width="small"
              {...register('uf')}
              required
            />
          </InputContainer>
        </OrderFormContainer>
      </OrderAndPaymentContainer>
      <OrderAndPaymentContainer>
        <BoxIconTexts>
          <CurrencyDollar size={22} color="#8047F8" />
          <BoxTexts>
            <TitleBoxTexts>Pagamento</TitleBoxTexts>
            <TextBoxTexts>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </TextBoxTexts>
          </BoxTexts>
        </BoxIconTexts>
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => {
            return (
              <PaymentMethod onValueChange={field.onChange} value={field.value}>
                <PaymentMethodButton value="Cartão de Crédito">
                  <CreditCard size={16} color="#8047F8" />
                  Cartão de Crédito
                </PaymentMethodButton>
                <PaymentMethodButton value="Cartão de Débito">
                  <Bank size={16} color="#8047F8" />
                  Cartão de Débito
                </PaymentMethodButton>
                <PaymentMethodButton value="Dinheiro">
                  <Money size={16} color="#8047F8" />
                  Dinheiro
                </PaymentMethodButton>
              </PaymentMethod>
            )
          }}
        />
      </OrderAndPaymentContainer>
    </>
  )
}
