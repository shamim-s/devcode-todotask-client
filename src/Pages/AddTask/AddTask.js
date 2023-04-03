import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import { toast } from "react-hot-toast";
import axios from "axios";
import { format } from "date-fns";
import TaskCard from "../../components/TaskCard/TaskCard";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const date = format(new Date(), "PP");
  const { logoutUser, user, edit, setEdit } = useContext(AuthContext);

  //Get All Tasks
  useEffect(() => {
    axios
      .get(`https://devcode-server.vercel.app/task/${user?.email}`)
      .then(function (response) {
        setTasks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user, tasks]);


  //Add a new Task
  const handleAddTask = (e) => {
    e.preventDefault();
    const name = e.target.task_name.value;

    const data = {
      name,
      date,
      email: user.email,
      completed: false,
      pending: true,
    };

    axios
      .post("https://devcode-server.vercel.app/task/add",
       data)
      .then(function (response) {
        console.log(response.data);
        e.target.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //edit tasks
  const handleEdit = (e) => {
    e.preventDefault();
    const name = e.target.task_name.value;

    const data = {
        name,
        _id: edit._id
    };

    axios
      .put("https://devcode-server.vercel.app/task/edit", data)
      .then(function (response) {
        console.log(response.data);
        e.target.reset();
        setEdit({});
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(name)
  }

  //Logout User
  const handleLogout = () => {
    logoutUser().then(() => {
      toast.success("Logout Success");
    });
  };

  return (
    <div>
      <div className="bg-[#1e90ff] flex lg:flex-row md:flex-col lg:mt-0 mt-10 flex-col gap-4 justify-around items-center lg:h-24 rounded-lg lg:p-0 p-6">
        <h1 className="text-4xl font-bold text-[#fff]">Add New Task</h1>
        <form onSubmit={edit._id ? handleEdit : handleAddTask}>
          <input
            type="text"
            name="task_name"
            placeholder="task name"
            required
            defaultValue={edit ? edit.name : 'task name'}
            className="p-4 lg:w-96 rounded-tl-lg rounded-bl-lg focus:border-none active:border-none"
          />
          <button
            type="submit"
            className="p-4 bg-slate-800 hover:bg-slate-600 text-white cursor-pointer rounded-tr-lg rounded-br-lg"
          >
            {
                edit._id ? 'Update' : 'Add Task'
            }
          </button>
        </form>
        <button
          type=""
          onClick={handleLogout}
          className="btn rounded-md bg-red-500 border-none"
        >
          Logout
        </button>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold">Recent Tasks</h1>
        <div className="mt-4 grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
          {tasks?.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
