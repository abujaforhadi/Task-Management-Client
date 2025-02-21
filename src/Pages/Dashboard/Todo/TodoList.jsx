import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaArrowAltCircleRight, FaEdit, FaCheckCircle } from "react-icons/fa";
import { MdOutlineLowPriority, MdDateRange } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";

const TodoList = ({ myPost, myPosts, setMyPosts }) => {
  const { user } = useContext(AuthContext);
  const { title, deadline, priority, description, status, _id } = myPost || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://taskserverme.vercel.app/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your task has been deleted.", "success");

            // Remove deleted task from state
            setMyPosts(myPosts.filter((item) => item._id !== id));
          }
        });
      }
    });
  };

  const updateTaskStatus = (id, newStatus) => {
    const statusText = newStatus === "Ongoing" ? "Ongoing" : "Completed";

    Swal.fire({
      title: `Mark task as ${statusText}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, mark as ${statusText}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://taskserverme.vercel.app/tasks/${newStatus.toLowerCase()}/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            // Update status directly in state
            setMyPosts((prev) =>
              prev.map((task) =>
                task._id === id ? { ...task, status: newStatus } : task
              )
            );

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Task marked as ${statusText}`,
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-4">
      <div className="card h-60 bg-base-100">
        <div className="card-body">
          <h2 className="card-title mr-6">
            {title}
            <span className={`p-2 rounded-xl text-white ${status === "Completed" ? "bg-green-500" : "bg-blue-500"}`}>
              {status}
            </span>
          </h2>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MdDateRange size={24} />
              <p>{deadline}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineLowPriority size={24} />
              <p>{priority}</p>
            </div>
          </div>

          <p>{description}</p>

          <div className="flex justify-between items-center">
            <div className="card-actions items-center">
              <Link to={`/dashboard/updateTask/${_id}`}>
                <button>
                  <FaEdit size={26} />
                </button>
              </Link>
              <button onClick={() => handleDelete(_id)}>
                <FaTrashAlt size={26} />
              </button>
            </div>
            <div className="space-x-3">
              {status !== "Completed" && (
                <button onClick={() => updateTaskStatus(_id, "Ongoing")} title="Mark as Ongoing">
                  <FaArrowAltCircleRight size={26} />
                </button>
              )}
              {status !== "Completed" && (
                <button onClick={() => updateTaskStatus(_id, "Completed")} title="Mark as Completed">
                  <FaCheckCircle size={26} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
