import React from 'react'


// This is where the list of tasks will be listed
const TodoList = (props) => {

    const renderedTasks = props.tasks.map((task, index) => {
        return (
            <div key={task.id} className='task'>
                <span className='taskName'>
                    {task.name}
                </span>
                <div className='btn-group'>
                    <button className='edit-btn'>
                        Edit
                    </button>
                    <button className='delete-btn'>
                        Delete
                    </button>
                </div>

            </div>
        )
    })

    return (
        // Tasks
        <div className='tasks'>
            {renderedTasks}
        </div>
    )
}

export default TodoList