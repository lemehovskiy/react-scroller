<h3 align="center">react-scroller</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/lemehovskiy/react-scroller.svg)](https://github.com/lemehovskiy/react-scroller/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lemehovskiy/react-scroller.svg)](https://github.com/lemehovskiy/react-scroller/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
    React component for detecting vertical scroll progress.
    <br> 
</p>

## Demo <a name="demo"></a>

[Simple](https://codesandbox.io/s/lemehovskiy-react-scroller-simple-demo-e3c8d?file=/src/App.tsx)

## 🧐 About <a name = "about"></a>

React component for detecting vertical scroll progress.

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

```
npm i @lemehovskiy/react-scroller
```

### Example

App.tsx

```js
import Scroller from "react-scroller/dist";

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

## API

| name                   | description                                                                                                                                                                                                                            | type                  | default   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------- |
| children               |                                                                                                                                                                                                                                        |                       |           |
| scrollTriggerOffset    |                                                                                                                                                                                                                                        |                       |           |
| debug                  | Debug flag property                                                                                                                                                                                                                    | boolean               | false     |
| autoAdjustScrollOffset | Auto-adjusting start and end offset. This option is helpful if the element is first or last and you can't realize the full progress range. You can manually adjust triggers offset but in this case, you can lose responsive behavior. | boolean               | false     |