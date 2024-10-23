import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { menuRoutes } from "../router/router";
import { SideBarItem } from "../components";

export const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="relative flex flex-col sm:flex-row overflow-hidden h-[100vh]">
      {/* Botón de menú hamburguesa */}
      <button
        className="sm:hidden absolute top-4 left-4  px-3 py-2 rounded-lg z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="m7 7l10 10M7 17L17 7"
            />
          </svg>
        ) : (
          "☰"
        )}
      </button>

      {/* Menú lateral */}
      <nav
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 transform fixed sm:relative sm:flex flex-col w-[250px] sm:w-[370px] top-0 left-0 h-full bg-zinc-700 p-5 transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Sección superior */}
        <div className="mt-10 flex  flex-grow gap-2 ">
          {/*
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="72"
                stroke-dashoffset="72"
                d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="72;0"
                />
              </path>
              <path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.2s"
                  values="10;0"
                />
              </path>
              <path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1s"
                  dur="0.2s"
                  values="10;0"
                />
              </path>
              <path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1.3s"
                  dur="0.2s"
                  values="6;0"
                />
              </path>
            </g>
          </svg>
          */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M40.027 14.75c-.788-1.365-6.333-4.381-7.699-5.17C30.963 8.794 25.577 5.5 24 5.5s-6.963 3.293-8.328 4.08c-1.366.789-6.911 3.805-7.7 5.17c-.788 1.365-.628 7.674-.628 9.25s-.16 7.885.629 9.25c.788 1.365 6.333 4.381 7.699 5.17S22.423 42.5 24 42.5s6.963-3.293 8.328-4.08c1.366-.789 6.911-3.805 7.7-5.17c.788-1.365.628-7.674.628-9.25s.16-7.885-.629-9.25"
            />
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.299 7.496l10.37 5.985V27.34m-5.994-10.38l-12.02 6.937v12.184"
            />
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m7.361 19.445l10.316-5.955l5.996 3.466l-.009 6.93m-5.987 3.464l12.01 6.931l10.964-6.327"
            />
            <path
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m23.682 23.886l-6.014 3.465l-.008 6.92l10.918 6.3m7.095-29.057v12.383l-5.986 3.454l-6.005-3.465"
            />
          </svg>
          <h1 className="font-light p-2  text-lg lg:text-3xl">Chat Bot</h1>
        </div>

        {/* Menú de navegación en el medio */}
        <div className="flex flex-col flex-grow my-10  ">
          {menuRoutes.map((route) => (
            <SideBarItem key={route.to} {...route} />
          ))}
        </div>

        {/* Sección inferior */}
        <div className="mt-auto flex items-center gap-1 bg-indigo-500 hover:bg-indigo-800 transition-all hover:cursor-pointer p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M10.52 7.052a1.17 1.17 0 0 1-.639-.636L8.93 4.257c-.178-.343-.69-.343-.858 0l-.952 2.16a1.28 1.28 0 0 1-.638.635l-1.214.524a.462.462 0 0 0 0 .838l1.214.524c.293.121.523.353.638.636l.952 2.169c.178.343.69.343.858 0l.952-2.17c.126-.282.356-.504.638-.635l1.214-.524a.462.462 0 0 0 0-.838zm15.054 6.503a3.73 3.73 0 0 1-1.922-1.977L20.79 4.81a1.432 1.432 0 0 0-2.58 0l-2.863 6.768a3.8 3.8 0 0 1-1.921 1.977l-3.622 1.64c-1.072.53-1.072 2.08 0 2.61l3.622 1.64a3.74 3.74 0 0 1 1.922 1.977l2.862 6.768a1.432 1.432 0 0 0 2.58 0l2.863-6.768a3.8 3.8 0 0 1 1.921-1.977l3.622-1.64c1.072-.53 1.072-2.08 0-2.61zM8.281 20.33c.16.392.454.696.822.872l1.55.725a.646.646 0 0 1 0 1.146l-1.55.725c-.368.176-.661.49-.822.872l-1.228 2.977a.61.61 0 0 1-1.106 0L4.72 24.67a1.66 1.66 0 0 0-.822-.872l-1.55-.725a.646.646 0 0 1 0-1.146l1.55-.725c.368-.176.661-.49.822-.872l1.228-2.977a.61.61 0 0 1 1.106 0z"
            />
          </svg>
          <a href="" className="text-white">
            Upgrade
          </a>
        </div>
      </nav>

      {/* Contenido principal */}
      <section
        className={`flex flex-col w-full h-full  p-5 rounded-xl transition-transform duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "sm:ml-0" : "sm:ml-[1px]"
        }`}
      >
        <div className="flex flex-row h-full mt-3">
          <div className="flex flex-col flex-auto h-full p-1 pt-10">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};
