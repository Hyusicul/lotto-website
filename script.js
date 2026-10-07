const button = document.querySelector("#reroll");
const numbersArea = document.querySelector("#numbers");
const message = document.querySelector("#message");

function getBallClass(number) {
    if (number <= 10) {
        return "ball-yellow";
    } else if (number <= 20) {
        return "ball-blue";
    } else if (number <= 30) {
        return "ball-red";
    } else if (number <= 40) {
        return "ball-gray";
    } else {
        return "ball-green";
    }
}

function drawLottoNumbers() {
    let numbers = [];

    while (numbers.length < 6) {
        const number = Math.floor(Math.random() * 45) + 1;

        if (numbers.includes(number) == false) {
            numbers.push(number);
        }
    }

    numbers.sort(function(a, b) {
        return a - b;
    });

    numbersArea.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        const ball = document.createElement("div");

        ball.classList.add("number-ball");
        ball.classList.add(getBallClass(numbers[i]));
        ball.textContent = numbers[i];

        numbersArea.appendChild(ball);
    }

    message.textContent = "행운의 번호가 새로 추첨되었습니다! 🍀";
}

button.addEventListener("click", drawLottoNumbers);
