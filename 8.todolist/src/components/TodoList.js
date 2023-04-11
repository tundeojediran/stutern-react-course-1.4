import React from 'react'


// When you want to pass data from the parent component to the child component, use data props
// When a child component wants to carry out an action in the parent component, you use callback function props

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
                    <button className='delete-btn' onClick={() => props.onDeleteClick(task.id)}>
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