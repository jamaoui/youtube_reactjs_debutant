import React from 'react';
import {motion} from 'framer-motion'

function Card({title, children, image, reverse = false, bg = 'dark'}) {
    return (
        <>
            <motion.div
                initial={{
                    y: '100vh',
                }}
                animate={{
                    y: 0
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
                className={`bg-${bg} m-3 p-3 text-white overflow-hidden `}>
                <div className={`d-flex align-items-center h-100 ${(reverse) ? 'flex-row-reverse' : ''}`}>
                    <div className="my-3 py-3">
                        <motion.h2
                            className="display-3"
                            animate={{
                                color: 'darkgoldenrod'
                            }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                            }}
                        >
                            {title}
                        </motion.h2>
                        <p className="lead">{children}</p>
                    </div>
                    <motion.img style={{cursor: 'pointer'}} transition={{
                        duration: 0.5,
                        ease: 'circInOut'
                    }} whileTap={{
                        y: '-10vh'
                    }}  src={image} width={'20%'} alt=""/>
                </div>
            </motion.div>

        </>
    );
}

export default Card;