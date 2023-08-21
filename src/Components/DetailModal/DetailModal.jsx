/* eslint-disable react/prop-types */

import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import delivery from '../../assets/image/delivery.png'
import cash from '../../assets/image/cash.png'
import pay from '../../assets/image/paywith.png'

const DetailModal = ({ product, setProduct }) => {
  console.log('prod', product)
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-[#00000088]">
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
          <div className="">
            <img src={product?.image} alt="" />
          </div>
          <div className="">
            <h2 className="text-[25px] font-bold">{product?.title}</h2>

            <h3 className="text-[25px] font-bold text-[#444444] my-4">
              ৳{product?.price}
            </h3>
            <div className=" border-b pb-5">
              <div className="flex-col md:flex-row flex items-center w-full gap-3 ">
                <div className="flex items-center text-5xl border justify-between w-[250px]">
                  <AiOutlineMinus className="bg-[#00000021] p-2 cursor-pointer" />
                  <span>0</span>
                  <AiOutlinePlus className="bg-[#00000021] p-2 cursor-pointer" />
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

        <div className="mt-5 flex justify-between">
          <div className="flex gap-4">
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
      </div>
    </div>
  )
}

export default DetailModal
