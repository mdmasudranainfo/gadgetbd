import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Components/Layout/MainLayout'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About'
import Product from '../Pages/Product/Product'
import Cart from '../Pages/Cart/Cart'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/product/:category',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])
