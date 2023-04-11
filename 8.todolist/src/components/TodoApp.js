import { useState } from 'react'
import FormSection from './FormSection'
import TodoList from './TodoList'
import { nanoid } from 'nanoid'

const TodoApp = () => {

    // data source
    const initialTasks = JSON.parse(localStorage.getItem("todoList")) || [];

    console.log(initialTasks)

    const [tasks, setTasks] = useState(initialTasks);

    const addNewTask = (task) => {
        console.log(`In the todoapp: The new task is ${task}`)

        const taskObject = {
            id: nanoid(),
            name: task
        }
        const updatedTasks = [taskObject, ...tasks];
        console.log({ updatedTasks })
        setTasks(updatedTasks)
        localStorage.setItem('todoList', JSON.stringify(updatedTasks))
    }

    const deleteTask = (taskId) => {
        // delete logic
        console.log(`${taskId} item deleted`)
        // filters out the item whose id is equal to taskId
        const updatedTasks = tasks.filter((item) => {
            return item.id !== taskId
        })
        console.log(updatedTasks)
        setTasks(updatedTasks)
        localStorage.setItem('todoList', JSON.stringify(updatedTasks))

    }

    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center', marginTop: '8px' }}>TODO APP</h2>
            <FormSection handleClick={addNewTask} />
            <h2 style={{ textAlign: 'center', marginTop: '8px', borderBottom: '1px solid gray', padding: '8px' }}>List</h2>
            {tasks.length > 0 ?
                <TodoList tasks={tasks} onDeleteClick={deleteTask} /> :
                <p>No item in the list</p>
            }

        </div>
    )
}

export default TodoApp