// const El = document.getElementById("first");

// El.addEventListener("click", function () {
//   El.style.backgroundColor = "blue";
// });

// const PList = document.getElementsByTagName("p");

// for (p of PList) {
//   p.style.opacity = String(Math.random());
// }

// const htags = document.querySelector("h3:nth-of-type(3)");

// console.log(htags);
// // queryselector 와 getElementbyTage Name 은 다르게 동작함

// const PList1 = document.querySelectorAll("p");
// console.log(PList1);
// //NodeList(6) [p#first, p#second, p#first, p#second, p#first, p#second] 반환
// const PList2 = document.getElementsByTagName("p");
// //HTMLCollection(6) [p#first, p#second, p#first, p#second, p#first, p#second, first: p#first, second: p#second]
// console.log(PList2);

//queryselector의 경우 값이 변경되면 그 값이 저장 되지 않는 NodeList

//parentNode =>

const red = document.getElementById("red");
let rep = red.parentNode;
// 부모요소 전체를 반환
let rep2 = red.parentElement;
// 부모요소 노드의 속성을 반환
console.log(rep);
console.log(rep2);
// 자식 요소 찾는법
const ulel = document.getElementById("color");

let ulchild = ulel.childNodes;
// 반환 수가 다름 : text(공백) 요소  까지 반환
let ulchildren = ulel.children;
console.log(ulchild);
//
console.log(ulchildren);
// HTML collection 의 경우 실시간의 변경 값을 반영
console.log(ulel.firstElementChild);
console.log(ulel.lastElementChild);

const blue = document.getElementById("blue");
console.log(blue.previousElementSibling);
