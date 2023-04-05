import {useState} from 'react'
import FormSection from './FormSection'
import TodoList from './TodoList'
import { nanoid } from 'nanoid'

const TodoApp = () => {

    // data source
    const initialTasks = []

    const [tasks, setTasks] = useState(initialTasks);

    const addNewTask = (task) => {
        console.log(`In the todoapp: The new task is ${task}`)

        const taskObject = {
            id: nanoid(),
            name: task
        }
        const updatedTasks = [taskObject, ...tasks];
        console.log({updatedTasks})
        setTasks(updatedTasks)
    }

    return (
        <div className='container'>
            <FormSection handleClick={addNewTask} />
            <TodoList tasks={tasks} />
        </div>
    )
}

export default TodoApp