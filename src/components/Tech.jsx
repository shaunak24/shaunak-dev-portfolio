import React from 'react';
import { SectionWrapper } from './hoc';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((tech) => (
        <div className="h-28 w-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
