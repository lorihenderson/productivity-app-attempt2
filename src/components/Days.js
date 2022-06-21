import React from 'react'

const Monday = (props, name, duration, priority) => {
    return (
        // <table className='create'>
        <div>
            
            <ul>
                <li className="separate">
                    <li className="separate">{props.name}</li>
                    <li className="separate">Duration:{props.duration}</li>
                    <li className="separate">Priority:{props.priority}</li> 
                </li>
            </ul>
        </div>
        // </table>
    )
  }

export default Monday