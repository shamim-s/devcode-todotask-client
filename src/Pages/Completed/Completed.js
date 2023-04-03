import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import TaskCard from "../../components/TaskCard/TaskCard";

const Completed = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://devcode-server.vercel.app/updatedtask/${user?.email}`)
      .then(function (response) {
        setTasks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user, tasks]);
  return (
    <div className="lg:mt-0 mt-10">
      <h1 className="text-2xl font-semibold">Completed Task</h1>
      <div className="mt-4 grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        
            {tasks?.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
         
      </div>
    </div>
  );
};

export default Completed;
