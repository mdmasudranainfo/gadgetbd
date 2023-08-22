import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/route.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import UserContext from './Contaxt/UserContext'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContext>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </UserContext>
    </Provider>
  </React.StrictMode>
)
