import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTaskStatus } from "../../redux/tasksSlice";
import "./TaskList.css";
import { formatDateTime } from "../../utils/TimeFormat";

function TaskList({ searchQuery }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // for status update
  useEffect(() => {
    const now = new Date();
    tasks.forEach((task) => {
      if (new Date(task.deadline) < now && task.status === "pending") {
        dispatch(updateTaskStatus({ id: task.id, status: "expired" }));
      }
    });
  }, [tasks, dispatch]);

  // filter task function
  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="TaskList">
     { filteredTasks.length < 1 && <h3>No Task Available</h3> }
      {filteredTasks.map((task) => (
        <div key={task.id} className={`TaskCard ${task.status}`}>
          <h3>
            <span style={{ fontWeight: "normal" }}>Task Details </span> : &nbsp;
            {task.description}
          </h3>
          <p className="task-status">
            <span className={`status-indigator ${task.status}`}> </span> status
            :- &nbsp;{task.status}
          </p>
          <p>Deadline :{formatDateTime(task.deadline)}</p>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
