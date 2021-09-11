import React, {useState} from 'react'
import axios from 'axios'

import EditTask from './EditTask'

const TaskItem = (props) => {

    const {id, title, status, removeItem, EditItem } = props
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {

        setToggle(!toggle)
        
    }

    const handleRemove = () => {

        const confirmRemove = window.confirm("Are you sure???")
        if(confirmRemove){

            axios.delete(`http://localhost:3033/api/tasks/${id}`)
             
            .then((response) => {

                const result = response.data
                removeItem(result.id)
            })

            .catch((err) => {

                alert(err.message)
            })

        }

        
        
    }

    return (

        <div>
            {toggle ? 
            <div>
                <EditTask id={id} title = {title} status = {status} EditItem = {EditItem} handleToggle={handleToggle} />
                <button onClick = {handleToggle}>Cancel</button>
            </div> : 
            
            (<div>
                <h3>{title}</h3>
                <button onClick = {handleToggle }>Edit</button>
                <button onClick = {handleRemove }>remove</button>
            </div>)}
            
        </div>
    )
}

export default TaskItem 