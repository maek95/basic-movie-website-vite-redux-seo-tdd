import { useLocation, useNavigate } from "react-router-dom"

export default function NavBar() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="z-50 w-full h-16 flex justify-between pr-4 box-border sticky top-0 bg-[#121212] bg-opacity-95 items-center">
      <img onClick={() => {
        navigate("/");
        window.scrollTo({ top: 0 }); // needed because useNavigate keeps you at the same scroll-level
        //window.scrollTo({ top: 0, behavior: "smooth" });
      }} className="h-full hover:cursor-pointer" src="/basic-movie-page-logo.png" alt="logo" />
      <ul className="flex gap-4">
        <a className="no-underline text-white hover:text-white hover:underline" href="/">Home</a> 
        <a className="no-underline text-white hover:text-white hover:underline" href="/about">About</a>
        <a className="no-underline text-white hover:text-white hover:underline" href="/mypage">My Page</a>
      </ul>
    </div>
  )
}