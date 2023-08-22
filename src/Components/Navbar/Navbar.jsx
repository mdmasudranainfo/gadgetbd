import { NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { BsCartPlusFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import './Navbar.css'
import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../Contaxt/UserContext'
import { toast } from 'react-hot-toast'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { products } = useSelector(state => state.cart)

  const { user, singOut } = useContext(AuthContext)

  const singOutHandler = () => {
    singOut().then(() => {
      toast.success('log out successfully')
    })
  }

  const menuItems = (
    <>
      <li className="border-b lg:border-none border-green-500 p-1">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-[#069938] border-b-2 border-[#FF9D1E]' : ' '
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="border-b lg:border-none border-green-500 p-1">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-[#069938] border-b-2 border-[#FF9D1E]' : ' '
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="border-b lg:border-none border-green-500 p-1">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-[#069938] border-b-2 border-[#FF9D1E]' : ' '
          }
          to="/product/laptop"
        >
          Product
        </NavLink>
      </li>
      <li className="border-b lg:border-none border-green-500 p-1">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'text-[#069938] border-b-2 border-[#FF9D1E]' : ' '
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="border-b lg:border-none border-green-500 p-1">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-[#069938] border-b-2 border-[#FF9D1E] relative'
              : 'relative '
          }
          to="cart"
        >
          <span className="absolute top-[-10px] right-[-10px] bg-red-500 px-1 text-sm text-white rounded-3xl">
            {products?.length}
          </span>
          <BsCartPlusFill />
        </NavLink>
      </li>
      <li className="border-b lg:border-none border-green-500 p-1">
        {user?.uid ? (
          <button
            onClick={() => singOutHandler()}
            className={({ isActive }) =>
              isActive ? 'text-[#069938] border-b-2 border-[#FF9D1E]' : ' '
            }
          >
            Log Out
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-[#069938] border-b-2 border-[#FF9D1E]' : ' '
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  )
  return (
    <div className="container mx-auto sticky top-0  z-50 bg-white">
      <div className="flex justify-between items-center relative ">
        {/* absulate navbar start */}
        <div
          className={` 
            ${openMenu ? 'block lg:hidden' : 'hidden'}
            absolute top-[70px] left-0  z-50 min-h-screen max-h-full bg-white  w-full text-balack`}
        >
          <ul className=" gap-[35px] text-[20px] font-semibold m-5 ">
            {menuItems}
          </ul>
        </div>
        {/* absulate navbar end */}

        <div className="flex items-center gap-x-[15px]">
          <img className="max-w-71px" src={logo} alt="" />
          <h1 className="text-[20px] font-bold">GadgetBD</h1>
        </div>
        <div className="">
          <ul className="lg:flex hidden   gap-[35px] text-[20px] font-semibold items-center">
            {menuItems}
          </ul>

          {!openMenu ? (
            <AiOutlineMenu
              onClick={() => setOpenMenu(!openMenu)}
              className="text-2xl cursor-pointer lg:hidden block"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setOpenMenu(!openMenu)}
              className="text-2xl cursor-pointer lg:hidden block"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
