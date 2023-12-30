window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const container = document.querySelector(".container");

    // Simulate a delay for demonstration purposes
    setTimeout(function () {
        loader.style.display = "none";
        container.style.opacity = "1";
        container.style.visibility = "visible";
    }, 2000);
});

document.getElementById("scoreForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const testScores = [
        parseFloat(document.getElementById("testScore1").value),
        parseFloat(document.getElementById("testScore2").value),
        parseFloat(document.getElementById("testScore3").value)
    ];

    const assignmentScores = [
        parseFloat(document.getElementById("assignmentScore1").value),
        parseFloat(document.getElementById("assignmentScore2").value),
        parseFloat(document.getElementById("assignmentScore3").value)
    ];

    const MAX_SCORE = 50;
    let error = false;

    for (let i = 0; i < testScores.length; i++) {
        if (testScores[i] > MAX_SCORE || assignmentScores[i] > MAX_SCORE || testScores[i] < 0 || assignmentScores[i] < 0) {
            const errorDiv = document.getElementById("error");
            errorDiv.innerHTML = "Please enter valid scores between 0 and 50.";
            error = true;
            break;
        }
    }

    if (!error) {
        const TEST_WEIGHTAGE = 0.7;
        const ASSIGNMENT_WEIGHTAGE = 0.3;
        const MAX_TOTAL_MARK = 40;

        let totalContinuousAssessmentScore = 0;

        for (let i = 0; i < testScores.length; i++) {
            const continuousAssessmentScore = ((testScores[i] * TEST_WEIGHTAGE) + (assignmentScores[i] * ASSIGNMENT_WEIGHTAGE)) * (MAX_TOTAL_MARK / MAX_SCORE);
            totalContinuousAssessmentScore += continuousAssessmentScore;
        }

        const averageContinuousAssessmentScore = totalContinuousAssessmentScore / testScores.length;

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `Average Continuous Assessment Score: ${Math.round(averageContinuousAssessmentScore)}`;
        
        const errorDiv = document.getElementById("error");
        errorDiv.innerHTML = ""; // Clear error message if there was one previously
    }
});

document.getElementById("themeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});
