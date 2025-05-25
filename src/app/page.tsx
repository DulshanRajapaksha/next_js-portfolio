import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

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
        </section>
      </main>
    </div>
  );
}
