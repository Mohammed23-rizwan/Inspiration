import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between">
      <div>
        <ul className="flex gap-5">
          <li className="md:text-2xl">
            <FaFacebook />
          </li>
          <li className="md:text-2xl ">
            <FaTwitter />
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-sm md:text-lg font-semibold">MITRAVEL</h2>
      </div>
      <div>
        <GiHamburgerMenu className="md:text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
