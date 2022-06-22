import React from 'react'

const Days = ({task, handleDelete}) => {
    const {name, priority, duration, id} = task
    return (
        // <table className='create'>
        <div>
                <ul>
                    
                  <li className="separate">
                  <button className="deletebtn" onClick={()=>handleDelete(id)}>X</button> 
                    <h4>{name}</h4>
                    <h4>Duration: {duration}</h4>
                    <h4>Priority: {priority}</h4>
                  </li>
                    
                </ul>  
        </div>
        // </table>
    )
  }

export default Days