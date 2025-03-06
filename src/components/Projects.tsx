import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment processing.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      affiliation: 'Personal Project',
      image: 'https://via.placeholder.com/600x400/3730a3/ffffff?text=E-commerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      skills: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      affiliation: 'Client Project',
      image: 'https://via.placeholder.com/600x400/4f46e5/ffffff?text=Task+App'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with smooth animations.',
      skills: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      affiliation: 'Personal Project',
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Portfolio'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
      skills: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
      affiliation: 'Open Source',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Weather+App'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full py-20">
      <motion.div
        className="max-w-6xl mx-auto"
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
          Mis Proyectos
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="card overflow-hidden"
              variants={item}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Afiliación:</p>
                  <p className="text-indigo-400">{project.affiliation}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-2">Tecnologías:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects; 