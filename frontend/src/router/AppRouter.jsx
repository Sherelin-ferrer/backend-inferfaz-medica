import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Appointments from '../pages/Appointments'
import Doctors from '../pages/Doctors'
import Patients from '../pages/Patients'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/appointments' element={<Appointments />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/patients' element={<Patients />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter