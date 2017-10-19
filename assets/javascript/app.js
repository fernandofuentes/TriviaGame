$(document).ready(function () {

    var Q1 = {
        questionNumber1: "#1",
        question1: "Who is Luke's Daddy, and what does he do?",
        answer1A: "This is answer A",
        answer1B: "This is answer B",
        answer1C: "This is answer C",
        answer1D: "This is answer D",
        rightAnswer1: "A"
    };

    var Q2 = {
        questionNumber2: "#2",
        question2: "Who is Luke's Daddy, and what does he do?",
        answer2A: "This is answer A",
        answer2B: "This is answer B",
        answer2C: "This is answer C",
        answer2D: "This is answer D",
        rightAnswer2: "B"
    };

    var Q3 = {
        questionNumber3: "Question #3",
        question3: "Who is Luke's Daddy, and what does he do?",
        answer3A: "This is answer A",
        answer3B: "This is answer B",
        answer3C: "This is answer C",
        answer3D: "This is answer D",
        rightAnswer3: "C"
    };

    var Q4 = {
        questionNumber4: "Question #4",
        question4: "Who is Luke's Daddy, and what does he do?",
        answer4A: "This is answer A",
        answer4B: "This is answer B",
        answer4C: "This is answer C",
        answer4D: "This is answer D",
        rightAnswer4: "D"
    };

    var Q5 = {
        questionNumber5: "Question #5",
        question5: "Who is Luke's Daddy, and what does he do?",
        answer5A: "This is answer A",
        answer5B: "This is answer B",
        answer5C: "This is answer C",
        answer5D: "This is answer D",
        rightAnswer5: "A"
    };





    // Question 1
    function runQ1() {
        $("#questionNumber1").text("Question " + Q1.questionNumber1 + " of 5");
        $("#question1").text(Q1.question1);
        $(".answer1A").text(Q1.answer1A);
        $(".answer1B").text(Q1.answer1B);
        $(".answer1C").text(Q1.answer1C);
        $(".answer1D").text(Q1.answer1D);
        answerCheck1();
    }

    runQ1();

    // Question 2
    function runQ2() {
        $("#questionNumber2").text("Question " + Q2.questionNumber2 + " of 5");
        $("#question2").text(Q2.question2);
        $(".answer2A").text(Q2.answer2A);
        $(".answer2B").text(Q2.answer2B);
        $(".answer2C").text(Q2.answer2C);
        $(".answer2D").text(Q2.answer2D);
        answerCheck2();
    }

    runQ2();

    // Question 3
    function runQ3() {
        $("#questionNumber3").text("Question " + Q3.questionNumber3 + " of 5");
        $("#question3").text(Q3.question3);
        $(".answer3A").text(Q3.answer3A);
        $(".answer3B").text(Q3.answer3B);
        $(".answer3C").text(Q3.answer3C);
        $(".answer3D").text(Q3.answer3D);
        answerCheck3();
    }

    runQ3();

    // Question 4
    function runQ4() {
        $("#questionNumber4").text("Question " + Q4.questionNumber4 + " of 5");
        $("#question4").text(Q4.question4);
        $(".answer4A").text(Q4.answer4A);
        $(".answer4B").text(Q4.answer4B);
        $(".answer4C").text(Q4.answer4C);
        $(".answer4D").text(Q4.answer4D);
        answerCheck4();
    }

    runQ4();

    // Question 5
    function runQ5() {
        $("#questionNumber5").text("Question " + Q5.questionNumber5 + " of 5");
        $("#question5").text(Q5.question5);
        $(".answer5A").text(Q5.answer5A);
        $(".answer5B").text(Q5.answer5B);
        $(".answer5C").text(Q5.answer5C);
        $(".answer5D").text(Q5.answer5D);
        answerCheck5();
    }

    runQ5();








    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // ANSWER CHECK 1
    function answerCheck1() {

        $(".answer1A").on("click", function () {

            if (Q1.rightAnswer1 === "A") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer1B").on("click", function () {

            if (Q1.rightAnswer1 === "B") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer1C").on("click", function () {

            if (Q1.rightAnswer1 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer1D").on("click", function () {

            if (Q1.rightAnswer1 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });


    }

    // ANSWER CHECK 2
    function answerCheck2() {

        $(".answer2A").on("click", function () {

            if (Q2.rightAnswer2 === "A") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer2B").on("click", function () {

            if (Q2.rightAnswer2 === "B") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer2C").on("click", function () {

            if (Q2.rightAnswer2 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer2D").on("click", function () {

            if (Q2.rightAnswer2 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });


    }

    // ANSWER CHECK 3
    function answerCheck3() {

        $(".answer3A").on("click", function () {

            if (Q3.rightAnswer3 === "A") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer3B").on("click", function () {

            if (Q3.rightAnswer3 === "B") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer3C").on("click", function () {

            if (Q3.rightAnswer3 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer3D").on("click", function () {

            if (Q3.rightAnswer3 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });


    }

    // ANSWER CHECK 4
    function answerCheck4() {

        $(".answer4A").on("click", function () {

            if (Q4.rightAnswer4 === "A") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer4B").on("click", function () {

            if (Q4.rightAnswer4 === "B") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer4C").on("click", function () {

            if (Q4.rightAnswer4 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer4D").on("click", function () {

            if (Q4.rightAnswer4 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });


    }

    // ANSWER CHECK 5
    function answerCheck5() {

        $(".answer5A").on("click", function () {

            if (Q5.rightAnswer5 === "A") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer5B").on("click", function () {

            if (Q5.rightAnswer5 === "B") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer5C").on("click", function () {

            if (Q5.rightAnswer5 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });

        $(".answer5D").on("click", function () {

            if (Q5.rightAnswer5 === "C") {
                alert("Correct!");
            } else {
                alert("WRONG!!!!!!!");
            }
        });


    }


});


