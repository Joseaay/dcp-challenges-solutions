import { reduceFunctionGarbage } from "./reduce-function-garbage";
// eslint-disable-next-line import/no-webpack-loader-syntax
export const getRawChallenge = num =>
    reduceFunctionGarbage(require(`!raw-loader!../challenges/${num}.js`));
