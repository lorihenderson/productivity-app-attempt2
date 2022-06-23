import React, { useState } from 'react'

const Form= ({ onAddTask, setDayTask }) => {
    const initialState = {
        name: "",
        duration:"",
        priority:"",
        day:""
    }
    const [formData, setFormData] = useState(initialState)
    
    const handleChange= (e) => {
    const { name, value } = e.target

    setFormData((previousFormData) => ({...previousFormData, [name]:value}))
    console.log(formData)
   };

   const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/tasks", {
        method:"POST",
        headers: { 
            "Content-Type": "application/json",
            "Accepts": "application/json"
                },
                body: JSON.stringify(formData) 
    }) 
    .then(res => res.json())
    .then(task => onAddTask(task))
    const dataStored = setFormData(initialState)
   
   }

    return(
        <div className='create'>
            <table>
            <h2>Add a Task</h2><div>
            <form className='form' autoComplete='off' onSubmit={handleSubmit} >
                <label>Task Name:</label>
                <input
                    type='text' required id='name' name='name' onChange={handleChange} value={formData.name}
    
                />
                <label>Duration:</label>
                <input
                    type='text'required id='duration' name='duration' onChange={handleChange} value={formData.duration}
                    
                />
                <label>Priority:</label>
                <select
                    id='priority' name='priority' onChange={handleChange} value={formData.priority} >
                    <option className="select-text" value='select-priority'>-S e l e c t-</option>
                    <option className='dropdown-text' value='high'>H i g h</option>
                    <option className='dropdown-text' value='moderate'>M o d e r a t e</option>
                    <option className='dropdown-text' value='low'>L o w</option>
                </select>
                <label>Day:</label>
                <select
                    id='day' name='day' onChange={handleChange} value={formData.day}>
                    <option className="select-text" value='select-day'>-S e l e c t-</option>
                    <option className='dropdown-text' value='Sunday'>S u n d a y</option>
                    <option className='dropdown-text' value='Monday'>M o n d a y</option>
                    <option className='dropdown-text' value='Tuesday'>T u e s d a y</option>
                    <option className='dropdown-text' value='Wednesday'>W e d n e s d a y</option>
                    <option className='dropdown-text' value='Thursday'>T h u r s d a y</option>
                    <option className='dropdown-text' value='Friday'>F r i d a y</option>
                    <option className='dropdown-text' value='Saturday'>S a t u r d a y</option>
                </select>
                <div></div>
                <button type="submit" className="taskbtn">Add</button>
                
            </form>
            </div>
            </table>
        </div>
    )
}

export default Form