import { useState } from 'react'

const FormSection = (props) => {

    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        const taskName = event.target.value
        // console.log(taskName);
        setNewTask(taskName);
    }

    const handleClick = () => {
        // console.log(`The new task is ${newTask}`)
        props.handleClick(newTask)
        setNewTask("");
    }

    return (
        <div className='newtask'>
            <input type='text' placeholder='Add a task' value={newTask} onChange={handleChange}  />
            <button className='push' onClick={handleClick}>Add</button>
        </div>
    )
}

export default FormSection