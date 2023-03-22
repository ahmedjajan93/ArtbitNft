/** @format */

import React from "react";
import { WalletConnect } from "../components";
import Header from "../components/Header";

function WalletAuthentication() {
  return (
    <div>
      <div className="bg-[url('./assets/imgs/Header.png')] w-full h-[200px] bg-cover bg-center bg-no-repeat  md:h-[350px] text-White -z-10  ">
        <Header />
      </div>
      <div className="lg:flex lg:items-start lg:justify-center my-10 h-[520px] lg:h-[400px]  ">
        <div className=" flex flex-wrap justify-center items-center mx-1 gap-5 md:gap-8  lg:w-[60vw]  ">
          <WalletConnect />
        </div>
      </div>
    </div>
  );
}

export default WalletAuthentication;
