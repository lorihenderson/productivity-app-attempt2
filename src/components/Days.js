import React from 'react'

const Days = ({task, handleDelete}) => {
    const {name, priority, duration, id} = task
    return (
        // <table className='create'>
        <div>
                <ul>
                    
                   <li className="separate">
                   <h4>{name}</h4>
                    <h4>Duration: {duration}</h4>
                    <h4>Priority: {priority}</h4>
                    </li>
                    <button className="deletebtn" onClick={()=>handleDelete(id)}>Delete Task</button> 
                </ul>  
        </div>
        // </table>
    )
  }

export default Days