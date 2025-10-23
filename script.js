// === Part 2: JavaScript Functions, Scope, Parameters, Return Values ===

// Global variable
let baseSpeed = 2;

// Function with parameters and return value
function calculateSpeed(multiplier) {
  // local variable
  const result = baseSpeed * multiplier;
  return result; // returns calculated speed
}

// Function to update the DOM with result
function displaySpeed() {
  const multiplier = Math.floor(Math.random() * 5) + 1; // random number 1–5
  const speed = calculateSpeed(multiplier);
  document.getElementById('result').textContent =
    `Calculated animation speed: ${speed}s (multiplier: ${multiplier})`;
}

// Attach event listener
document.getElementById('calc-btn').addEventListener('click', displaySpeed);


// === Part 3: Combining CSS & JavaScript ===

// Function to trigger CSS animation dynamically
function toggleAnimation() {
  const box = document.getElementById('magic-box');
  box.classList.toggle('animate');
}

// Event listener for the animation trigger
document.getElementById('animate-btn').addEventListener('click', toggleAnimation);
