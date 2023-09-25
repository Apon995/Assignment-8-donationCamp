import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="px-[5%] bg-[url(https://i.ibb.co/wzrY0kn/banner-img.jpg)] bg-no-repeat bg-cover bg-[#fffffff2]  bg-blend-overlay">
        <Header />
      </header>
      <main className="py-8 px-[5%]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
