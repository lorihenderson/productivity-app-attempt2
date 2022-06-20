import React from 'react'

const Friday= ({ task }) => {
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

export default Friday