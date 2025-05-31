"use client";

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

  return (
    <div>
      <main className="font-poppins bg-yellow-50 min-h-screen px-10">
        {/* Navbar */}
        <section>
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm">Developed By Dulshan-R</h1>
            <ul className="flex items-center gap-5">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl mx-5" />
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
            <h1 className="text-5xl font-bold text-yellow-400">I'm Navod Dulshan</h1>
            <h3 className="text-2xl py-4">Mobile App and Website Development</h3>
            <p className="text-sm py-4 leading-6 text-gray-800">
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
            <div className="relative m-auto bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
              <Image
                src="/p2.png"
                alt="Profile Image"
                fill
                className="object-cover"
                priority
                />
            </div>
          )}
        </section>

        {/* Services Section */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60">Services I Offer</h2>
            <p className="text-sm py-2 leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem dolores dolore quos soluta quis tenetur!
            </p>
          </div>

          {/* Service Card */}
          <div>
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image
                src="/design.png"
                alt="Design Icon"
                width={100}
                height={100}
                className="object-cover inline"
              />
              <h2 className="text-2xl font-bold">Graphic Design</h2>
              <p className="text-sm py-2 text-gray-700 leading-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi minima ipsum ducimus quasi sint odio voluptatum.
              </p>
            </div>
          </div>

          <div>
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
          </div>

          <div>
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
          </div>
        </section>

        {/* my work */}
        <div>
          <h2 className="text-5xl py-10 font-bold opacity-60">Portfolio</h2>
          <p className="text-sm py-2 leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem dolores dolore quos soluta quis tenetur!
            </p>
        </div>

        {/* images */}
        <div className="flex flex-col gap-10 p-10">
          <Image
            src="/web1.png"
            alt="Work Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />

          <Image
            src="/web2.png"
            alt="Work Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />

          <Image
            src="/web3.png"
            alt="Work Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />

          <Image
            src="/web4.png"
            alt="Work Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />

          <Image
            src="/web5.png"
            alt="Work Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />

          <Image
            src="/web5.png"
            alt="Work Image 1"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>

        {/* footer */}
        <footer>
          <div>
            
          </div>
        </footer>
      </main>
    </div>
  );
}
