import { useContext, useEffect } from 'react'
import { AuthContext } from '../../Contaxt/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const loginHandler = event => {
    event.preventDefault()

    const from = event.target
    const email = from.email.value
    const password = from.password.value
    console.log(email, password)
    login(email, password)
      .then(data => {
        toast.success('Login Success')
        // console.log(data);

        if (data.user.uid) {
          navigate('/')
        }
      })
      .catch(err => {
        toast.error(err.message)
      })
  }

  return (
    <div className="container mx-auto min-h-[70vh] flex justify-center items-center">
      <form onSubmit={loginHandler} className="w-[300px] p-3">
        <h1 className="text-[30px] font-bold text-center">Login</h1>
        <input
          className="border-2 mt-5 outline-none p-2 w-[100%]"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          className="border-2 mt-5 outline-none p-2 w-[100%]"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          required
        />
        <div className="mt-5 flex justify-center ">
          <button className="bg-black text-white px-5 py-2 w-full rounded-md">
            Login
          </button>
        </div>
        <p className="mt-5" to="/register">
          Have Not Account ?{' '}
          <Link className="text-blue-500" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
