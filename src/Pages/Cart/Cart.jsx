import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  RemoveCart,
  addToCart,
  removeQuantity,
} from '../../Redux/features/cart/cartSlice'
import { useEffect } from 'react'

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { products, totall } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  //
  let Discount = totall * 0.04
  let vat = totall * 0.08
  let DeliveryCharge = 120

  if (totall >= 500 && totall <= 1000) {
    DeliveryCharge = 120 / 2
  }
  if (totall >= 1000) {
    DeliveryCharge = 0
  }

  let totalPrice = vat + totall + DeliveryCharge - Discount

  return (
    <div className="container mx-auto md:px-0 px-4">
      <h1 className="text-xl mb-5">Shopping Cart</h1>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="md:col-span-3">
          {products?.map(product => (
            <div
              key={product?.id}
              className="flex md:flex-row flex-col items-center gap-3 justify-between border rounded-md shadow p-2 mb-3"
            >
              <div className="flex items-center gap-2">
                <img className="w-[80px]" src={product?.image} alt="" />
                <div className="">
                  <p>{product?.title}</p>
                  <p>{product?.price}</p>
                </div>
              </div>
              {/*  */}
              <div className="flex  items-center gap-[50px]">
                <div className="flex items-center text-lg gap-4 font-bold">
                  <AiOutlinePlus
                    onClick={() => dispatch(addToCart(product))}
                    className="cursor-pointer"
                  />
                  <span>{product?.quantity}</span>
                  <AiOutlineMinus
                    onClick={() => dispatch(removeQuantity(product))}
                    className="cursor-pointer"
                  />
                </div>
                <h1 className="font-bold">
                  {product?.quantity * product?.price}
                </h1>

                <div className="">
                  <AiOutlineDelete
                    onClick={() => dispatch(RemoveCart(product))}
                    className="text-2xl text-[#FF4444] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" border shadow p-5">
          <h1 className="font-bold text-xl text-center">Bill Details</h1>
          <div className="">
            <p className="flex justify-between mt-4">
              <span>Sub Total</span> <span>{totall}</span>
            </p>
            <p className="flex justify-between">
              <span>Discount</span> <span>{Discount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>VAT</span> <span>{vat.toFixed(0)}</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Charge</span> <span>{DeliveryCharge}</span>
            </p>
            <p className="flex justify-between">
              <span>TOTAL</span> <span>{totalPrice.toFixed(2)}</span>
            </p>
          </div>
          <button className="text-white uppercase bg-[#000000] mt-5 w-full rounded-md py-1">
            place order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
