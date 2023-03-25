import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from './hoc';
import { textVariant } from '../utils/motion';
import { Tooltip } from '@mui/material';

const ExperienceCard = ({ experience }) => {
  const { date, iconBg, icon, points, company_name, company_website, title } =
    experience;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <Tooltip
          title={`Go to ${company_name} website`}
          placement="top"
          enterTouchDelay={0}
        >
          <div
            className="flex justify-center items-center w-full h-full"
            onClick={() => window.open(company_website, '_blank')}
          >
            <img
              src={icon}
              alt={company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Tooltip>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <VerticalTimeline className="mt-20 flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
