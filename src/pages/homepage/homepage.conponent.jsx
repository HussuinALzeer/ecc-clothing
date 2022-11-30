import React from "react";


import './homepage.styles.scss'

import Directory from "../../component/directory/directory.component";
import { motion } from'framer-motion';
import { HomepageContianer } from "./homepage.styles";

const Homepage = (props) => {

    return(
    
    <motion.div 
        
    initial ={{opacity:0 }}
    animate= {{opacity:1}}
    exit ={{opacity:0}}
    className="homepage">

        <Directory></Directory>
    </motion.div>

    
)};


export default Homepage;