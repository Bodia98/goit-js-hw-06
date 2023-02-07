const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const onBtndecrement = document.querySelector(
    'button[data-action="decrement"]'
);
const onBtnIncrement = document.querySelector(
    'button[data-action="increment"]'
);

const onDecrementFn = () => {
    counterValue.textContent -= 1;
};

const onIncrementFn = () => {
    counterValue.textContent -= -1;
};

onBtndecrement.addEventListener("click", onDecrementFn);
onBtnIncrement.addEventListener("click", onIncrementFn);
