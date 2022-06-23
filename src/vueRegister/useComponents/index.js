"use strict";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// const RegExFile = /[A-Z]\w+\.(vue|js)$/;

const regisComponent = (app, requireComponent) => {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1")));
    app.component(componentName, componentConfig.default || componentConfig);
  });
};

export const useComponents = (app) => {
  const requireComponentSvg = require.context("@/components/Svg", false, /[A-Z]\w+\.(vue|js)$/);
  const requireComponentBase = require.context("@/components/Base", false, /[A-Z]\w+\.(vue|js)$/);
  const requireComponentBaseAsync = require.context("@/components/Base/Async", false, /[A-Z]\w+\.(vue|js)$/);

  regisComponent(app, requireComponentSvg);
  regisComponent(app, requireComponentBase);
  regisComponent(app, requireComponentBaseAsync);
};
