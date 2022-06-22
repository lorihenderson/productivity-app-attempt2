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
                    <option value='select-priority'>Select priority level</option>
                    <option value='high'>High</option>
                    <option value='moderate'>Moderate</option>
                    <option value='low'>Low</option>
                </select>
                <label>Day:</label>
                <select
                    id='day' name='day' onChange={handleChange} value={formData.day}>
                    <option value='select-day'>Select day</option>
                    <option value='Sunday'>Sunday</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
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