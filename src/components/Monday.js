import React from 'react'

const Monday = (props, dayTask, name) => {
    return (
        // <table className='create'>
        <div>
            <p style={{color: props.color}}>Hello Today is {props.children} </p>
            <ul>
                <li>{props.name}</li>
            </ul>
        </div>
        // </table>
    )
  }

export default Monday