import React from 'react'
import TaskItem from './TaskItem'

const TasksList = (props) => {

    const { tasks, removeItem , EditItem } = props
    return (


        <div>
            {tasks.length===0 ? 
            <div>
                <p>No Tasks found</p>
                <p>Add your first task</p>
            </div>
                :(
            <div>
                    <h1>My tasks - {tasks.length}</h1>

                    {tasks.map((task) => {

                       return  <TaskItem key = {task.id} {...task} removeItem = {removeItem} EditItem = {EditItem}/>
                    })}
            </div>)
        }</div>)
}

export default TasksList 