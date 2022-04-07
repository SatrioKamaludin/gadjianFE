// variables
var Clear  = document.querySelector("[data-clear]"),
    Insert = document.querySelectorAll("[data-insert]"),
    Calculate   = document.querySelector("[data-calculate]");

// clear input
Clear.onclick = function() {
  input.value = "";
};

// add input
for (i = 0; i < Insert.length; i++) {
  Insert[i].onclick = function() {
    input.value += this.textContent;
  };
}

// calculate input
Calculate.onclick = function() {
  input.value = eval(input.value);
};