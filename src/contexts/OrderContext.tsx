import { createContext, ReactNode, useEffect, useState } from 'react'
import { CartItem } from './CoffeeContext'

export interface Order {
  address: {
    cep: string
    street: string
    number: number
    complement: string
    district: string
    city: string
    uf: string
  }
  paymentMethod: string
  itemsCart: CartItem[]
}

interface OrderContextType {
  order: Order | undefined
  addToOrder: (newOrder: Order) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>(() => {
    const storedStateJSON = localStorage.getItem('@coffee-delivey:state-order')

    if (storedStateJSON) {
      return JSON.parse(storedStateJSON)
    }
    return undefined
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(order)
    localStorage.setItem('@coffee-delivey:state-order', stateJSON)
  }, [order])

  function addToOrder(newOrder: Order) {
    setOrder(newOrder)
  }

  return (
    <OrderContext.Provider value={{ order, addToOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
