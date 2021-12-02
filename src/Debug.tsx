import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import BodyEnd from './BodyEnd';

const useStyles = createUseStyles({
  scrollTrigger: {
    position: 'fixed',
    left: 0,
  },
  scrollTriggerStart: {
    transform: 'translateY(-100%)',
    borderBottom: '1px solid green',
    color: 'green',
  },
  scrollTriggerEnd: {
    borderTop: '1px solid red',
    color: 'red',
  },
  elementTrigger: {
    position: 'absolute',
    right: 0,
  },
  elementTriggerStart: {
    borderBottom: '1px solid green',
    color: 'green',
    transform: 'translateY(-100%)',
  },
  elementTriggerEnd: {
    borderBottom: '1px solid red',
    color: 'red',
    transform: 'translateY(-100%)',
  },
});
export interface DebugOptions {
  name: string;
}

interface Props {
  triggerStartPosition: number;
  triggerEndPosition: number;
  elementTriggerStart: number;
  elementTriggerEnd: number;
  scrollProgress: number;
}

const getRandomId = () => `_${Math.random().toString(36).substr(2, 9)}`;

const Debug = function ({
  triggerStartPosition,
  triggerEndPosition,
  elementTriggerStart,
  elementTriggerEnd,
  scrollProgress,
}: Props) {
  const classes = useStyles();

  const id = useMemo(getRandomId, []);
  return (
    <BodyEnd>
      <span
        style={{ top: `${elementTriggerStart}px` }}
        className={`${classes.elementTrigger} ${classes.elementTriggerStart}`}
      >
        {id} Element trigger start
      </span>
      <span
        style={{ top: `${elementTriggerEnd}px` }}
        className={`${classes.elementTrigger} ${classes.elementTriggerEnd}`}
      >
        {id} Element trigger end
      </span>
      <span
        className={`${classes.scrollTrigger} ${classes.scrollTriggerStart}`}
        style={{
          top: `${triggerStartPosition}px`,
        }}
      >
        {id} Scroll trigger start {scrollProgress}
      </span>
      <span
        className={`${classes.scrollTrigger} ${classes.scrollTriggerEnd}`}
        style={{ top: `${triggerEndPosition}px` }}
      >
        {id} Scroll trigger end {scrollProgress}
      </span>
    </BodyEnd>
  );
};

export default Debug;
