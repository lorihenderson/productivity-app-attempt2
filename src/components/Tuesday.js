import React, { useState } from 'react'

const Tuesday= () => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('')
    const [priority, setPriority] = useState('select-priority')

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = { name, duration, priority };
        
        fetch('http://localhost:3000/tuesday', {
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(() => {
            console.log('New task added!')
        })
    }

    return(
        <div className='create'>
            <table>
            <h2>Add a Task</h2><div>
            <form onSubmit={handleSubmit}>
                <label>Task Name:</label>
                <input
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Duration:</label>
                <input
                    type='text'
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <label>Priority:</label>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value) }>
                    <option value='select-priority'>Select priority level</option>
                    <option value='high'>High</option>
                    <option value='moderate'>Moderate</option>
                    <option value='low'>Low</option>
                </select>
                <hr/>
                <button className="taskbtn">Add</button>
                
            </form>
            </div>
            </table>
        </div>
    )
}

export default Tuesday