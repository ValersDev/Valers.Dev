import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sobre Mí
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">¡Hola! Soy ValersDev</h3>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget 
              aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, 
              nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <p className="text-gray-300 mb-4">
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget 
              aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, 
              nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
              VD
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 