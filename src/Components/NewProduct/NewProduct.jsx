import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NewProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 300)
  }, [])

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
    </div>
  )
}

export default NewProduct
