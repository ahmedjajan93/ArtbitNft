/** @format */

import React from "react";
import { motion } from "framer-motion";
export const WalletData = [
  {
    imgUrl: "./assets/imgs/metamask.png",
    title: "MetaMask",
  },
  {
    imgUrl: "./assets/imgs/Phantom.png",
    title: "Phantom",
  },
  {
    imgUrl: "./assets/imgs/walletconnect.png",
    title: "Wallet Connect",
  },
  {
    imgUrl: "./assets/imgs/TWT.png",
    title: "Trust Wallet",
  },
  {
    imgUrl: "./assets/imgs/coinbase.png",
    title: "Coinbase",
  },
];
const WalletConnect = () => {
  return (
    <>
      {WalletData.map((data, index) => (
        <motion.div
          whileHover={{ scale: 1.1, color: "gray" }}
          initial={{ scale: 1, color: "black" }}
          className=" flex flex-col items-center space-y-6  md:w-56 md:h-50 w-40 h-40  justify-center cursor-pointer   "
        >
          <div className=" flex flex-col justify-center items-center space-y-6  md:w-56 md:h-50 w-40 h-40 border ">
            <img
              src={data.imgUrl}
              alt={data.title}
              className="w-10 h-10 object-cover  "
            />

            <h3>{data.title}</h3>
          </div>
        </motion.div>
      ))}
    </>
  );
};
export default WalletConnect;
