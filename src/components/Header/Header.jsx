import React from "react";
import "./Header.css";

function Header({ onAddNewTask }) {
  return (
    <header className="Header">
      <button onClick={onAddNewTask}>Add New Task</button>
    </header>
  );
}



export default Header;
