"use strict";

const rulesButton = document.querySelector(".btn-rule");
const closingButton = document.querySelector(".closing");
const score = document.querySelector(".score");
let scoreUpdate = [];
const options = ["paper", "scissors", "rock"];

rulesButton.addEventListener("click", function () {
  document.querySelector(".section_rule").style.visibility = "visible";
});
closingButton.addEventListener("click", function () {
  document.querySelector(".section_rule").style.visibility = "hidden";
});

const myPick = function (val, name) {
  document.querySelector(".main").style.display = "none";
  const valueFrom = val;
  console.log(name);
  const vf = `<section class="result_section result_section1">
  <div class="result_container">
    <div class="selection_side">
      <h1 class="result_heading">your pick</h1>
      <div class="tool_${name}">
        <img src="./images/icon-${name}.svg" alt="paper" />
      </div>
    </div>
  </div>
</section>
    `;
  document.querySelector(".main").insertAdjacentHTML("afterend", vf);

  setTimeout(function () {
    let randomNumber = Math.floor(Math.random() * 2 + 1);
    console.log(randomNumber, valueFrom);

    if (randomNumber === valueFrom) {
      console.log(options[randomNumber], name, "retry");
    } else if (randomNumber === valueFrom + 1) {
      console.log(options[randomNumber], name, "lose");
    } else if (randomNumber === valueFrom + 2) {
      console.log(options[randomNumber], name, "win");
      scoreUpdate.push(randomNumber);
      score.innerText = scoreUpdate.length;
    }

    let xf = `<div class='output_visible'>
    <div class="output_side">
      <h1 class="result_heading">the house pick</h1>
      <div class="tool_${options[randomNumber]}">
        <img src="./images/icon-${options[randomNumber]}.svg" alt="paper" />
      </div>
    </div>
    <button class="btn-reset" onclick="resetFunction()">Reset</button>
  </div>
      `;
    document
      .querySelector(".result_container")
      .insertAdjacentHTML("afterend", xf);
  }, 2000);
};
const resetFunction = function () {
  document.querySelector(".result_section1").style.display = "none";
  document.querySelector(".output_visible ").style.display = "none";
  document.querySelector(".main").style.display = "unset";
};
