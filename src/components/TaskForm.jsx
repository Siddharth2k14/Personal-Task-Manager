import React, { useState } from 'react'

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState({title: "", description: "", deadline: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask({title: "", description: "", deadline: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Title'
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                required
            />

            <textarea 
                placeholder='Description'
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value})}
            />

            <input 
                type='date'
                value={task.deadline}
                onChange={(e) => setTask({ ...task, deadline: e.target.value})}
                required
            />
            <button type='submit'>Add Task</button>
        </form>
    );
};

export default TaskForm;