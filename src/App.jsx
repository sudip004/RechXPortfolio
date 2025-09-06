import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='maincontainer'>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"  
      />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

    </div>
  )
}

export default App