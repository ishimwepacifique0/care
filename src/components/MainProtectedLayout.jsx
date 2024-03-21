/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { NavLink, Outlet, redirect, useNavigate } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";
import { useState } from "react";

export function loader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    throw redirect("/login");
  }
  return null;
}

export default function MainProtectedLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    displayName,
    email: userEmail,
    image: userImage,
    username,
    _id: userId,
  } = user;

  function handleLogout() {
    localStorage.removeItem("user");
    return navigate("/login");
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <article className="relative flex justify-end text-light-200">
      <section className="w-1/5 h-screen fixed left-0 top-0 px-6 py-6 flex flex-col justify-between border-r-2 border-light-200 md:hidden">
        <section className="flex justify-start items-center gap-4 font-serif font-bold text-xl">
          <LogoIcon classes="text-dark-100 w-10 h-10" />
          <p className="text-2xl">Mind Wave</p>
        </section>
        <section className="flex flex-col gap-3">
          <NavLink
            to="/feeds"
            className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
          >
            <img
              className="w-8 object-contain"
              src="/home.png"
              alt="home icon"
            />
            <p className="font-semibold text-xl">Home</p>
          </NavLink>
          <NavLink
            to="/quiz"
            className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
          >
            <img
              className="w-8 object-contain"
              src="/quizzes.png"
              alt="Quiz icon"
            />
            <p className="font-semibold text-xl">Quizzes</p>
          </NavLink>
          <NavLink
            to="/daily"
            className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
          >
            <img
              className="w-8 object-contain"
              src="/motivation.png"
              alt="Motivationo icon"
            />
            <p className="font-semibold text-xl">Motivation</p>
          </NavLink>
        </section>
        <section>
          <section className="flex items-center gap-6">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={userImage}
              alt="profile img"
            />
            <div>
              <p className="font-bold text-xl">{username}</p>
              <p className="truncate w-5/6">@{displayName.replace(" ", "")}</p>
            </div>
          </section>
          <button
            className="w-full bg-dark-100 text-dark-200 text-lg font-semibold py-1 rounded-lg mt-6"
            onClick={handleLogout}
          >
            Logout
          </button>
        </section>
      </section>
      <section className="w-4/5 md:w-full">
        <section className="items-center justify-between px-12 md:px-4 hidden md:flex my-4">
          <section className="flex justify-start items-center gap-4 font-serif font-bold text-xl">
            <LogoIcon classes="text-dark-100 w-10 h-10" />
            <p className="text-2xl">Mind Wave</p>
          </section>
          <button onClick={openMenu}>
            <img
              className="w-10 h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 object-contain"
              src="/menu.png"
              alt=""
            />
          </button>
        </section>
        <Outlet />
      </section>
      {isMenuOpen && (
        <section
          className="w-full h-screen bg-dark-200 fixed left-0 top-0 px-6 py-6 hidden md:flex flex-col justify-between border-r-2 border-light-200 overflow-hidden"
          onClick={closeMenu}
        >
          <section className="flex justify-between">
            <section className="flex justify-start items-center gap-4 font-serif font-bold text-xl">
              <LogoIcon classes="text-dark-100 w-10 h-10 sm:w-9 sm:h-9" />
              <p className="text-2xl sm:text-xl">Mind Wave</p>
            </section>
            <button>
              <img className="w-8 h-8" src="/close.png" alt="" />
            </button>
          </section>
          <section className="flex flex-col gap-3">
            <NavLink
              to="/feeds"
              className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
            >
              <img
                className="w-8 object-contain"
                src="/home.png"
                alt="home icon"
              />
              <p className="font-semibold text-xl">Home</p>
            </NavLink>
            <NavLink
              to="/quiz"
              className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
            >
              <img
                className="w-8 object-contain"
                src="/quizzes.png"
                alt="Quiz icon"
              />
              <p className="font-semibold text-xl">Quizzes</p>
            </NavLink>
            <NavLink
              to="/daily"
              className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
            >
              <img
                className="w-8 object-contain"
                src="/motivation.png"
                alt="Motivationo icon"
              />
              <p className="font-semibold text-xl">Motivation</p>
            </NavLink>
          </section>
          <section>
            <section className="flex items-center gap-6">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={userImage}
                alt="profile img"
              />
              <div>
                <p className="font-bold text-xl">{username}</p>
                <p>@{displayName.replace(" ", "")}</p>
              </div>
            </section>
            <button
              className="w-full bg-dark-100 text-dark-200 text-lg font-semibold py-1 rounded-lg mt-6"
              onClick={handleLogout}
            >
              Logout
            </button>
          </section>
        </section>
      )}
    </article>
  );
}
