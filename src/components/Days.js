import React from 'react'

const Days = (props, name, duration, priority) => {
    return (
        // <table className='create'>
        <div>
            
            <ul>
                <li className="separate">
                    <li className="a">{props.name}</li>
                    <li className="a">Duration: {props.duration}</li>
                    <li className="a">Priority: {props.priority}</li>
                </li>
            </ul>
        </div>
        // </table>
    )
  }

export default Days