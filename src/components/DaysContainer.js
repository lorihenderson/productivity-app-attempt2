import React from "react";
import Days from "./Days";

function DaysContainer({taskValues, day, handleDelete}) {
    let tasks = taskValues.filter((task) => task.day === day )
    console.log(tasks)
    tasks = tasks.map((task) => {
        return <Days handleDelete={handleDelete} key={task.id} task={task}/>
    })
    return (
        
        <div className="create">
            <table>
                <span className="spanday">{day}'s Tasks</span>
                {tasks}
            </table>
        </div>
        
    )
}

export default DaysContainer