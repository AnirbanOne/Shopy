import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Success from '../pages/Success'
import Fail from '../pages/Fail'

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }, 
            {
                path: '/product/:id',
                element: <ProductDetails/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/success',
        element: <Success/>
    },
    {
        path: '/fail',
        element: <Fail/>
    },
])


export default Routes