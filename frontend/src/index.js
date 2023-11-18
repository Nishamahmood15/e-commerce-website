import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';
import App from './App';
import Homescreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/cartScreen';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Homescreen />} />
        <Route path='/product/:id'  element={<ProductScreen />} />
        <Route path='/cart'  element={<CartScreen />} />
       
    </Route>
  ) 
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);