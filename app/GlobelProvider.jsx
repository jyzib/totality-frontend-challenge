
import { CartProvider } from '../context/cartContext'
const GlobelProvider = ({children}) => {
  return (
   <CartProvider>
    {children}
   </CartProvider>
  )
}

export default GlobelProvider
