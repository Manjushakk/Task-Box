import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const  TasksForm = (props) => {

    const {formSubmit, isSaved, toggleIsSaved , id : slNo, title : taskTitle  , status : taskStatus } = props

    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [ title, setTitle ] = useState(taskTitle? taskTitle : '')
    const [ status, setStatus ] = useState( taskStatus? taskStatus : false)

    useEffect(() => {

        if(isSaved){

                setId(uuidv4())
                setTitle('')
                setStatus(false)
                toggleIsSaved()
        }

    }, [isSaved])

    const handleChangeTitle = (e) => {

        setTitle(e.target.value)

    }

    const handleChangeStatus = (e) => {

        setStatus(e.target.checked)
        
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const formData = {
            
                id:id,
                title:title,
                status:status
        }

        formSubmit(formData)
    }

    return (

        <div>
            <form onSubmit = {handleSubmit}>
                <label>Title</label><br/>
                <input type = "text" value = {title} onChange = {handleChangeTitle} /><br/>
                <input type = "checkbox" checked ={status} onChange = {handleChangeStatus} /> <label>Completed </label><br/>
                <input type = "submit" value = "save" />
            </form>
        </div>
    )


}

export default TasksForm