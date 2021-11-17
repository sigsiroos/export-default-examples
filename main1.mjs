import { dioMerda as importedDioMerda } from "./module1.mjs";
const module = await import("./module1.mjs");
let { dioMerda: schifoza } = await import("./module1.mjs");

setTimeout(() => {
  console.log(importedDioMerda); // "Madonna"
  console.log(module.dioMerda); // "Madonna"
  console.log(schifoza); // "initial"
}, 1000);
