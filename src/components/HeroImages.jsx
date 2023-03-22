/** @format */

import React from "react";
import { motion } from "framer-motion";

const HeroImages = () => {
  return (
    <>
      <motion.div
        className=" flex items-center justify-center relative  "
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
      >
        <img
          src="../../assets/imgs/hero6.png "
          alt=""
          className="object-cover w-72 h-full absolute right-[375px] -z-10  "
        />
        <img
          src="../../assets/imgs/hero5.png"
          alt=""
          className="object-cover w-96 h-96 scale-105 "
        />
        <img
          src="../../assets/imgs/hero9.png"
          alt=""
          className="object-cover w-[100vw] h-full absolute right-0 z-30 top-20  "
        />
        <img
          src="../../assets/imgs/hero8.png"
          alt=""
          className="object-cover w-[100vw] h-full absolute right-0 z-30 top-20  "
        />

        <img
          src="../../assets/imgs/hero7.png "
          alt=""
          className="object-cover w-72 h-full  absolute left-[375px] bottom-0 right-0 top-0 -z-10 "
        />
      </motion.div>
      <div className="mt-48 container mx-auto">
        <img
          src="../../assets/imgs/wallet.png "
          alt=""
          className="object-cover w-full h-full  "
        />
      </div>
    </>
  );
};

export default HeroImages;
