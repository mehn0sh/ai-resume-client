import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full relative h-screen  mx-auto">
      <div
        className={`${styles.paddingX} flex absolute mx-auto max-w-7xl top-[-160px] sm:top-[200px] md:top-[-80px]  xl:top-[-120px] inset-0 flex-row items-center gap-5`}
      >
        <div className="flex flex-col items-center mt-5 justify-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="sm:mt-[-40px]" >
          <h1 className={`${styles.heroHeadText} text-white`}>
          Ready to build your <span className='text-[#915EFF]'>Resume?</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tell the world about your skills <br className='sm:block hidden' />
            Gemini AI will help you !
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-1 bottom-24  w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[30px] ml-3 h-[50px] rounded-3xl border-4 border-secondary opacity-80 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
