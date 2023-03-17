import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from './hoc';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { ProjectCard } from '.';

const Projects = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn('', '', 0.1, 1)}
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
