import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import image from "/public/image.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Profile"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300  hover:-translate-y-5 hover:scale-105 hover:shadow-2xl  hover:shadow-indigo-600 md:w-[200px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-3.8xl leading-[1.2]">
            Ajay Wankhade
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-2xl flex items-center gap-2">
            <FaUserTie /> Software Developer
            <a
              href="/Ajay_Wankhade_Software_Developer.pdf"
              download
              className="flex items-center gap-2 text-white hover:text-blue-400 transition duration-300"
            >
              <AiOutlineDownload className="text-2xl" />
              <span className="text-lg">Resume</span>
            </a>
          </h3>
          <p className="md:text-base text-pretty text-sm text-green-400">
            Software Developer with 1.8 years of experience specializing in
            Spring Boot framework for developing robust and scalable
            applications. Proficient in core Java concepts, Spring MVC, Spring
            Data JPA, RESTful web services.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
