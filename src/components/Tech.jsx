import React from 'react';
import { SectionWrapper } from './hoc';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { Tooltip } from '@mui/material';

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((tech) => (
        <Tooltip
          title={tech.name}
          placement="top"
          key={tech.name}
          enterTouchDelay={0}
        >
          <div className="h-28 w-28">
            <BallCanvas icon={tech.icon} />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
