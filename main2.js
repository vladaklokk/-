document.addEventListener("DOMContentLoaded", function () {

    let correctAnswers = {
        "довгі ноги, довгий ніс - по болоті ходить скрізь": "журавель",
        "стоїть корито - повне води налите": "криниця",
        "неначе паровоз гуде - шумить, кипить і пара йде. смачний заварює нам чай. хто ж він такий? от відгадай": "чайник",
        "лишає він страшні сліди, усе він пожирає. а як даси йому води - відразу помирає!": "вогонь",
        "в розмалбованій хустині, солоденька всередині. коли нею почастують, діти тішаться, ласують": "цукерка",
        "книжечки маленькі, аркуші біленькі. в них ми вчимося писати, і складати і віднімати": "зошит",
        "ні дощами, на снігами за сто років не розмить. але хлопці-хулігани можуть м'ячиком розбить": "скло",
        "народився із землі, зарум'янивсь на вогні і з'явився на столі до борщу тобі й мені": "хліб",
        "як запалять, то горить. як горить, то плаче. обережненько гасіть, бо впече у пальчик!": "свічка",
    };

    let buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            
            let input = button.parentNode.previousElementSibling.querySelector("input");
            let userAnswer = input.value.toLowerCase().trim();
    
            let answerCell = button.parentNode.previousElementSibling;
    
            let questionCell = answerCell.previousElementSibling;
    
            let questionText = questionCell.querySelector("p").innerText.trim().toLowerCase();
            let correctAnswer = correctAnswers[questionText];
    
            console.log("User Answer:", userAnswer);
            console.log("Correct Answer:", correctAnswer);
    
            let emoji = document.createElement("span");
            emoji.style.fontSize = "20px";
    
            if (correctAnswer !== undefined && correctAnswer === userAnswer) {
                console.log("Correct!");
                questionCell.classList.remove("incorrect-answer");
                questionCell.classList.add("correct-answer");
                emoji.innerText = "😉";
            } else {
                console.log("Incorrect!");
                questionCell.classList.remove("correct-answer");
                questionCell.classList.add("incorrect-answer");
                emoji.innerText = "😔";
            }
    
            input.style.display = "none";
    
            answerCell.appendChild(emoji);
        });
    });
})    