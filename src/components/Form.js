import React, { useState } from 'react'

function Form () {

    // const initialState = ("")
    const [task, setTask] = useState("")
    

    const handleSubmit = event => {
        event.preventDefault();
        // onAddTask(setTask)
        // setTask(initialState)
        const task = { name, duration, priority }


        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        }).then(()=> {
            console.log("new Task Added")
        })


    }

    const handleTask = (e) => {
        console.log(e.target.value)
        // const { name, value } = e.target
        // setTask((previousTaskData) => ({...previousTaskData, [name]:value}))
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Add A Task</p>
                        <input type="text" name="name" value="value" onChange={handleTask}/>

                    </label>
                </fieldset>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default Form;