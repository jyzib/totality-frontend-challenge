
import { CartProvider } from '../CartContext/cartContext'
const GlobelProvider = ({children}) => {
  return (
   <CartProvider>
    {children}
   </CartProvider>
  )
}

export default GlobelProvider
