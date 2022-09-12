
let count = 0;
const elNol = document.querySelector(".nol");
const elBtn1 = document.querySelector(".btn1");
const value = document.querySelector('#value')
const btns = document.querySelector(".btn");
const nums = [1,2,7,4];
const target = 9;
function twoSum(nums, target) {
    let index = [];
    for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                index.push(i);
                index.push(j);
            }
        }

    }
    return index;
};
console.log(twoSum(nums, target));

let count1 =0;
let count2 = 33;
const elBtn2 = document.querySelector(".btn2");
const elBtn = document.querySelector(".btn");


elBtn.addEventListener("click", function(btn) {
  count1 += 1;
  elNol.innerHTML = count1;

})
elBtn1.addEventListener("click", function(btn1) {
    count1 -= 1;
    elNol.innerHTML = count1;
})
elBtn2.addEventListener("click", function(btn1) {
    count1 = 0;
    elNol.innerHTML = count1;
})




//  taior boldi

const buttonsRan = document.querySelector(".btn5");

const arrNums = [1,2,3,4,5,67,8,9,9,9];

buttonsRan.addEventListener('click', function() {
    elNol.textContent = Math.floor(Math.random() * arrNums.length + 1);
})


//  color taiyor
const buttonsEl1 = document.querySelector(".btn4");
const colors = ["red","green"];
const colors1 = ["#fff","#000"];

buttonsEl1.addEventListener("click", function() {
  const rundomNumber = getrandomNumber()
  document.body.style.backgroundColor = colors[rundomNumber];  
  document.body.style.color = colors1[rundomNumber];
})

function getrandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
//  ikkinchi massala
// const buttonsEl2 = document.querySelector(".btn40");
// const colors2 = ["blue","red"];

// buttonsEl2.addEventListener("click", function() {
//   const rundomNumber1 = getrandomNumbe1r()
//   document.body.style.backgroundColor = colors2[rundomNumber1];  
// })

// function getrandomNumbe1r() {
//     return Math.floor(Math.random() * colors2.length);
// }

// const arrEl = [{
//         title: "Our Reviews",
//         img: "https://m.facebook.com/insignismedicalgroup/",
//         name1: "peter",
//     },
//     {
//         title: "Our Reviews",
//         img: "https://m.facebook.com/insignismedicalgroup/",
//         name1: "peter",
//     },
//     {
//         title: "Our Reviews",
//         img: "https://m.facebook.com/insignismedicalgroup/",
//         name1: "peter",
//     }
// ]
// let logoName = arrEl;

