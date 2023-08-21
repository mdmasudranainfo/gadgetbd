import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './Bannar.css'
import bannar from '../../assets/image/slider_one 1.png'

const Bannar = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <AiOutlineArrowRight className="text-black text-[30px]" />,
    prevArrow: <AiOutlineArrowLeft className="text-black text-[30px]" />,
  }

  return (
    <div className="container mx-auto bannar z-10">
      <div>
        <Slider {...settings}>
          {/* 1 */}
          <div className="relative">
            <img className="w-full" src={bannar} alt="" />
            <div className="absolute bottom-[46px] w-full flex justify-center">
              <h1 className="md:text-[35px] sm:text-xl text-sm text-white">
                This is the best gadget of BD
              </h1>
            </div>
          </div>
          {/* 2 */}
          <div className="relative">
            <img className="w-full" src={bannar} alt="" />
            <div className="absolute bottom-[46px] w-full flex justify-center">
              <h1 className="md:text-[35px] sm:text-xl text-sm text-white">
                This is the best gadget of BD
              </h1>
            </div>
          </div>
          {/* 3 */}
          <div className="relative">
            <img className="w-full" src={bannar} alt="" />
            <div className="absolute bottom-[46px] w-full flex justify-center">
              <h1 className="md:text-[35px] sm:text-xl text-sm text-white">
                This is the best gadget of BD
              </h1>
            </div>
          </div>
          {/* 4 */}
          <div className="relative">
            <img className="w-full" src={bannar} alt="" />
            <div className="absolute bottom-[46px] w-full flex justify-center">
              <h1 className="md:text-[35px] sm:text-xl text-sm text-white">
                This is the best gadget of BD
              </h1>
            </div>
          </div>
          {/* 5 */}
          <div className="relative">
            <img className="w-full" src={bannar} alt="" />
            <div className="absolute bottom-[46px] w-full flex justify-center">
              <h1 className="md:text-[35px] sm:text-xl text-sm text-white">
                This is the best gadget of BD
              </h1>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Bannar
