import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'

import illustrationImg from '../../assets/Illustration.png'
import { OrderContext } from '../../contexts/OrderContext'

import {
  SuccessContainer,
  OrderInformation,
  ConfirmedOrderTitle,
  ConfirmedOrderText,
  OrderInfoCard,
  BoxOrderInfo,
  BoxOrderInfoTexts,
  OrderInfoText,
  IconInfo,
} from './styles'

export function Success() {
  const { order } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <OrderInformation>
        <ConfirmedOrderTitle>Uhu! Pedido confirmado</ConfirmedOrderTitle>
        <ConfirmedOrderText>
          Agora é só aguardar que logo o café chegará até você
        </ConfirmedOrderText>

        <OrderInfoCard>
          <BoxOrderInfo>
            <IconInfo backgroundColor="#8047F8">
              <MapPin size={16} color="#fff" weight="fill" />
            </IconInfo>
            <BoxOrderInfoTexts>
              <OrderInfoText>
                Entrega em{' '}
                <strong>
                  {order?.address.street}, {order?.address.number}
                </strong>
              </OrderInfoText>
              <OrderInfoText>
                {order?.address.district} - {order?.address.city},{' '}
                {order?.address.uf}
              </OrderInfoText>
            </BoxOrderInfoTexts>
          </BoxOrderInfo>

          <BoxOrderInfo>
            <IconInfo backgroundColor="#DBAC2C">
              <Timer size={16} color="#fff" weight="fill" />
            </IconInfo>
            <BoxOrderInfoTexts>
              <OrderInfoText>Previsão de entrega</OrderInfoText>
              <OrderInfoText>
                <strong>20 min - 30 min </strong>
              </OrderInfoText>
            </BoxOrderInfoTexts>
          </BoxOrderInfo>

          <BoxOrderInfo>
            <IconInfo backgroundColor="#C47F17">
              <CurrencyDollar size={16} color="#fff" weight="fill" />
            </IconInfo>
            <BoxOrderInfoTexts>
              <OrderInfoText>Pagamento na entrega</OrderInfoText>
              <OrderInfoText>
                <strong>{order?.paymentMethod}</strong>
              </OrderInfoText>
            </BoxOrderInfoTexts>
          </BoxOrderInfo>
        </OrderInfoCard>
      </OrderInformation>
      <img src={illustrationImg} alt="" />
    </SuccessContainer>
  )
}
