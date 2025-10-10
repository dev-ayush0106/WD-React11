import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fourth from './Fourth'
import ProductDetails from './ProductDetails'

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
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default Main
