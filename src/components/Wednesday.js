import React from 'react'

const Wednesday = (props) => {
    return (
        <table className='create'>
        <div>
            <p style={{color: props.color}}>Hello Today is {props.children} </p>
            <ul>
                <li></li>
            </ul>
        </div>
        </table>
    )
  }

export default Wednesday