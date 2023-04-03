import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import { HiOutlineX } from "react-icons/hi";

const Trash = () => {
    const [tasks, setTasks] = useState([]);
    const {user} = useContext(AuthContext);

    //Get All Tasks
  useEffect(() => {
    axios
      .get(`https://devcode-server.vercel.app/deletdtask/${user?.email}`)
      .then(function (response) {
        setTasks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user, tasks]);
    return (
        <div className='lg:mt-0 mt-10'> 
            <h1 className='text-2xl font-semibold'>Deleted Tasks</h1>

            <div className="mt-4 grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        
            {tasks?.map((task) => (
              <div className="lg:w-96 md:w-80 w-96 mx-auto shadow-md bg-white border rounded-md h-40 p-6 relative">
                <HiOutlineX className='absolute top-[10%] right-6 text-9xl text-red-500 opacity-10'/>
              <h1
                className={`text-2xl font-semibold mb-3 line-through text-red-500`}
              >
                {task.name}
              </h1>
              <p className="text-lg">Date: {task.date}</p>
            </div>
            ))}
         
      </div>
        </div>
    );
};

export default Trash;