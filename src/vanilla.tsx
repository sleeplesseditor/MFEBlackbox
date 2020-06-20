import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// buffer of DOM elements rendering React components
let nodes: Element[] = [];
let hostElement: Element;
const reactContentRenderer = {
  unmountAll: () => {
    if (nodes.length === 0) {
      return;
    }
    nodes.forEach((node) => ReactDOM.unmountComponentAtNode(node));
    nodes = [];
  },
  unmount: (node: Element) => {
    ReactDOM.unmountComponentAtNode(node);
  },
  init: (targetNode: Element) => {
    hostElement = targetNode;
  },
  render: (props: any, callback: () => void) => {
    const reactElement = React.createElement(App, props, null);
    ReactDOM.render(reactElement as any, hostElement, callback);
    nodes.push(hostElement);
    return reactElement;
  },
};

//register self as window property
window["blackbox"] = reactContentRenderer;
//and listen to window custom event
//which will be invoked via caller MFE
window.addEventListener(
  "openBlackbox",
  (e: any) => {
    const eventDetail = e.detail;
    console.log("Blackbox open with payload", eventDetail);
    reactContentRenderer.render(eventDetail, () => {});
  },
  false
);