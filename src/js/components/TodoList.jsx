import React, { useState } from "react";

export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        const task = input.trim();
        if (task) {
            setTasks([...tasks, task]);
            setInput("");
        }
    };

    const taskAddKey = (keyPressEvent) => keyPressEvent.key === "Enter" && addTask();

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <h1 className="text-center">To-Do List</h1>

            <input
                type="text"
                className="form-control"
                placeholder="To add a new task, type it here then press Enter"
                value={input}
                onChange={(newTaskEvent) => setInput(newTaskEvent.target.value)}
                onKeyDown={taskAddKey}
            />

            <ul className="list-group shadow mt-3">
                {tasks.length === 0 ? (
                    <li className="list-group-item text-muted"> No pending tasks. You're all caught up! </li>
                ) : (
                    tasks.map((task, i) => (
                        <li key={i} className="list-group-item d-flex justify-content-between">
                            {task}
                            <span className="text-danger fw-bold delete-btn" onClick={() => deleteTask(i)}> x </span>
                        </li>
                    ))
                )}
            </ul>

            {tasks.length > 0 && (
                <div className="text-muted mt-2">
                    {tasks.length} {tasks.length === 1 ? "item" : "items"} left
                </div>
            )}
        </div>
    );
};