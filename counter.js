// select
const btns = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter_value");

let count = +counterValue.textContent;

// function
function counter(event) {
  const classList = event.target.classList;
  if (classList.contains("decrement")) count--;
  else if (classList.contains("increment")) count++;
  else count = 0;

  if (count > 0) {
    counterValue.classList.add("green");
    counterValue.classList.remove("red");
  } else if (count < 0) {
    counterValue.classList.add("red");
    counterValue.classList.remove("green");
  } else {
    counterValue.classList.add("counter_value");
    counterValue.classList.remove("red");
    counterValue.classList.remove("green");
  }


  counterValue.textContent = count;
}

// event listener
btns.forEach((btn) => {
  btn.addEventListener("click", counter);
});
