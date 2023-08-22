import laptop from '../../assets/image/laptopC.png'
import tab from '../../assets/image/tabC.png'
import headphone from '../../assets/image/headPhoneC.png'
import earphone from '../../assets/image/earphoneC.png'
import talivation from '../../assets/image/telivationC.png'
import phone from '../../assets/image/phpneC.png'
import { BsArrowRight } from 'react-icons/bs'
import './PopularCategory.css'
import { Link } from 'react-router-dom'

const PopularCategory = () => {
  return (
    <div className="container mx-auto md:px-0 px-4">
      <h1 className="md:text-[35px] text-lg text-center font-bold mb-[46px] ">
        Popular Category
      </h1>

      {/* carads start */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2  mb-5 gap-6">
        <div className="">
          <div className="py-[77px] md:px-0 px-3 bg-[#6AC4D8] flex flex-col justify-center items-center relative rounded-lg box box">
            <div className="absolute top-6 right-6 text-white">
              <Link to="product/laptop">
                <BsArrowRight className="text-5xl rounded-full  cursor-pointer duration-300 p-2 icone" />
              </Link>
            </div>
            <img src={laptop} alt="" />
            <h1 className="text-3xl mt-2">Laptop</h1>
          </div>

          <div className="pt-[50px] p-2 mt-7 bg-[#D9D9D9] flex flex-col justify-center items-center relative rounded-lg box">
            <div className="absolute top-2 right-2 text-white">
              <Link to="product/Tab">
                <BsArrowRight className="text-5xl rounded-full  cursor-pointer duration-300 p-2 icone" />
              </Link>
            </div>
            <img src={tab} alt="" />
            <h1 className="text-3xl mt-2">Tab</h1>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-2 gap-[25px]">
            <div className="pt-[50px] p-2  bg-[#FFBB55] flex flex-col justify-center items-center relative rounded-lg box">
              <div className="absolute top-2 right-2 text-white">
                <Link to="product/Headphone">
                  <BsArrowRight className="text-5xl rounded-full  cursor-pointer duration-300 p-2 icone" />
                </Link>
              </div>
              <img src={headphone} alt="" />
              <h1 className="md:text-3xl mt-2">Headphone</h1>
            </div>

            <div className="pt-[50px] p-2  bg-[#B9747E] flex flex-col justify-center items-center relative rounded-lg box">
              <div className="absolute top-2 right-2 text-white">
                <Link to="product/earphone">
                  <BsArrowRight className="text-5xl rounded-full  cursor-pointer duration-300 p-2 icone" />
                </Link>
              </div>
              <img src={earphone} alt="" />
              <h1 className="md:text-3xl mt-2">earphone</h1>
            </div>
          </div>
          <div className="mt-7 py-[53px] md:px-0 px-3 bg-[#6AC4D8] flex flex-col justify-center items-center relative rounded-lg box">
            <div className="absolute top-2 right-2 text-white">
              <Link to="product/Television">
                <BsArrowRight className="text-5xl rounded-full  cursor-pointer duration-300 p-2 icone" />
              </Link>
            </div>
            <img src={talivation} alt="" />
            <h1 className="text-3xl mt-2">Television</h1>
          </div>
        </div>

        <div className="">
          <div className="h-full px-[28px] md:yt-0 py-5 bg-[#9C648A] flex flex-col justify-center items-center relative rounded-lg box">
            <div className="absolute top-8 right-8 text-white">
              <Link to="product/Phone">
                <BsArrowRight className="text-5xl rounded-full  cursor-pointer duration-300 p-2 icone" />
              </Link>
            </div>
            <img src={phone} alt="" />
            <h1 className="text-3xl mt-2">Phone</h1>
          </div>
        </div>
      </div>

      {/* carads start */}
    </div>
  )
}

export default PopularCategory
