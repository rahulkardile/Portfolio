import { motion } from 'framer-motion'

const Animate = () => {
  return (
    <motion.div
    initial={{
        opacity: 0, x: '-100vh'
    }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
        type: 'spring', bounce: 0.6,
        duration: 2,
        delay: 1,
        yoyo: Infinity 
    }}

    whileHover={{
        scale:1.2,
        transition: { yoyo: Infinity }
    }}

    className='w-16 m-auto mt-20 h-16 bg-red-300'>
        <h1>Animate</h1>
    </motion.div>
  )
}

export default Animate