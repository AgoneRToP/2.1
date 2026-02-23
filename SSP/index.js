const values = {
    0: "Камень",
    1: "Ножница",
    2: "Бумага",
}

const selectBtns = document.querySelectorAll(".select-btn")

const userChoiceEl = document.getElementById('user-choice');
const compChoiceEl = document.getElementById('comp-choice');
const resultMessageEl = document.getElementById('result-message');

const getComputerVal = () => Math.floor(Math.random() * 3)

selectBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        const selectedVal = parseInt(this.dataset.value);
        const computerVal = getComputerVal()

        const sel = values[selectedVal];
        const com = values[computerVal];

        userChoiceEl.textContent = sel;
        compChoiceEl.textContent = com;

        if (selectedVal == computerVal) {
            resultMessageEl.textContent = "Ничья! 🤝";
            resultMessageEl.style.color = "gray";
        }
        else if ((selectedVal === 0 && computerVal === 1) ||
            (selectedVal === 1 && computerVal === 2) ||
            (selectedVal === 2 && computerVal === 0)) {
            resultMessageEl.textContent = "Вы выиграли! 🎉";
            resultMessageEl.style.color = "green";
        }
        else {
            resultMessageEl.textContent = "Вы проиграли! 😢";
            resultMessageEl.style.color = "red";
        }
    })
})
