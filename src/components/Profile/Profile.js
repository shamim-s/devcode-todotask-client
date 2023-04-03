import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="p-4 lg:w-80 w-72 sm:flex sm:space-x-6 border text-[#181818]">
      <div className="lg:w-40 w-36">
        <img
          src="https://source.unsplash.com/100x100/?portrait?1"
          alt=""
          className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
          <span className="text-sm dark:text-gray-400">General manager</span>
        </div>
        <div className="space-y-1">
          <span className="flex items-center space-x-2">
            <span className="dark:text-gray-400 text-sm">
              {user?.email}
            </span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="dark:text-gray-400">+25 381 77 983</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
