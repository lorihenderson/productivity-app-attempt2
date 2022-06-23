import React from 'react'
import { motion, AnimatePresence } from "framer-motion"


const Days = ({task, handleDelete}) => {
    const {name, priority, duration, id} = task
    return (
        // <table className='create'>
        
        <AnimatePresence>

              <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              exit={{ opacity: 0 }}
              >
   
              
                    
                  <li className="separate">
                  <button className="deletebtn" onClick={()=>handleDelete(id)}>X</button> 
                    <h4>{name}</h4>
                    <h4>Duration: {duration}</h4>
                    <h4>Priority: {priority}</h4>
                  </li>
                    
                 
              </motion.ul> 
        </AnimatePresence>
        
        // </table>
    )
  }

export default Days