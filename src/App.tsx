import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@src/styles/style.scss";

import PageLoader from "./components/PageLoader/PageLoader";
import { toast, ToastContainer } from "react-toastify";
import { HOME_TOAST_ID } from "./utils";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <ToastContainer
        closeButton
        closeOnClick
        draggable
        position="bottom-right"
        theme="light"
        hideProgressBar={false}
        pauseOnHover={false}
        enableMultiContainer
        containerId={HOME_TOAST_ID}
      />
    </div>
  );
}

export default App;
