import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  coffeeItems: CartItem[]
  addToCart: (coffee: CartItem) => void
  incraseQuantityItem: (coffee: CartItem) => void
  decreseQuantityItem: (Coffee: CartItem) => void
  removeItemCoffee: (id: string) => void
  removeAllCartItem: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeItems, setCoffeeItems] = useState<CartItem[]>(() => {
    const storedStateJSON = localStorage.getItem(
      '@coffee-delivey:state-coffee-items',
    )

    if (storedStateJSON) {
      return JSON.parse(storedStateJSON)
    }

    return []
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeItems)
    localStorage.setItem('@coffee-delivey:state-coffee-items', stateJSON)
  }, [coffeeItems])

  function addToCart(coffee: CartItem) {
    const itemAlreadyExistis = coffeeItems.find((item) => {
      return item.id === coffee.id
    })
    if (itemAlreadyExistis) {
      setCoffeeItems(
        coffeeItems.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + coffee.quantity }
            : item,
        ),
      )
    } else {
      setCoffeeItems((state) => [...state, coffee])
    }
  }

  function incraseQuantityItem(coffee: CartItem) {
    setCoffeeItems(
      coffeeItems.map((item) =>
        item.id === coffee.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  function decreseQuantityItem(coffee: CartItem) {
    setCoffeeItems(
      coffeeItems.map((item) =>
        item.id === coffee.id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    )
  }

  function removeItemCoffee(id: string) {
    const removeCart = coffeeItems.filter((item) => {
      return id !== item.id
    })
    setCoffeeItems(removeCart)
    localStorage.removeItem('@coffee-delivey:state-coffee-items')
  }

  function removeAllCartItem() {
    setCoffeeItems([])
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        coffeeItems,
        incraseQuantityItem,
        decreseQuantityItem,
        removeItemCoffee,
        removeAllCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
