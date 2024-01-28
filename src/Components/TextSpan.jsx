import {motion, useAnimationControls} from 'framer-motion'
import { useState } from 'react';

const TextSpan = ({children}) => {
    const controls=useAnimationControls();
    const [isPlaying, setIsPlaying]=useState(false);

    const rubberband=()=>{
        controls.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
            transition:{
                times:[0, .4, .6, .7, .8, .9]
            }
         })
         setIsPlaying(true)
        }

  return (
    <motion.span animate={controls} onMouseOver={()=>{ 
    if(!isPlaying)
        rubberband()
    }}
    onAnimationComplete={()=>setIsPlaying(false)}
    className='inline-block cursor-pointer' >
        {children}
    </motion.span>
  )
}

export default TextSpan