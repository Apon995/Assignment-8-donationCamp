import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="md:px-[5%] px-[3%]">
        <Header />
      </header>
      <main className="md:px-[5%] px-[3%]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
