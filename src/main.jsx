// import { StrictMode } from "react";
import App from "./App.jsx";
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Layout from "./layout/layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/About/About.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <ContextProvider> */}
    {/* <App /> */}
    {/* <ContextProvider>
      <ShoppingContext />
    </ContextProvider> */}
    {/*  App shoud be wrapped inside ContextProvider so that the App can access the context that containing the state */}
    {/* </ContextProvider> */}

    {/* <TodoProvider>
      <ToDo />
    </TodoProvider> */}

    <RouterProvider router={router} />
    <App />
  </>
);
