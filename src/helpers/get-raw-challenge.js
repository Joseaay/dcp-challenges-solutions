import { reduceFunctionGarbage } from "./reduce-function-garbage";
export const getRawChallenge = num =>
    reduceFunctionGarbage(require(`!raw-loader!../../challenges/${num}.js`));
