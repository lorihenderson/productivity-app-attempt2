import React from 'react'

const Sunday= ({ task }) => {
    const {name, duration, priority, day} = task
   return(
    <div>
        <p>{name}</p>
        <p>{duration}</p>
        <p>{priority}</p>
        <p>{day}</p>
    </div>
   )
}

export default Sunday