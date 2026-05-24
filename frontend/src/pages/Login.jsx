import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

const Login = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('/auth/login', form)

      localStorage.setItem('token', response.data.token)

      alert('Login exitoso')

      navigate('/dashboard')
    } catch (error) {
      console.log(error)

      alert('Error al iniciar sesión')
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-2xl shadow-xl w-[400px] flex flex-col gap-5'
      >
        <h1 className='text-4xl font-bold text-center'>
          Login
        </h1>

        <input
          type='email'
          name='email'
          placeholder='Correo'
          onChange={handleChange}
          className='border p-3 rounded-lg'
        />

        <input
          type='password'
          name='password'
          placeholder='Contraseña'
          onChange={handleChange}
          className='border p-3 rounded-lg'
        />

        <button
          className='bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition'
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login