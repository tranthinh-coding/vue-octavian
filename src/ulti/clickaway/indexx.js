"use strict";

const HANDLER = "c_clickaway_handler";

const setListeners = (el, binding) => {
  const callback = binding.value;
  if (typeof callback !== "function") {
    return;
  }
  el[HANDLER] = (e) =>
    el.contains(e.target) || callback.call(binding.instance, e);
  document.documentElement.addEventListener(
    binding.arg || "click",
    el[HANDLER]
  );
};

const unsetListeners = (el, binding) => {
  document.documentElement.removeEventListener(
    binding.arg || "click",
    el[HANDLER]
  );
  delete el[HANDLER];
};
export default {
  beforeMount: setListeners,
  updated: (el, binding, vnode) => {
    if (binding.value !== binding.oldValue) {
      unsetListeners(el, binding);
      setListeners(el, binding, vnode);
    }
  },
  unmounted: unsetListeners
};
