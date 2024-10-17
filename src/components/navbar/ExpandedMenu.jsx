import { useEffect } from "react";

export default function ExpandedMenu({
  isHamburgerClicked,
  setIsHamburgerClicked,
}) {
  // disable scrolling when the HeaderExpanded is open, otherwise you can scroll on the page while its open... weird
  useEffect(() => {
    if (isHamburgerClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isHamburgerClicked]);

  return (
    <>
      <div className="fixed z-40 top-0 mt-16 h-lvh w-full box-border bg-white opacity-[95%]">
        <ul className="h-full w-full flex flex-col pt-8 font-semibold p-0 m-0">
          <li className="list-none w-full box-border ">
            <a
              className="w-full no-underline text-white hover:text-white hover:underline"
              href="/ "
            >
              <h2 className="text-black text-3xl lg:text-5xl font-extrabold hover:underline text-center">
                Home
              </h2>
            </a>
          </li>
          <li className="list-none w-full ">
            <a
              className="w-full no-underline text-white hover:text-white hover:underline"
              href="/about"
            >
              <h2 className="text-black text-3xl lg:text-5xl font-extrabold hover:underline text-center">
                About
              </h2>
            </a>
          </li>
          <li className="list-none w-full ">
            <a
              className="w-full no-underline text-white hover:text-white hover:underline"
              href="/mypage"
            >
              <h2 className="text-black text-3xl lg:text-5xl font-extrabold hover:underline text-center">
                My Page
              </h2>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
