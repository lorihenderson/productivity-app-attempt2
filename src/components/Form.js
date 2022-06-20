import React, { useState } from 'react'

const Form= ({ onAddTask }) => {
    const initialState = {
        name: "",
        duration:"",
        priority:"",
        day:""
    }
    const [formData, setFormData] = useState(initialState)
    
   const handleChange= (e) => {
    //console.log(e.target)
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
    setFormData(initialState)

    window.alert("task has been added!")
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
                    <option value='sunday'>Sunday</option>
                    <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>
                    <option value='wednesday'>Wednesday</option>
                    <option value='thursday'>Thursday</option>
                    <option value='friday'>Friday</option>
                    <option value='saturday'>Saturday</option>
                </select>
                <hr/>
                <button type="submit" className="taskbtn">Add</button>
                
            </form>
            </div>
            </table>
        </div>
    )
}

export default Form