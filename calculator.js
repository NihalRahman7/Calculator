const buttons = document.querySelectorAll("button");
const outputResult = document.querySelector("#result");
/* ---- TEST ----
buttons.forEach(button => {
    console.log(button.textContent);
});
*/
buttons.forEach((button) => {
  button.addEventListener("click", function(event) {
    outputResult.value += event.target.textContent;
  });
});