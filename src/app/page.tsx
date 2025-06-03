"use client";

import{motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";



export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by rendering only after mount
    setMounted(true);
  }, []);

  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        {/* Navbar */}
        <section>
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm md:text-xl dark:text-white">Developed By Dulshan-R</h1>
            <ul className="flex items-center gap-5">
              <li>
                <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-xl mx-5 dark:text-white" />
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Hero Section */}
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4">I'm Navod Dulshan</h1>
            <h3 className="text-2xl py-4 md:text-3xl dark:text-white">Mobile App and Website Development</h3>
            <p className="text-sm py-4 leading-6 text-gray-800 md:text-md max-w-xl mx-auto dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est architecto. Enim molestiae necessitatibus modi totam minus expedita iusto minima tenetur impedit aspernatur doloremque dolorum officia et magnam, rerum repellat.
            </p>
          </div>

          {/* Social Icons */}
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagramSquare /></a>
          </div>

          {/* Profile Image */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <div className="relative m-auto bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
              <Image
                src="/p2.png"
                alt="Profile Image"
                fill
                className="object-cover"
                priority
                />
              </div>
            </motion.div>
          )}
        </section>

        {/* Services Section */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60 dark:text-white">Services I Offer</h2>
            <p className="text-sm py-2 leading-6 text-gray-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem dolores dolore quos soluta quis tenetur!
            </p>
          </div>

          {/* Service Card */}
          <div className="md:flex lg:flex gap-10 mx-auto">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image
                src="/design.png"
                alt="Design Icon"
                width={100}
                height={100}
                className="object-cover inline"
              />
              <h2 className="text-2xl font-bold">Graphic Designing</h2>
              <p className="text-sm py-2 text-gray-700 leading-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi minima ipsum ducimus quasi sint odio voluptatum.
              </p>
            </div>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image
                src="/code.png"
                alt="Design Icon"
                width={100}
                height={100}
                className="object-cover inline"
              />
              <h2 className="text-2xl font-bold">App Development</h2>
              <p className="text-sm py-2 text-gray-700 leading-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi minima ipsum ducimus quasi sint odio voluptatum.
              </p>
            </div>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              <div className="bg-yellow-300 text-center shadow-md p-5 rounded-xl my-10">
              <Image
                src="/design.png"
                alt="Design Icon"
                width={100}
                height={100}
                className="object-cover inline"
              />
              <h2 className="text-2xl font-bold">Web Development</h2>
              <p className="text-sm py-2 text-gray-700 leading-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi minima ipsum ducimus quasi sint odio voluptatum.
              </p>
            </div>
            </motion.div>

          </div>

        </section>

        {/* my work */}
        <div>
          <h2 className="text-5xl py-10 font-bold opacity-60 dark:text-white">Portfolio</h2>
          <p className="text-sm py-2 leading-6 text-gray-600 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem dolores dolore quos soluta quis tenetur!
            </p>
        </div>

        {/* images */}
        <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap justify-center items-center">
         <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          whileTap={{ scale: 0.9 , rotate: -10 ,borderRadius: "100%"}}>
            <div className=" basis-1/3 flex-1">
              <Image
              src="/web1.png"
              alt="Work Image 1"
              layout="responsive"
              width={500}
              height={200}
              className="object-cover rounded-lg"
            />
            </div>
          </motion.div>

          <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          whileTap={{ scale: 0.9 , rotate: -10 ,borderRadius: "100%"}}>
            <div className=" basis-1/3 flex-1">
              <Image
              src="/web2.png"
              alt="Work Image 1"
              layout="responsive"
              width={500}
              height={200}
              className="object-cover rounded-lg"
            />
            </div>
          </motion.div>

          <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          whileTap={{ scale: 0.9 , rotate: -10 ,borderRadius: "100%"}}>
            <div className=" basis-1/3 flex-1">
              <Image
              src="/web3.png"
              alt="Work Image 1"
              layout="responsive"
              width={500}
              height={200}
              className="object-cover rounded-lg"
            />
            </div>
          </motion.div>

          <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          whileTap={{ scale: 0.9 , rotate: -10 ,borderRadius: "100%"}}>
            <div className=" basis-1/3 flex-1">
              <Image
              src="/web4.png"
              alt="Work Image 1"
              layout="responsive"
              width={500}
              height={200}
              className="object-cover rounded-lg"
            />
            </div>
          </motion.div>

          <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          whileTap={{ scale: 0.9 , rotate: -10 ,borderRadius: "100%"}}>
            <div className=" basis-1/3 flex-1">
              <Image
              src="/web5.png"
              alt="Work Image 1"
              layout="responsive"
              width={500}
              height={200}
              className="object-cover rounded-lg"
            />
            </div>
          </motion.div>

          <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          whileTap={{ scale: 0.9 , rotate: -10 ,borderRadius: "100%"}}>
            <div className=" basis-1/3 flex-1">
              <Image
              src="/web1.png"
              alt="Work Image 1"
              layout="responsive"
              width={500}
              height={200}
              className="object-cover rounded-lg"
            />
            </div>
          </motion.div>
        </div>

        {/* footer */}
        <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5  p-10 lg:flex-row lg:items-center dark:border-white"> 
          <div className="flex-1 items-start">
            <h3 className="text-base text-xl mb-2 dark:text-white">Contact me for more details</h3>
            <p className="opacity-80 text-gray-600  lg:max-w-xl dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero, sunt doloribus voluptates eius nihil reiciendis ea soluta impedit magni quis ipsum, expedita enim eaque deserunt nam commodi, non aperiam!
            </p>
          </div>

          <div className="flex-1 flex flex-col items-end md:items-center sm:items-center">
            <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagramSquare /></a>
          </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
