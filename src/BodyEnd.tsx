import React from 'react';
import ReactDOM from 'react-dom';

if (!document.getElementById('scrollerDebug')) {
  const debugWrapEl = document.createElement('div');
  debugWrapEl.setAttribute('id', 'scrollerDebug');
  document.body.appendChild(debugWrapEl);
}

const debugRoot = document.getElementById('scrollerDebug');

class BodyEnd extends React.Component {
  el;

  constructor(props: any) {
    super(props);

    this.el = document.createElement('div');
    this.el.style.left = '0px';
  }

  componentDidMount() {
    if (debugRoot) {
      debugRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (debugRoot) {
      debugRoot.removeChild(this.el);
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default BodyEnd;
