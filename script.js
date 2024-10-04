document.addEventListener("DOMContentLoaded", function () {
  const bred = document.getElementById("red");
  const bgreen= document.getElementById("green");
  const bblue= document.getElementById("blue");
  const breset= document.getElementById("reset");
  bred.addEventListener("click", () => {
    const w=document.getElementById("body").style.backgroundColor="red";
  });
  bgreen.addEventListener("click", () => {
    const w=document.getElementById("body").style.backgroundColor="green";
  });
  bblue.addEventListener("click", () => {
    const w=document.getElementById("body").style.backgroundColor="blue";
  });
  breset.addEventListener("click", () => {
    const w=document.getElementById("body").style.backgroundColor="white";
  });
});
