import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

function Homepage() {

    return(
    <AnimatePresence>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        exit={{ opacity: 0 }}
        >

                <div className="homepage"> Welcome to our sexy app
                <blockquote className='quotes'>
                    It is during our darkest moments that we must focus to see the light.
                    <br/>
                    ~Aristotle~
                </blockquote>
                <blockquote className='quotes'>
                    The only true wisdom is in knowing you know nothing.
                    <br/>
                    ~Socrates~
                </blockquote>
                <blockquote className='quotes'>
                    Have you tried it?
                    <br/>
                    ~Antonio Reid~
                </blockquote>
                <span>We miss you Antonio &#129496;</span>
                </div>
        </motion.div>
    </AnimatePresence>
    )
}
export default Homepage;