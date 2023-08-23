/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Redux/features/cart/cartSlice'
import heart from '../../assets/image/heart 1.png'
import { useContext } from 'react'
import { AuthContext } from '../../Contaxt/UserContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const modalHandler = produc => {
    if (!user?.uid) {
      navigate('/login')
    } else {
      setProduct(produc)
    }
  }

  const { products } = useSelector(state => state.cart)
  const porductQ = products.find(p => p.id === product.id)

  return (
    <div className="mt-5">
      <div className="flex justify-center flex-col p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-7 rounded-lg mx-3 relative trandingBox">
        <img src={product?.image} alt="" />

        <div className="absolute top-7 right-7 opacity-0 heart">
          <img src={heart} alt="" />
        </div>

        <div className="">
          <h2 className="text-lg font-bold text-center mt-[10px]">
            {product?.title}
          </h2>

          <div className="text-[18px] font-bold flex justify-between mt-[18px] mb-[23px]">
            <p>Price: {product?.price}</p>
            <p>
              Quantity:
              {(() => {
                let stock = typeof porductQ?.stock

                switch (stock) {
                  case 'undefined':
                    return product?.stock
                  default:
                    return porductQ?.stock
                }
              })()}
            </p>
          </div>
          <div className=" flex justify-between">
            <button
              disabled={porductQ?.stock < 1}
              onClick={() => dispatch(addToCart(product))}
              className="text-[18px] font-bold text-white hover:bg-[#09D04D] bg-[#069938] duration-300 ease-in w-[125px] py-1 rounded-full"
            >
              Add to cart
            </button>
            <button
              onClick={() => modalHandler(product)}
              className="text-[18px] font-bold text-white hover:bg-[#8469A7] bg-[#54426B] duration-300 ease-in w-[125px] py-1 rounded-full"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
