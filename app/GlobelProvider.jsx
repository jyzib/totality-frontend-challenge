
import { CartProvider } from '@/Context/CartContext'
const GlobelProvider = ({children}) => {
  return (
   <CartProvider>
    {children}
   </CartProvider>
  )
}

export default GlobelProvider
