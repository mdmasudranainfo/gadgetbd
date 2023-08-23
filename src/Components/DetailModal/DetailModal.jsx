/* eslint-disable react/prop-types */

import {
  // AiFillPhone,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai'

import delivery from '../../assets/image/delivery.png'
import cash from '../../assets/image/cash.png'
import pay from '../../assets/image/paywith.png'
// import playstore from '../../assets/image/playstore.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeQuantity } from '../../Redux/features/cart/cartSlice'

const DetailModal = ({ product, setProduct }) => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.cart)
  const porductQ = products.find(p => p.id === product.id)
  return (
    <div className="z-30 fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-[#00000088]">
      <div className="w-[800px]  max-w-full bg-white p-5 rounded-md relative">
        {/* close button start  */}
        <div className="absolute top-5 right-5 cursor-pointer">
          <AiOutlineClose
            onClick={() => setProduct('')}
            className="text-2xl text-red-700 z-50"
          />
        </div>
        {/* close button end */}
        <div className="flex flex-col md:flex-row  gap-5">
          <div className="flex justify-center">
            <img className="md:w-full w-20" src={product?.image} alt="" />
          </div>
          <div className="">
            <h2 className="md:text-[25px] md:text-left text-center font-bold">
              {product?.title}
            </h2>

            <h3 className="md:text-[25px] md:text-left text-center font-bold text-[#444444] my-4">
              ৳{product?.price}
            </h3>
            <div className=" border-b pb-5">
              <div className="flex-col md:flex-row flex items-center w-full gap-3 ">
                <div className="flex items-center text-5xl border justify-between w-[250px]">
                  <AiOutlineMinus
                    onClick={() => dispatch(removeQuantity(product))}
                    className="bg-[#00000021] p-2 cursor-pointer"
                  />
                  <span>{porductQ?.quantity ? porductQ?.quantity : 0}</span>
                  <AiOutlinePlus
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-[#00000021] p-2 cursor-pointer"
                  />
                </div>
                <div className="">
                  <button className="w-[150px] py-3 bg-[#FB7679] text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex md:flex-row flex-col justify-between">
          <div className="flex md:flex-row flex-col items-center md:gap-4">
            <p className="flex items-center">
              <img src={delivery} alt="" />
              <span>30 minute delivery</span>
            </p>
            <p className="flex items-center">
              <img src={cash} alt="" />
              <span>Cash on delivery</span>
            </p>
          </div>
          <div className="">
            <img src={pay} alt="" />
          </div>
        </div>

        {/* <div className="flex mt-10">
          <div className="w-[60%] gap-4">
            <p className="text-[#615E58]">
              Gadget BD.com is an online shop available in Dhaka, Chattogram and
              Jashore. We believe time is valuable to our fellow residents, and
              that they should not have to waste hours in traffic, brave bad
              weather and wait in line just to buy basic necessities like eggs!
              This is why Gadget BD delivers everything you need right at your
              door-step and at no additional cost.
            </p>
          </div>
          <div className="">
            <div className="">
              <div className="flex justify-between gap-4">
                <img src={playstore} alt="" />
                <img src={playstore} alt="" />
              </div>
              <div className="flex items-end flex-col mt-5">
                <p className="text-[25px] flex items-center gap-1 text-[#615E58]">
                  <AiFillPhone /> <span>16710</span>
                </p>
                <p className="text-[#615E58]">or support@chaldal.com</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default DetailModal
