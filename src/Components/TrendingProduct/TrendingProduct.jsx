import Slider from 'react-slick'
import { useGetTrendingProductQuery } from '../../Redux/api/apiSlice'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './TrendingProduct.css'
import heart from '../../assets/image/heart 1.png'
import { useContext, useState } from 'react'
import DetailModal from '../DetailModal/DetailModal'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/features/cart/cartSlice'
import { AuthContext } from '../../Contaxt/UserContext'
import { useNavigate } from 'react-router-dom'

const TrendingProduct = () => {
  const { data: products } = useGetTrendingProductQuery(undefined)
  const [product, setProduct] = useState()
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

  // slider settings
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <AiOutlineArrowRight className="text-black text-[30px]" />,
    prevArrow: <AiOutlineArrowLeft className="text-black text-[30px]" />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="container mx-auto md:mt-[96px] mt-10">
      <h1 className="md:text-[35px] text-lg font-bold text-center">
        Trending Product
      </h1>
      {/* card  start*/}

      <div className="trandingSlider md:mt-12 mt-5 mb-[100px]">
        <Slider {...settings}>
          {products?.slice(0, 8)?.map(product => (
            <div className="mt-5" key={product?.id}>
              <div className="flex justify-center flex-col p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-10 rounded-lg mx-3 relative trandingBox">
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
                    <p>Quantity: {product?.stock}</p>
                  </div>
                  <div className=" flex justify-between">
                    <button
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
          ))}
        </Slider>
      </div>

      {/* card  end*/}

      {/* modal */}

      {product && <DetailModal product={product} setProduct={setProduct} />}
    </div>
  )
}

export default TrendingProduct
