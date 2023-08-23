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
import ProductCard from '../ProductCard/ProductCard'

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
            <ProductCard
              product={product}
              setProduct={setProduct}
              key={product?.id}
            />
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
