// Page 2: Add and Subtract
document.getElementById("add-btn")?.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").textContent = `Result: ${num1 + num2}`;
});

document.getElementById("subtract-btn")?.addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").textContent = `Result: ${num1 - num2}`;
});

// Page 3: Multiply and Divide
document.getElementById("multiply-btn")?.addEventListener("click", () => {
  const num3 = parseFloat(document.getElementById("num3").value);
  const num4 = parseFloat(document.getElementById("num4").value);
  document.getElementById("result-2").textContent = `Result: ${num3 * num4}`;
});

document.getElementById("divide-btn")?.addEventListener("click", () => {
  const num3 = parseFloat(document.getElementById("num3").value);
  const num4 = parseFloat(document.getElementById("num4").value);
  if (num4 === 0) {
    document.getElementById("result-2").textContent =
      "Error: Cannot divide by zero.";
  } else {
    document.getElementById("result-2").textContent = `Result: ${num3 / num4}`;
  }
});
