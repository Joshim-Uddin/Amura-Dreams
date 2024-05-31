import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorElement from '../ErrorElement';
import Home from '../Pages/Home';
import Collection from '../Pages/Collection';
import Products from '../Pages/Products';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/colección",
                element: <Collection />
            },
            {
                path: "/products/:id",
                element: (
                    <Products />
                )
                
              },
        ]
    }
])
const Routes = () => {
    return (
       <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;