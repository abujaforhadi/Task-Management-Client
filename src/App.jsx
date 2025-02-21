

import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router/Router'
import AuthProvider from './Auth/AuthProvider'

function App() {

  return (
    <>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>


    </>
  )
}

export default App
