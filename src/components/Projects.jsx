import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";

const ProjectsData = [
  {
    image: image1,
    title: "AI-Powered Finance App",
    description:
      "A smart finance management application leveraging OpenAI's API for intelligent insights, automated expense tracking, and personalized financial recommendations. The platform integrates AWS services for scalability, secure payments, and seamless email notifications.",
    technologies: [
      "Java, OpenAI API, EC2, Joi, AWS S3, Node.js, MongoDB, Express.js, AWS SES, Puppeteer, PM2, Nginx",
    ],
    githubLink: "https://github.com/yourusername/ai-finance-app",
  },
  {
    image: image2,
    title: "blog app",
    description:
      "A full-stack Spring Boot blog application with RESTful APIs for users, posts, categories, comments, authentication, and more!",
    technologies: [
      "Java, MySQL, Hibernate, Spring Jpa, AWS RDS, AWS Elastic Beanstalk, Swagger UI",
    ],
    githubLink: "https://github.com/AjayWankhade/SpringBoot-Blog-App ",
  },
  {
    image: image3,
    title: "spelling_checker_app",
    description:
      "Real-Time Spell Checking Application This application combines Python and React to provide an efficient, real-time spell-checking tool. It utilizes the spellchecker library in Python for spelling correction, and the React frontend features a user-friendly interface with a dark mode toggle for enhanced user experience.",
    technologies: ["JavaScript, HTML, CSS, Python"],
    githubLink: "https://github.com/AjayWankhade/spelling_checker_app",
  },
  {
    image: image4,
    title: "E-commerce app",
    description:
      "The Product Store application is a fully functional e-commerce platform that allows users to browse and search products by category. Built using React and Redux, this project leverages the DummyJSON API for data fetching, ensuring efficient state management and a seamless user experience.",
    technologies: ["JavaScript, HTML, Tailwind, MySQL"],
    githubLink: "https://github.com/AjayWankhade/e-commerce-client",
  },
  {
    image: image5,
    title: "todo app",
    description: "A simple todo application built with React and MySQL.",
    technologies: ["Java, React, Tailwind, MySQL"],
    githubLink: "https://github.com/AjayWankhade/to-do_app",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 ">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white mt-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <FaGithub size={20} /> View on GitHub
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Project = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center gap-16 justify-center p-4 md:px-14 md:py-24 "
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-5xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col  gap-16 text-white">
        {ProjectsData.map((project, index) => (
          // eslint-disable-next-line react/no-unknown-property
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
