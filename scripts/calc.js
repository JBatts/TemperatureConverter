"use strict"

window.onload = function() {
   initF();
   initC();
   initReset();
};


function initF() {
   const calcBtnF = document.getElementById("calcBtnF")
   if (calcBtnF) {
   calcBtnF.onclick = onCalcBtnClickedF;
   }
}

function onCalcBtnClickedF() {

   const degreeF = document.getElementById("degreeF");
   const convertedNumF = document.getElementById("convertedNumF")
   if (degreeF && convertedNumF) {
   let answer = (Number(degreeF.value) - 32) * 5 / 9;
   convertedNumF.value = answer.toFixed(0);
   }
}

 
function initC() {
   const calcBtnC = document.getElementById("calcBtnC")
   if (calcBtnC) {
   calcBtnC.onclick = onCalcBtnClickedC;
   }
}

function onCalcBtnClickedC() {

   const degreeC = document.getElementById("degreeC");
   const convertedNumC = document.getElementById("convertedNumC")
   if (degreeC && convertedNumC) {
   let answer = (Number(degreeC.value) * 9 / 5) + 32;
   convertedNumC.value = answer.toFixed(0);
   }
}

function initReset() {

   const resetBtn = document.getElementById("resetBtn")
   resetBtn.onclick = onClickResetBtn
}

function onClickResetBtn() {
   const degreeC = document.getElementById("degreeC")
   const convertedNumC = document.getElementById("convertedNumC")
   const degreeF = document.getElementById("degreeF")
   const convertedNumF = document.getElementById("convertedNumF")

   if (degreeF) degreeF.value = '0';
   if (convertedNumF) convertedNumF.value = '-18';
   if (degreeC) degreeC.value = '0';
   if (convertedNumC) convertedNumC.value = '32';
}