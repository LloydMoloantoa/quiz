const career = document.getElementById('career');
const resultBtn = document.querySelector('.resultBtn');
const finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var careerLbl = document.querySelector('.careerLbl');

let counter = 0;


resultBtn.addEventListener('click', function () {
    finalScore.innerText = mostRecentScore;

    if (parseInt(mostRecentScore) < 30) {
        careerLbl.innerHTML = "According to your results, you would be suited for this Cloud. Go to the link for more info: https://vargelloyd.azurewebsites.net/lessons/14";
    }
    else if (parseInt(mostRecentScore) >= 30 && parseInt(mostRecentScore) < 50) {
       
        careerLbl.innerHTML = "According to your results, you would be suited for this AWS. Go to the link for more info: https://vargelloyd.azurewebsites.net/lessons/24";
    }
    else if (parseInt(mostRecentScore) >= 50 && parseInt(mostRecentScore) < 100) {
       
        careerLbl.innerHTML = "According to your results, you would be suited for this Full Stact. Go to the link for more info: https://vargelloyd.azurewebsites.net/lessons/4";
    }

});
