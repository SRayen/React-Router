import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Layout from "./components/Layout";

import "./server";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index  ~  path='/' /// index show which component will be appear in the same time with  element={<Layout />} */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          {/* In the case there is shared User Interface or .... we can do this:
          <Route path="vans">
          * Here there is no parent Element *
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route> */}

          <Route path="host" element={<HostLayout />}>
            {/* index  ~  path='host' /// index show which component will be appear in the same time with  element={<HostLayout />} */}
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          {/* 404 Pages  */}
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
