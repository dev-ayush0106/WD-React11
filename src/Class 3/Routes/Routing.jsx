import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import Mern from './Children/Mern'
import Java from './Children/Java'
import Python from './Children/Python'
import Da from './Children/Da'
import Navbar from '../Navbar'
import Student from './Student'

const Routing = () => {
    let routes=createBrowserRouter([
        {
            path:"/",
            element:<>
                <Navbar/>
                <Home/>
            </>
        },
        {
            path:"/about",
            element:<>
            <Navbar/>
                <About/>
            </>
        },
        {
            path:"/services",
            element:<>
            <Navbar/>
                <Services/>
            </>,
            children:[
                {
                    path:"mern",
                    element:<>
                        <Mern/>
                    </>
                },
                {
                    path:"java",
                    element:<>
                        <Java/>
                    </>
                },
                {
                    path:"python",
                    element:<>
                        <Python/>
                    </>
                },
                {
                    path:"da",
                    element:<>
                        <Da/>
                    </>
                }
            ]
        },
        {
            path:"/contact",
            element:<>
            <Navbar/>
                <Contact/>
            </>
        },
        {
            path:"*",
            element:<>
                <PageNotFound/>
            </>
        },
        {
            path:"/student/:id",
            element:<>
                <Student/>
            </>
        }
    ])
  return (
    <div>
        <RouterProvider router={routes}/>
    </div>
  )
}

export default Routing
