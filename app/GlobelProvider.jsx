
import { CartProvider } from '@/context/CartContext'
const GlobelProvider = ({children}) => {
  return (
   <CartProvider>
    {children}
   </CartProvider>
  )
}

export default GlobelProvider
