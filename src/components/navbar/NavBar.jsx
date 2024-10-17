import { useLocation, useNavigate } from "react-router-dom";
import { FaBeer, FaHamburger, FaMailBulk } from "react-icons/fa";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import ExpandedMenu from "./ExpandedMenu";

export default function NavBar() {
  const navigate = useNavigate();
  //const location = useLocation();

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  // disable scroll when <ExpandedMenu/> is shown
  useEffect(() => {
    if (isHamburgerClicked) {
      // Disable scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed"; // Freeze the body
    } else {
      // Enable scroll
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
    }
    return () => {
      // Cleanup function to reset styles when the component unmounts
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
    };
  }, [isHamburgerClicked]);

  return (
    <div className="z-50 w-full h-16 flex justify-between pr-4 box-border sticky top-0 bg-[#121212] bg-opacity-95 items-center">
      <img
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0 }); // needed because useNavigate keeps you at the same scroll-level
          //window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="h-full hover:cursor-pointer"
        src="/basic-movie-page-logo.png"
        alt="logo"
      />
      <ul className="hidden md:flex md:gap-4">
        <li className="list-none">
          <a
            className="no-underline text-white hover:text-white hover:underline"
            href="/"
          >
            Home
          </a>{" "}
        </li>
        <li className="list-none">
          {" "}
          <a
            className="no-underline text-white hover:text-white hover:underline"
            href="/about"
          >
            About
          </a>
        </li>
        <li className="list-none">
          <a
            className="no-underline text-white hover:text-white hover:underline"
            href="/mypage"
          >
            My Page
          </a>
        </li>
      </ul>
      <div className="flex md:hidden bg-inherit">
        <Hamburger
          toggled={isHamburgerClicked}
          toggle={setIsHamburgerClicked}
        />
      </div>
      {isHamburgerClicked && <ExpandedMenu />}
    </div>
  );
}
