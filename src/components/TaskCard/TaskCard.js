import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BiCircle } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlinePencilAlt, HiOutlineTrash, HiOutlineX } from "react-icons/hi";
import { AuthContext } from "../../Context/Context";

const TaskCard = ({ task }) => {
  const { edit, setEdit } = useContext(AuthContext);
  const handleComplete = () => {
    axios
      .put(`https://devcode-server.vercel.app/task/update`, task)
      .then(function (response) {
        console.log(response.data);
        toast.success("Task Completed successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Delete a task
  const handleDelete = (task) => {
    axios
      .delete(`https://devcode-server.vercel.app/task/${task._id}`)
      .then(function (response) {
        console.log(response.data);
        toast.success("Task Deleted successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="lg:w-96 md:w-80 w-96 mx-auto bg-white shadow-md rounded-md h-40 p-6 relative">
      <h1
        className={`text-2xl font-semibold mb-3 ${
          task.completed && "line-through text-green-500"
        }`}
      >
        {task.name}
      </h1>
      <p className="text-lg">Date: {task.date}</p>
      {task.completed ? (
        <FiCheckCircle className="absolute top-4 right-4 text-2xl cursor-pointer text-green-500" />
      ) : (
        <BiCircle
          onClick={handleComplete}
          className="absolute top-4 right-4 text-2xl cursor-pointer"
        />
      )}
      {window.location.pathname !== "/completed" && (
        <div className="flex mt-4 justify-end gap-4">
          {edit && edit._id === task._id ? (
            <HiOutlineX
              onClick={() => setEdit({})}
              className="text-2xl cursor-pointer text-red-500 absolute bottom-4 right-14"
            />
          ) : (
            <HiOutlinePencilAlt
              onClick={() => setEdit(task)}
              className="text-2xl cursor-pointer hover:text-green-500 absolute bottom-4 right-14"
            />
          )}
          <HiOutlineTrash
            onClick={() => handleDelete(task)}
            className="text-2xl hover:text-red-500 cursor-pointer absolute bottom-4 right-4"
          />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
