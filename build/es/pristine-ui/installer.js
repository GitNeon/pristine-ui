import * as e from "../components/index.js";
function o(i) {
  for (let n in e)
    i.use(e[n]);
}
export {
  o as installer
};
