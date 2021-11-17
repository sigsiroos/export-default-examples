import { dioMerda, default as defaultDioMerda } from "./module2.mjs";
import anotherDefaultDioMerda from "./module2.mjs";

setTimeout(() => {
  console.log(dioMerda); 
  console.log(defaultDioMerda); 
  console.log(anotherDefaultDioMerda);
}, 1000);
