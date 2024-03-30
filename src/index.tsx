import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/index.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from './component/App';
import Home from "./component/home/Home";
import Gallery from "./component/gallery/Gallery";
import Contact from "./component/contact/Contact";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="" element={<App />} >
      <Route path="*" element={<Home />} />
      <Route path="gallery/" element={<Gallery />} />
      <Route path="contact/" element={<Contact />} />
    </Route>
    </>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
