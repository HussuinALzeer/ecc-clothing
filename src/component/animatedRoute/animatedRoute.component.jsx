import React from "react";

import { Route,Routes ,useLocation } from 'react-router-dom';

import Homepage from "../../pages/homepage/homepage.conponent";
import Shoppage from "../../pages/shop/shop.component";
import SignInAndOut from "../../pages/sign-in/up/sign.component";
import CheckOutComponent from "../check-out/checkOut.component";

import Category from "../category/category.component";

import { AnimatePresence } from'framer-motion';

const AnimatedRoute = () =>{

    const Location = useLocation()
    
    
    return(
      
     <AnimatePresence>   
        <Routes location={Location} key={Location.pathname} >
            <Route exact path="/" element={<Homepage />} />
            <Route  path="/shop/*" element={<Shoppage />} />
              <Route  path="/shop/:collecionID" element={<Category />} />
            <Route exact  path="/signIn" element={<SignInAndOut />} />
            <Route exact  path="/checkout" element={<CheckOutComponent/>} />
        </Routes>
      </AnimatePresence>
    
    )
}


export default AnimatedRoute;