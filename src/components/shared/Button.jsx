import { motion } from 'framer-motion';

export const Button = (text) => {
    return (
        <motion.button
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            //onClick={}
        >
            {text}
        </motion.button>
    );
};
