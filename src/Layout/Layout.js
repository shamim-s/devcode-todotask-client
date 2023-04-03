import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import './Layout.css';
import { HiChevronDoubleRight, HiOutlineCheckCircle,HiOutlineTrash, HiOutlinePlusCircle } from "react-icons/hi";
import { AuthContext } from "../Context/Context";

const Layout = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
          <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 lg:w-96 md:w-80 w-80  bg-base-100 border pace-y-6 relative">
          <label
            htmlFor="my-drawer-2"
            className="w-12 h-9 bg-[#fff] lg:hidden flex justify-end items-center absolute top-2 -right-9 rounded-tr-full rounded-br-full"
          >
            <HiChevronDoubleRight className="text-2xl text-[#1e90ff] mr-1"/>
          </label>
          <Profile/>
            {/* <!-- Sidebar content here --> */}
            <NavLink to={'/'} className=" font-semibold border-l-4 pl-4 p-2 mt-4 border-[#1e90ff] text-[#1e90ff]">
              <span className="flex items-center gap-3 text-lg"><HiOutlinePlusCircle className="text-2xl"/>
               Add Task</span>
            </NavLink>
            <NavLink to={'/completed'} className=" font-semibold border-l-4 pl-4 p-2 mt-4 border-[#1e90ff] text-[#1e90ff]">
            <span className="flex items-center gap-3 text-lg"><HiOutlineCheckCircle className="text-2xl"/>
               Cpmpleted</span>
            </NavLink>
            <NavLink to={'/trash'} className=" font-semibold border-l-4 pl-4 p-2 mt-4 border-[#1e90ff] text-[#1e90ff]">
            <span className="flex items-center gap-3 text-lg"><HiOutlineTrash className="text-2xl"/>
               Trash</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
