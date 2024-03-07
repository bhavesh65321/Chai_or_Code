import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contactus.jsx'
import User from './components/User.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>

//       },
//       {
//         path:"contactus",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element ={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='contactus' element ={<Contact/>}/>
      <Route path='user/:userid' element ={<User/>}/>
      <Route 
      loader={(githubInfoLoader)}
      path='github' element ={<Github/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
