'use client';
import styles from './Hero.module.css'
import {AnimatePresence, easeIn, motion} from 'framer-motion'
import CircleSideBar from '../CircleSideBar/CircleSideBar';
import rutgers from '/public/rutgers.png'
import Image from 'next/image';
import NavBar from '../NavBar/NavBar';
import { useState } from 'react';
//container to stagger the letter animations
const container = {
    animate : {
        transition: {
            staggerChildren:0.1,
            delayChildren:1.1,
            ease:'ease'
           
        }
    }
}
// letter animation that rises each letter upwards
const letterAnimation = {
    initial: {
        y:600,

      },
      animate: {
        y:0,
      
        transition: {
          ease: [0.5, 0.02, -0.05, 0.95],
          duration:1
        }
      }
}

const TopRow= ({title}) => {
    return (
        <div className={`${styles.top_row} ${styles.row}`}>
            <AnimatedLetters title={title}/>
        </div>
    )
}
const MiddleRow= ({title}) => {
    return (
        <div className={`${styles.mid_row} ${styles.row}`}>
            <AnimatedLetters title={title}/>
        </div>
    )
}
// const BottomRow= ({title}) => {
//     return (
//         <div className={`${styles.bot_row} ${styles.row}`}>
//             <AnimatedLetters title={title}></AnimatedLetters>
//         </div>
//     )
// }

const AnimatedLetters = ({title}) => {
    return (
        <motion.span
        variants={container}
        initial="initial"
        animate="animate"
        >
        {[...title].map((letter,i) => (
            <motion.span className={styles.letters} variants={letterAnimation} key={i}>{letter}</motion.span>
        ))}
        </motion.span>
    )
}

export default function Hero() {
    const [button,setButton] = useState(false);
    return (
    <div className={styles.hero_container}>
        <NavBar/>
       
        <motion.div className={styles.hero_row}>
        <TopRow title={"SCARLET PLATES"}/>
        </motion.div>
        
       
        <div className={styles.center}>
        <h3>SCARLET SERVED FLAVOR DESERVED</h3>
            <button onClick={()=>{setButton(!button)}}>START MEAL PLANNING</button>
            {button ?  <div className={styles.campus_menu}>
        <p>College Avenue</p>
        <p>Livingston</p>
        <p>Busch</p>
        <p>Cook Douglas</p>
      </div>: ""}
        </div>

    
    </div>
    )
}