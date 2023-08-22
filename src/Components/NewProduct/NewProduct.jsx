import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useGetTrendingProductQuery } from '../../Redux/api/apiSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/features/cart/cartSlice'
import { AuthContext } from '../../Contaxt/UserContext'
import DetailModal from '../DetailModal/DetailModal'
import heart from '../../assets/image/heart 1.png'

const NewProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 300)
  }, [])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useContext(AuthContext)

  const { data } = useGetTrendingProductQuery(undefined)

  const { category } = useParams()

  const [product, setProduct] = useState()
  const [loadLength, setLoadLength] = useState(2)

  const products = data
    ?.filter(item => item.category === category)
    .slice(0, loadLength)

  const modalHandler = produc => {
    if (!user?.uid) {
      navigate('/login')
    } else {
      setProduct(produc)
    }
  }

  return (
    <div className="container mx-auto mt-[65px]">
      <h1 className="text-[35px] font-bold text-center ">New Product</h1>
      {/* menu start */}
      <div className="mt-24">
        <ul className="flex text-[30px] gap-[90px] justify-center flex-wrap">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-[#069938] ' : ' ')}
              to="/product/laptop"
            >
              Laptop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-[#069938] ' : ' ')}
              to="/product/Phone"
            >
              Phone
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-[#069938] ' : ' ')}
              to="/product/Headphone"
            >
              Hedphone
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-[#069938] ' : ' ')}
              to="/product/Earphone"
            >
              Earphone
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-[#069938] ' : ' ')}
              to="/product/Tab"
            >
              Tab
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-[#069938] ' : ' ')}
              to="/product/Television"
            >
              Television
            </NavLink>
          </li>
        </ul>
      </div>
      {/* menu end */}

      {products.length == 0 && (
        <div className="">
          <h1 className="text-3xl py-[100px] text-center">
            have not product this category
          </h1>
        </div>
      )}
      <div className="grid grid-cols-4">
        {products?.map(product => (
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
      </div>
      {product && <DetailModal product={product} setProduct={setProduct} />}
    </div>
  )
}

export default NewProduct
