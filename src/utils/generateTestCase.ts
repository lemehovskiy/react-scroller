// generateTestCase(
//   'calculateResize',
//   {
//     elementTriggerOffsetTop: newElementTriggerOffsetTop,
//     elementTriggerOffsetBottom: newElementTriggerOffsetBottom,
//     scrollTriggerStartOffsetPx: newScrollTriggerOffsetPxStart,
//     scrollTriggerEndOffsetPx: newScrollTriggerOffsetPxEnd,
//   },
//   scrollTriggerOffset,
//   scrollTop,
//   elementViewportOffsetTop,
//   elementHeight,
//   windowSize,
//   { height: bodyHeight },
//   autoAdjustScrollOffset
// );

function generateTestCase(name: string, returnValue: any, ...args: any[]) {
  let params = '';

  args.forEach((arg) => {
    const formattedArg =
      typeof arg === 'object' && arg !== null ? JSON.stringify(arg) : arg;
    params += `${formattedArg},`;
  });

  // eslint-disable-next-line no-console
  console.log(`test('${name}', () => {
    expect(
        ${name}(
       ${params}
      )
    ).toEqual(${JSON.stringify(returnValue)});
  });`);
}

export default generateTestCase;
