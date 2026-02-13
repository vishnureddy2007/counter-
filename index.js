let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

function updateDisplay() {
    countDisplay.textContent = count;

    // Disable buttons at limits
    decreaseBtn.disabled = count === 0;
    increaseBtn.disabled = count === 10;

    // Change color dynamically
    if (count === 10) {
        countDisplay.style.color = "green";
    } else if (count === 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "#333";
    }
}

increaseBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        updateDisplay();
    }
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

updateDisplay();

