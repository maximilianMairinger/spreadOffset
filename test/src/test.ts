import spreadOffset from "./../../app/src/spreadOffset"
//const testElem = document.querySelector("#test")

let r = spreadOffset([
  {value: "val"},
  {value: "val"},
  {value: "val", offset: .5},
  {value: "val"}
])

console.log(r);

