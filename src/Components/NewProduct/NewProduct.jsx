import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGetTrendingProductQuery } from '../../Redux/api/apiSlice'

import DetailModal from '../DetailModal/DetailModal'

import ProductCard from '../ProductCard/ProductCard'

const NewProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { data } = useGetTrendingProductQuery(undefined)

  const { category } = useParams()

  const [product, setProduct] = useState()
  const [loadLength, setLoadLength] = useState(4)

  const products = data?.filter(item => item.category === category)

  return (
    <div className="container mx-auto md:mt-[65px] mt-5">
      <h1 className="text-[35px] font-bold text-center ">New Product</h1>
      {/* menu start */}
      <div className="md:mt-24 mt-5">
        <ul className="flex md:text-[30px] xl:gap-[90px] lg:gap-11 gap-6 justify-center flex-wrap">
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

      {products?.length == 0 && (
        <div className="">
          <h1 className="text-3xl py-[100px] text-center">
            have not product this category
          </h1>
        </div>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-11">
        {products?.slice(0, loadLength).map(product => (
          <ProductCard
            product={product}
            setProduct={setProduct}
            key={product?.id}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          disabled={products?.length <= loadLength}
          onClick={() => setLoadLength(loadLength + 4)}
          className="text-lg  w-24 py-2 bg-[#069938] rounded-md text-white font-bold"
        >
          See More
        </button>
      </div>

      {product && <DetailModal product={product} setProduct={setProduct} />}
    </div>
  )
}

export default NewProduct
