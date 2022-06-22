import React from "react";
import Days from "./Days";

function DaysContainer({taskValues, day}) {
    let tasks = taskValues.filter((task) => task.day === day )
    console.log(tasks)
    tasks = tasks.map((task) => {
        return <Days name={task.name} duration={task.duration} priority={task.priority}/>
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