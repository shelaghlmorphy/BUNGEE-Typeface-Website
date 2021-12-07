
// "CONTINUE TO SITE" BUTTON

const targetDiv = document.getElementById("welcome");
const btn = document.getElementById("toggle");
btn.onclick = function() {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};


//VARIABLES

//the below variables are defined for efficiency and cleaner code.
var dp = document.getElementById("displaypanel");
var displayStyle = dp.getElementsByTagName("display")[0].style;

//DEFINE DEFAULT STYLES FOR DISPLAY TEXT
//button appearance and display text will revert to original settings when new text is created
function defaultStyles() {
  displayStyle.fontFamily = "Bungee";
  getSelectedId("buttonRegular");
  getNotSelectedIds(
    "buttonOutline",
    "buttonInline",
    "buttonShade",
    "buttonHairline"
  );

  displayStyle.writingMode = "horizontal-tb";
  displayStyle.textOrientation = "upright";
  getSelectedId("horizontalButton");
  getNotSelectedIds("verticalButton", "stackedButton", "", "");
}


//SHOW DISPLAY TEXT IN LEFT PANEL

function showCaption() {
  //create variable equal to myInput value
  var inputValue = document.getElementById("myInput").value;
  //replace output id with inputValue
  document.getElementById("output").innerHTML = inputValue;
  defaultStyles();
}


//COLOR WELL
//credit: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

var colorWell;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.select();
}

function updateFirst(event) {
  var p = document.querySelector("display");

  if (p) {
    p.style.color = event.target.value;
  }
}


//BUTTONS

//The following functions are to be used in changeFont and Display buttons below
//getNotSelectedIds allows me to enter which buttons are not clicked, and sets their styles to the default
function getNotSelectedIds(button1, button2, button3, button4) {
  document.getElementById(button1).style.backgroundColor = "#ff4da6";
  document.getElementById(button1).style.boxShadow = "none";
  document.getElementById(button2).style.backgroundColor = "#ff4da6";
  document.getElementById(button2).style.boxShadow = "none";
  document.getElementById(button3).style.backgroundColor = "#ff4da6";
  document.getElementById(button3).style.boxShadow = "none";
  document.getElementById(button4).style.backgroundColor = "#ff4da6";
  document.getElementById(button4).style.boxShadow = "none";
}
//getSelectedId allows me to enter the button which is selected, and change the style
function getSelectedId(button1) {
  document.getElementById(button1).style.backgroundColor = "#c7387f";
  document.getElementById(button1).style.boxShadow = "inset 0 0 10px #000000";
}


//CHANGE FONT BUTTONS

//in all the below functions...
function changeFontRegular() {
  //the display font is set according to the button (Regular Bungee in this case)
  displayStyle.fontFamily = "Bungee";
  //getSelectedId is called for buttonRegular, so its appearance will change
  getSelectedId("buttonRegular");
  //getNotSelectedIds is called for the rest of the buttons to set their appearance to the default
  getNotSelectedIds(
    "buttonOutline",
    "buttonInline",
    "buttonShade",
    "buttonHairline"
  );
}

function changeFontOutline() {
  displayStyle.fontFamily = "Bungee Outline";
  getSelectedId("buttonOutline");
  getNotSelectedIds(
    "buttonRegular",
    "buttonInline",
    "buttonShade",
    "buttonHairline"
  );
}
function changeFontInline() {
  displayStyle.fontFamily = "Bungee Inline";
  getSelectedId("buttonInline");
  getNotSelectedIds(
    "buttonOutline",
    "buttonRegular",
    "buttonShade",
    "buttonHairline"
  );
}
function changeFontHairline() {
  displayStyle.fontFamily = "Bungee Hairline";
  getSelectedId("buttonHairline");
  getNotSelectedIds(
    "buttonOutline",
    "buttonInline",
    "buttonShade",
    "buttonRegular"
  );
}
function changeFontShade() {
  displayStyle.fontFamily = "Bungee Shade";
  getSelectedId("buttonShade");
  getNotSelectedIds(
    "buttonOutline",
    "buttonInline",
    "buttonRegular",
    "buttonHairline"
  );
}


//ORIENTATION BUTTONS

//writingMode refers to the positioning of the letters in relation to each other
//textOrientation refers to angle at which the letters are set
function stackedDisplay() {
  displayStyle.writingMode = "vertical-rl";
  displayStyle.textOrientation = "upright";
  getSelectedId("stackedButton");
  getNotSelectedIds("verticalButton", "horizontalButton", "", "");
}

function verticalDisplay() {
  displayStyle.writingMode = "vertical-rl";
  displayStyle.textOrientation = "mixed";
  getSelectedId("verticalButton");
  getNotSelectedIds("stackedButton", "horizontalButton", "", "");
}

function horizontalDisplay() {
  displayStyle.writingMode = "horizontal-tb";
  displayStyle.textOrientation = "upright";
  getSelectedId("horizontalButton");
  getNotSelectedIds("verticalButton", "stackedButton", "", "");
}


//FONT SIZE BUTTONS

function increaseFontSize() {
  var txt = dp.getElementsByTagName("display")[0];
  var style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  var currentSize = parseFloat(style);
  txt.style.fontSize = currentSize + 10 + "px";
}

function decreaseFontSize() {
  var txt = dp.getElementsByTagName("display")[0];
  var style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  var currentSize = parseFloat(style);
  txt.style.fontSize = currentSize - 10 + "px";
}
