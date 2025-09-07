import React from "react";
import "./output.css";

const Output = ({ tasks, onToggle, onDelete }) => {
  console.log("TASKS RECEIVED IN TaskOutput:", tasks);

  if (!Array.isArray(tasks)) {
    return <p>Error: Invalid task prop.</p>;
  }

  return (
    <div>
      <h2>Your list of tasks to be done!!</h2>

      {tasks.length === 0 ? (
        <p>No tasks added yet</p>
      ) : (
        <ul>
          {tasks.map((item) => (
            <li className="list" key={item._id}>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "gray" : "black",
                }}
              >
                {item.text}
              </span>

              <div className="actions">
                <button
                  type="button"
                  onClick={() => onToggle(item._id)}
                  className="toggle-btn"
                >
                  {item.completed ? "Undo" : "Done"}
                </button>

                <button
                  type="button"
                  onClick={() => onDelete(item._id)}
                  className="delete-btn"
                >
                   Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Output;
