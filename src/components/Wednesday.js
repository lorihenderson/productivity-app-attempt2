import React, { useState } from 'react'

const Wednesday= ({ task }) => {
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

export default Wednesday