import getConvertItemUnitToPx from './getConvertItemUnitToPx';

type TriggerType = string | number;

const getConvertedTriggersToPx = (
  triggers: TriggerType[],
  width: number,
  height: number
) => {
  const convertedTriggers = [] as number[];

  triggers.forEach((trigger) => {
    let convetedValue = 0;

    if (typeof trigger === 'string') {
      convetedValue = getConvertItemUnitToPx(trigger, width, height);
    } else if (typeof trigger === 'number') convetedValue = trigger;

    convertedTriggers.push(convetedValue);
  });

  return convertedTriggers;
};

export default getConvertedTriggersToPx;
