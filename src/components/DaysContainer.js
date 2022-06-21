import React from "react";
import Days from "./Days";

function DaysContainer({taskValues, day}) {
    let tasks = taskValues.filter((task) => task.day == day )
    console.log(tasks)
    tasks = tasks.map((task) => {
        return <Days name={task.name} />
    })
    return (
        
        <div className="create"><table>
            Today's Tasks
            {tasks}
        </table></div>
        
    )
}

export default DaysContainer