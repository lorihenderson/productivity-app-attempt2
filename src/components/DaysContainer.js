import React from "react";
import Monday from "./Monday";

function DaysContainer({taskValues, day}) {
    let tasks = taskValues.filter((task) => task.day == day )
    console.log(tasks)
    tasks = tasks.map((task) => {
        return <Monday name={task.name} />
    })
    return (
        <div>
            Days Container
            {tasks}
        </div>
    )
}

export default DaysContainer