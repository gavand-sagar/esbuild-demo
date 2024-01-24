import { addition } from "./math";

// src/index.js
console.log("Hello, esbuild!");
console.log("Addition 4 + 5 = ", addition(4, 5))

let el = document.getElementById('root');
if (el) {
    el.innerHTML = "Addition 4 + 5 = " + addition(4, 5)
}