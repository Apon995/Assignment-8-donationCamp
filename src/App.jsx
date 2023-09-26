import React from "react";
import Header from "./Components/Header";
import { Oval } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation()
  return (
    <>
      <header className="md:px-[5%] px-[3%]">
        <Header />
      </header>
      <main className="md:px-[5%] px-[3%]">
        {
          navigation.state == "loading" ?
          <div className="h-[70vh] w-full flex items-center justify-center">
            <Oval
              height={80}
              width={80}
              color="#FF444A"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#fdebd0"
              strokeWidth={5}
              strokeWidthSecondary={4}

            />

          </div> : <Outlet />
        }


      </main>

    </>
  );
}

export default App;
