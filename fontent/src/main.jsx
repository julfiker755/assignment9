import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router-dom";
import routes from './components/Routerdom/routes/routes';
import UseContaxt from './components/UseContaxt/UseContaxt';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <UseContaxt>
   <RouterProvider router={routes}></RouterProvider>
   </UseContaxt>
  </React.StrictMode>,
)
