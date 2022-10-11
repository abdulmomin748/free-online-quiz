import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './utilities/Routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer position='top-center' />
      <RouterProvider router={router} />
    </>
  )
}

export default App
