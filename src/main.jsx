import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/home/Home';
import About from './components/about/About';
import Books from './components/Books';
import BookDetail from './components/bookDetails/BookDetail';
import LoadingSpinner from './components/LoadingSpinner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>, 
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"books",
        element:<Books></Books>,
        loader:()=> fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path:"books/:id",
        element:<BookDetail></BookDetail>,
        loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path:"loader",
        element:<LoadingSpinner></LoadingSpinner>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
