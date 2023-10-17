<h3 align="center">react-scroller</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/lemehovskiy/react-scroller.svg)](https://github.com/lemehovskiy/react-scroller/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lemehovskiy/react-scroller.svg)](https://github.com/lemehovskiy/react-scroller/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
    React component for precise vertical scroll progress detection.
</p>

## Demo <a name="demo"></a>

[Basic Scroller](https://codesandbox.io/s/lemehovskiy-react-scroller-simple-demo-e3c8d?file=/src/App.tsx)

[Basic useScroller](https://codesandbox.io/s/lemehovskiy-react-scroller-basic-usescroller-demo-qtj00?file=/src/App.tsx)

[Basic parallax background effect](https://codesandbox.io/s/lemehovskiy-react-scroller-basic-parallax-lncoe?file=/src/App.tsx)

[Gsap(Greensock) parallax background effect](https://codesandbox.io/s/lemehovskiy-react-scroller-gsap-parallax-yw4cx?file=/src/App.tsx)

[Gsap(Greensock) timeline](https://codesandbox.io/s/lemehovskiy-react-scroller-gsap-greensock-timeline-5jzs2)

## 🧐 Features <a name = "features"></a>

- Vertical Scroll Progress Tracking: Easily monitor scroll progress in your React components for engaging user experiences.
- Custom Start and End Offsets: Define precise scroll triggers for your components, enhancing user interactions.
- Auto-Adjust Offsets: Ensure seamless tracking even in limited space scenarios, making your components responsive.
- Debug Mode: Debug with ease using the built-in visualizer for triggers.

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

```sh
npm i @lemehovskiy/react-scroller
```

### Scroller example

App.tsx

```js
import Scroller from "@lemehovskiy/react-scroller/dist";

export default function App() {
  return (
    <>
      <div style={{ height: "100vh", background: "lightgreen" }}></div>
      <Scroller>
        {({ scrollProgress }) => (
          <div style={{ height: "200px", background: "lightblue" }}>
            {scrollProgress}
          </div>
        )}
      </Scroller>
      <div style={{ height: "100vh", background: "lightgreen" }}></div>
    </>
  );
}
```

### useScroller hook example

App.tsx

```js
import { useRef } from "react";
import { useScroller } from "@lemehovskiy/react-scroller/dist";

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollProgress } = useScroller({
    ref
  });

  return (
    <>
      <div style={{ height: "100vh", background: "lightgreen" }}></div>

      <div ref={ref} style={{ height: "200px", background: "lightblue" }}>
        {scrollProgress}
      </div>

      <div style={{ height: "100vh", background: "lightgreen" }}></div>
    </>
  );
}

```

## Scroller API

| name                   | description                                   | type                                                          | default |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------- | ------- |
| children               |                                               | children: (props: { scrollProgress?: number }) => JSX.Element |         |
| debug                  | Debug flag property                           | boolean                                                       | false   |
| scrollTriggerOffset    | See useScroller hook API below for more details |
| autoAdjustScrollOffset    | See useScroller hook API below for more details |

## useScroller hook API

| name                   | description                                                                                                                                                                                                                                                                                     | type                                                          | default            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------ |
| ref               |                                                                                                                                                                                                                                                                                                 |  |                    |
| scrollTriggerOffset    | Offset for scroll trigger position. By default, the scroll trigger "start" is placed at the bottom, and the trigger "end" at the top. If you want to reduce the start offset by 100px you can pass {start: -100, end: 0} or move the start offset to the middle of the viewport {start: '-50%', end: 0} | {start: number &#124; string, end: number &#124; string }     | {start: 0, end: 0} |
| autoAdjustScrollOffset | Auto-adjusting start and end offset. This option is helpful if the element is first or last and you can't realize the full progress range. You can manually adjust triggers offset but in this case, you can lose responsive behavior.                                                          | boolean                                                       | false              |
