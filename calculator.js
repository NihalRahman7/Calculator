const buttons = document.querySelectorAll("button");
const equalBtn = document.querySelector("#equalBtn");
const acBtn = document.querySelector("#acBtn");

const outputResult = document.querySelector("#result");
/* ---- TEST ----
buttons.forEach(button => {
    console.log(button.textContent);
});
*/
buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (button.id === "equalBtn" || button.id === "acBtn") return;
    outputResult.value += button.textContent

    if (button.id === "multiplyBtn") {
      outputResult.value *= button.textContent
    }
  });
});  

equalBtn.addEventListener("click", function() {
    outputResult.value = eval(outputResult.value);
})

acBtn.addEventListener("click", function() {
    outputResult.value = "";
})