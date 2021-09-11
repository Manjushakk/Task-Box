import React , {useState, useEffect} from 'react'
import axios from 'axios'

import TasksList from './TasksList'
import AddTask from './AddTask'

const TasksContainer = (props) => {

    const [tasks, setTasks] = useState([])

    const addItem = (task) =>{

        setTasks([...tasks, task])
    }

    const removeItem = (id) => {

        const result = tasks.filter((t) => {

            return t.id !== id
        })

        setTasks(result)
    }

    const EditItem = (task) => {

        const result = tasks.map((t) => {

            if(t.id === task.id){

                return {...t, ...task}
            }
            else {
                return {...t}
            }
        })

        setTasks(result)

    }
    useEffect(() => {

        axios.get('http://localhost:3033/api/tasks')

        .then((response) => { //success

            const result = response.data
            setTasks(result)
        })

        .catch((err) => { // failure

            alert(err.message)
        })
    },[])

    return (

        <div>
            <p>Tasks Container</p>
            <TasksList tasks = {tasks} removeItem = {removeItem} EditItem = {EditItem}/>
            <AddTask addItem = {addItem}/>
        </div>
    )
    
}

export default TasksContainer