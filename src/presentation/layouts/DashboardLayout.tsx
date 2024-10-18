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
        <div className="mt-10 flex flex-col flex-grow p-2">
          <h1 className="font-bold  text-lg lg:text-3xl">Helper Bot</h1>
          <span className="text-xs">
            Welcome! I can help you with your tasks...
          </span>
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
