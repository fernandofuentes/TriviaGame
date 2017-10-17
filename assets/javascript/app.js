$(document).ready(function () {

        var Q1 = {
            questionNumber: "#1",
            question: "Who is Luke's Daddy, and what does he do?",
            answerA: "This is answer A",
            answerB: "This is answer B",
            answerC: "This is answer C",
            answerD: "This is answer D",
            rightAnswer: "A"
        };

        var Q2 = {
            questionNumber: "#2",
            question: "Who is Luke's Daddy, and what does he do?",
            answerA: "This is answer A",
            answerB: "This is answer B",
            answerC: "This is answer C",
            answerD: "This is answer D",
            rightAnswer: "B"
        };

        var Q3 = {
            questionNumber: "Question #3",
            question: "Who is Luke's Daddy, and what does he do?",
            answerA: "This is answer A",
            answerB: "This is answer B",
            answerC: "This is answer C",
            answerD: "This is answer D",
            rightAnswer: "C"
        };

        var Q4 = {
            questionNumber: "Question #4",
            question: "Who is Luke's Daddy, and what does he do?",
            answerA: "This is answer A",
            answerB: "This is answer B",
            answerC: "This is answer C",
            answerD: "This is answer D",
            rightAnswer: "D"
        };

        var Q5 = {
            questionNumber: "Question #5",
            question: "Who is Luke's Daddy, and what does he do?",
            answerA: "This is answer A",
            answerB: "This is answer B",
            answerC: "This is answer C",
            answerD: "This is answer D",
            rightAnswer: "A"
        };

        var questionsArray = [Q1, Q2, Q3, Q4, Q5];

        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////

        function answerCheck() {

            $("#answerA").on("click", function () {

                if (Q1.rightAnswer === "A") {
                    alert("Correct!");
                } else {
                    alert("WRONG!!!!!!!");
                }
            });

            $("#answerB").on("click", function () {

                if (Q1.rightAnswer === "B") {
                    alert("Correct!");
                } else {
                    alert("WRONG!!!!!!!");
                }
            });

            $("#answerC").on("click", function () {

                if (Q1.rightAnswer === "C") {
                    alert("Correct!");
                } else {
                    alert("WRONG!!!!!!!");
                }
            });

            $("#answerD").on("click", function () {

                if (Q1.rightAnswer === "C") {
                    alert("Correct!");
                } else {
                    alert("WRONG!!!!!!!");
                }
            });


        }


        // Question 1
        function runQ1() {
            $("#questionNumber").text("Question " + Q1.questionNumber + " of 10");
            $("#question").text(Q1.question);
            $("#answerA").text(Q1.answerA);
            $("#answerB").text(Q1.answerB);
            $("#answerC").text(Q1.answerC);
            $("#answerD").text(Q1.answerD);
            answerCheck();
        }

        runQ1();


    }
);


