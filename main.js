const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const input = document.querySelector(".input");

btn.addEventListener("click", function () {
  console.log("btn");
  let p = document.createElement("p");
  p.innerText = input.value;
  container.appendChild(p);
  input.value = "";

  p.addEventListener("click", function () {
    if (p.style.textDecoration == "none") {
      p.style.textDecoration = "line-through";
    } else {
      p.style.textDecoration = "none";
    }
  });

  p.addEventListener("dblclick", function () {
    let remove = confirm("Are you sure?");
    if (confirm) {
      container.removeChild(p);
    }
  });
});
