import { something, default as defaultSomeThing } from "./module3.mjs";
import anotherDefaultSomeThing from "./module3.mjs";

setTimeout(() => {
  console.log(something);
  console.log(defaultSomeThing);
  console.log(anotherDefaultSomeThing);
}, 1000);
