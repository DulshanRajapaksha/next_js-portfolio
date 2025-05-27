import Image from "next/image";

// import Reacticons
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

// import images
import profileImage from "/p2.png";

export default function Home() {
  return (
    <div>
      <main className="font-poppins bg-yellow-50 min-h-screen px-10 ">
        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm">Developed By Dulshan-R</h1>
            <ul className="flex items-center gap-5">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl mx-5" />
              </li>
              <li>
                <a href="#" 
                download={"resume.pdf"}
                className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300"
                >
                Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* hero */}
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400">I'am Navod Dulshan</h1>
            <h3 className=" text-2xl py-4">Mobile App and Website Development</h3>
            <p className="text-sm py-4 leading-6 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est architecto. Enim molestiae necessitatibus modi totam minus expedita iusto minima tenetur impedit aspernatur doloremque dolorum officia et magnam, rerum repellat.
            </p>
          </div>
          {/*socail media icon */}
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaInstagramSquare />
            </a>
          </div>

          {/* profile */}
          <div className="relative m-auto bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
            <Image
              src="/p2.png"
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
