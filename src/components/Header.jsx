import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <section className="flex justify-between items-center py-6 px-[5%]">
      <Link
        to="/"
        className="flex justify-start items-center gap-4 font-serif font-bold text-xl"
      >
        <img className="text-green-200 w-12 h-12" src="/pngtree-insurance-logo-vector-image_80257-removebg-preview.png" />
        <p>Carehealth</p>
      </Link>
      <section className="flex justify-between items-center gap-20">
        <div className="flex justify-between items-center gap-6 md:hidden">
          <a className="hover:text-blue-200" href="#about">
            About
          </a>
          <a className="hover:text-blue-200" href="#how">
            How It Works
          </a>
          <a className="hover:text-blue-200" href="#mental">
            Mental Health
          </a>
          <a className="hover:text-blue-200" href="#testimonials">
            Testimonials
          </a>
        </div>
        
      </section>
      <Link
          to={pathname === "/signup" ? "/login" : "/signup"}
          className="bg-[#a2e8e9] text-dark-200 font-medium px-6 py-2 rounded"
        >
          {pathname === "/login"
            ? "Sign Up"
            : pathname === "/signup"
            ? "Log In"
            : "Get Started"}
        </Link>
    </section>
  );
}
