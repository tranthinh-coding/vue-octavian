import optionClickAway from "@/ulti/clickaway";

export const useDirectives = (app) => {
  app.directive("click-outside", optionClickAway);
};
