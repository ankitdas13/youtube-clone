import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from './components/MainContainer'
import Result from './components/Result.jsx'
import Live from './components/Live.jsx'
import Watch from './components/Watch.jsx'


const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
       {
        path : '/',
        element : <MainContainer/>
       },
       {
         path: '/result',
         element : <Result/>
       },
       {
         path: '/watch',
         element : <Watch/>
        },
       {
         path: '/live',
         element : <Live/>
       }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
