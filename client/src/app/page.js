'use client';
import styles from './page.module.css'
import NavBar from './Components /NavBar/NavBar'
import Hero from './Components /Hero/Hero'
import FoodInformation from './Components /FoodInformation/FoodInformation';
import Loading from './Components /Loading/Loading';
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import Image  from 'next/image';
import rutgers from '/public/rutgers.png'
import { motion } from 'framer-motion';


export default function Home() {
  const [loading,setLoading] = useState(true);
  return (
   
       <AnimatePresence mode='sync'>
       {loading ? (
      <Loading
      key='loader'
      setLoading={setLoading}
      />
       ) : 
       <>
       
       <Hero/>
      
       
       <motion.div className={styles.plate}
       layoutId="plate"
       initial={{opacity:0.25}} animate={{opacity:1}} transition={{ duration:1, ease:[0.5, 0.02, 0.01, 0.95]} }
       >
        
        <Image src={rutgers} width={200} height={200}/>
       </motion.div>
       <FoodInformation/>
       </>
       }
       </AnimatePresence>
   
  )
}
