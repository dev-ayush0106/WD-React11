import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './Class 4/redux/cartStore/cartStore.js'
// import { store } from './Class 9/store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

   
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
     </Provider>
  </StrictMode>,
)
