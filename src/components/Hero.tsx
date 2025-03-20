import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="w-full py-20 md:py-32">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="gradient-text">ValersDev</span>
        </motion.h1>
        
        <motion.div
          className="text-2xl md:text-3xl font-light mb-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-gray-300">
            "El código es el lenguaje del futuro,
          </p>
          <p className="text-gray-300">
            y tú eres su autor."
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="btn btn-primary inline-block"
          >
            Conoce más
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero; 