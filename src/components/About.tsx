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
            Mi nombre es Victor Valero, tengo 23 años y soy Ingeniero Informático. 
            Actualmente trabajo como desarrollador de software a tiempo completo en <strong>ecoDeliver</strong>, 
            donde disfruto aplicando mi pasión por la tecnología y aprendiendo constantemente nuevas herramientas y tecnologías.
            </p>
            <p className="text-gray-300 mb-4">
            Me considero un desarrollador creativo y entusiasta, siempre en busca de nuevos desafíos y oportunidades para seguir creciendo. 
            Me apasiona crear soluciones elegantes y eficientes que aporten valor y mejoren la vida de las personas. 
            Creo firmemente que la tecnología puede hacer del mundo un lugar mejor, y me encanta ser parte de ese cambio.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Golang</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Dart</span>
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