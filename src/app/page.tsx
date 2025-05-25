import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <main className="font-poppins bg-yellow-50 min-h-screen mx-10 ">
        {/* nav and hero */}
        <section>
          {/* nav */}
          <h1>Developed By Dulshan-R</h1>
          <ul>
            {/* icons */}
            <li>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
