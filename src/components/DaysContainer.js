import React from "react";
import Days from "./Days";
import { motion, AnimatePresence } from "framer-motion"


function DaysContainer({taskValues, day, handleDelete}) {
   
    let tasks = taskValues.filter((task) => task.day === day )
    tasks = tasks.map((task) => {
        return <Days handleDelete={handleDelete} key={task.id} task={task}/>
    })
    return (
        
    <AnimatePresence>
        <motion.table className="create" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4 }}
        exit={{ opacity: 0 }}
        >
           
            <span className="spanday">{day}'s Tasks</span>
            {tasks}
           
        </motion.table> 
    </AnimatePresence>
        
        
    )
}

export default DaysContainer