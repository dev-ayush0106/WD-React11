import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fourth from './Fourth'
import ProductDetails from './ProductDetails'
import Cart from './Cart'

const Main = () => {
    let routes=createBrowserRouter([
        {
            path:"/",
            element:<>
                <Fourth/>
            </>
        },
        {
            path:"/products/:id",
            element:<>
            <ProductDetails/>
            </>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default Main
