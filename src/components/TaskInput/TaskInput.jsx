import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import "./TaskInput.css";

function TaskInput({ onClose }) {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();

  const handleSaveTask = () => {
    if (description && deadline) {
      dispatch(
        addTask({ id: Date.now(), description, deadline, status: "pending" })
      );
      setDescription("");
      setDeadline("");
      onClose();
    }
  };

  return (
    <div className="TaskInput">
      <input
        type="text"
        placeholder="Enter task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleSaveTask}>Save Task</button>
    </div>
  );
}

export default TaskInput;
