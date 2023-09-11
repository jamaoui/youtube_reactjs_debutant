import React from 'react'
import image from './assets/images/luffy.png'
import {motion} from 'framer-motion'

const containerVariant = {
    hidden: {
        y: '-100vw'
    },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        }
    }
}

function HeroBanner() {
    return (
        <>
            <motion.div id='luffy'
                        variants={containerVariant}
                        initial='hidden'
                        animate='visible'
                        className="position-relative mt-5 pt-5 overflow-hidden text-center bg-light d-flex align-items-center">
                <div className="col-md-7 p-lg-5 mx-auto my-5">
                    <motion.h1
                        className="display-4 my-5"
                        initial={{
                            opacity: 0.5,
                            color: 'darkgreen'
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1.5,
                            color: 'darkgoldenrod'
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 1
                        }}
                    >
                        Monkey D. Luffy,
                    </motion.h1>
                    <motion.p className="lead"
                              animate={{
                                  scale: 1.1,
                                  fontWeight: 'bold',
                              }}
                              transition={{
                                  duration: 0.5,
                                  delay: 1
                              }}
                    >
                        Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since
                        childhood from the influence of his idol and mentor Red-Haired Shanks. At the age of 17, Luffy
                        sets sail from the East Blue Sea to the Grand Line in search of the legendary treasure, One
                        Piece, to succeed Gol D. Roger as "King of the Pirates".
                    </motion.p>
                    <motion.a className="btn btn-outline-primary btn-lg" href="#"
                              whileHover={{
                                  scale: 1.7,
                                  backgroundColor: 'darkgoldenrod',
                                  border: 'none',
                              }}
                    >Coming soon
                    </motion.a>

                </div>
                {/*<div className="col-md-5 p-lg-5 mx-auto my-5">
                    <img width={'60%'} src={image} alt=""/>
                </div>*/}
            </motion.div>
        </>
    );
}

export default HeroBanner;