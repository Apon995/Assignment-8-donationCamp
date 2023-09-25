import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="px-[5%]">
        <Header />
      </header>
      <main className="px-[5%]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
