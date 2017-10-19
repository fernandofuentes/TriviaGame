$(document).ready(function () {


    $(".pTimer").hide();
    // Hide questionsRow
    $("#questionsRow").hide();
    // Hide ALL
    $("#Q1").hide();
    $("#Q2").hide();
    $("#Q3").hide();
    $("#Q4").hide();
    $("#Q5").hide();
    $("#Q6").hide();
    $("#Q7").hide();
    $("#Q8").hide();
    $("#Q9").hide();
    $("#Q10").hide();

    // Start Button
    $(document).ready(function () {
        $("#startButton").click(function () {

            $('#kylo').get(0).play();

            $("#questionsRow").show();
            $(".pTimer").show();
            var count = 60, timer = setInterval(function () {
                $(".timer").html(count--);
                if (count === 0) clearInterval(timer);
            }, 1000);
            $("#startButton").hide();
            $("#Q1").show();
        });

        runQ1();
        runQ2();
        runQ3();
        runQ4();
        runQ5();
        runQ6();
        runQ7();
        runQ8();
        runQ9();
        runQ10();
    });

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
        question2: "What is the Question 2 ?",
        answer2A: "This is answer A",
        answer2B: "This is answer B",
        answer2C: "This is answer C",
        answer2D: "This is answer D",
        rightAnswer2: "B"
    };

    var Q3 = {
        questionNumber3: "Question #3",
        question3: "What is the Question 3 ?",
        answer3A: "This is answer A",
        answer3B: "This is answer B",
        answer3C: "This is answer C",
        answer3D: "This is answer D",
        rightAnswer3: "C"
    };

    var Q4 = {
        questionNumber4: "Question #4",
        question4: "What is the Question 4 ?",
        answer4A: "This is answer A",
        answer4B: "This is answer B",
        answer4C: "This is answer C",
        answer4D: "This is answer D",
        rightAnswer4: "D"
    };

    var Q5 = {
        questionNumber5: "Question #5",
        question5: "What is the Question 5 ?",
        answer5A: "This is answer A",
        answer5B: "This is answer B",
        answer5C: "This is answer C",
        answer5D: "This is answer D",
        rightAnswer5: "A"
    };

    var Q6 = {
        questionNumber6: "#6",
        question6: "What is the Question 6 ?",
        answer6A: "This is answer A",
        answer6B: "This is answer B",
        answer6C: "This is answer C",
        answer6D: "This is answer D",
        rightAnswer1: "A"
    };

    var Q7 = {
        questionNumber7: "#7",
        question7: "What is the Question 7 ?",
        answer7A: "This is answer A",
        answer7B: "This is answer B",
        answer7C: "This is answer C",
        answer7D: "This is answer D",
        rightAnswer7: "B"
    };

    var Q8 = {
        questionNumber8: "Question #8",
        question8: "What is the Question 8 ?",
        answer8A: "This is answer A",
        answer8B: "This is answer B",
        answer8C: "This is answer C",
        answer8D: "This is answer D",
        rightAnswer8: "C"
    };

    var Q9 = {
        questionNumber9: "Question #9",
        question9: "What is the Question 9 ?",
        answer9A: "This is answer A",
        answer9B: "This is answer B",
        answer9C: "This is answer C",
        answer9D: "This is answer D",
        rightAnswer4: "D"
    };

    var Q10 = {
        questionNumber10: "Question #10",
        question10: "What is the Question 10 ?",
        answer10A: "This is answer A",
        answer10B: "This is answer B",
        answer10C: "This is answer C",
        answer10D: "This is answer D",
        rightAnswer10: "A"
    };

    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // executing the questions / These are the functions

    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // Question 1
    function runQ1() {
        $("#questionNumber1").text("Question " + Q1.questionNumber1 + " of 10");
        $("#question1").text(Q1.question1);
        $(".answer1A").text(Q1.answer1A);
        $(".answer1B").text(Q1.answer1B);
        $(".answer1C").text(Q1.answer1C);
        $(".answer1D").text(Q1.answer1D);
        answerCheck1();
    }

    // Question 2
    function runQ2() {
        $("#questionNumber2").text("Question " + Q2.questionNumber2 + " of 10");
        $("#question2").text(Q2.question2);
        $(".answer2A").text(Q2.answer2A);
        $(".answer2B").text(Q2.answer2B);
        $(".answer2C").text(Q2.answer2C);
        $(".answer2D").text(Q2.answer2D);
        answerCheck2();
    }

    // Question 3
    function runQ3() {
        $("#questionNumber3").text("Question " + Q3.questionNumber3 + " of 10");
        $("#question3").text(Q3.question3);
        $(".answer3A").text(Q3.answer3A);
        $(".answer3B").text(Q3.answer3B);
        $(".answer3C").text(Q3.answer3C);
        $(".answer3D").text(Q3.answer3D);
        answerCheck3();
    }

    // Question 4
    function runQ4() {
        $("#questionNumber4").text("Question " + Q4.questionNumber4 + " of 10");
        $("#question4").text(Q4.question4);
        $(".answer4A").text(Q4.answer4A);
        $(".answer4B").text(Q4.answer4B);
        $(".answer4C").text(Q4.answer4C);
        $(".answer4D").text(Q4.answer4D);
        answerCheck4();
    }

    // Question 5
    function runQ5() {
        $("#questionNumber5").text("Question " + Q5.questionNumber5 + " of 10");
        $("#question5").text(Q5.question5);
        $(".answer5A").text(Q5.answer5A);
        $(".answer5B").text(Q5.answer5B);
        $(".answer5C").text(Q5.answer5C);
        $(".answer5D").text(Q5.answer5D);
        answerCheck5();
    }

    // Question 6
    function runQ6() {
        $("#questionNumber6").text("Question " + Q6.questionNumber6 + " of 10");
        $("#question6").text(Q6.question6);
        $(".answer6A").text(Q6.answer6A);
        $(".answer6B").text(Q6.answer6B);
        $(".answer6C").text(Q6.answer6C);
        $(".answer6D").text(Q6.answer6D);
        answerCheck6();
    }

    // Question 7
    function runQ7() {
        $("#questionNumber7").text("Question " + Q7.questionNumber7 + " of 10");
        $("#question7").text(Q7.question7);
        $(".answer7A").text(Q7.answer7A);
        $(".answer7B").text(Q7.answer7B);
        $(".answer7C").text(Q7.answer7C);
        $(".answer7D").text(Q7.answer7D);
        answerCheck7();
    }

    // Question 8
    function runQ8() {
        $("#questionNumber8").text("Question " + Q8.questionNumber8 + " of 10");
        $("#question8").text(Q8.question8);
        $(".answer8A").text(Q8.answer8A);
        $(".answer8B").text(Q8.answer8B);
        $(".answer8C").text(Q8.answer8C);
        $(".answer8D").text(Q8.answer8D);
        answerCheck8();
    }

    // Question 9
    function runQ9() {
        $("#questionNumber9").text("Question " + Q9.questionNumber9 + " of 10");
        $("#question9").text(Q9.question9);
        $(".answer9A").text(Q9.answer9A);
        $(".answer9B").text(Q9.answer9B);
        $(".answer9C").text(Q9.answer9C);
        $(".answer9D").text(Q9.answer9D);
        answerCheck9();
    }

    // Question 10
    function runQ10() {
        $("#questionNumber10").text("Question " + Q10.questionNumber10 + " of 10");
        $("#question10").text(Q10.question10);
        $(".answer10A").text(Q10.answer10A);
        $(".answer10B").text(Q10.answer10B);
        $(".answer10C").text(Q10.answer10C);
        $(".answer10D").text(Q10.answer10D);
        answerCheck10();
    }


    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // WHAT TO DO AFTER AN ANSWER IS CHOSEN

    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // Question 1 to 2
    function correctQ1() {
        $(".Q1theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(3000);
        });
        $("#Q1").hide();
        $("#Q2").show();
    }

    function wrongQ1() {
        $(".Q1theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(3000)
        });
        $("#Q1").hide();
        $("#Q2").show();
    }

    // Question 2 to 3
    function correctQ2() {
        $(".Q2theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(3000);
        });
        $("#Q2").hide();
        $("#Q3").show();
    }

    function wrongQ2() {
        $(".Q2theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(3000)
        });
        $("#Q2").hide();
        $("#Q3").show();
    }

    // Question 3 to 4
    function correctQ3() {
        $(".Q3theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(4000);
        });
        $("#Q3").hide();
        $("#Q4").show();
    }

    function wrongQ3() {
        $(".Q3theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(4000)
        });
        $("#Q3").hide();
        $("#Q4").show();
    }

    // Question 4 to 5
    function correctQ4() {
        $(".Q4theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(5000);
        });
        $("#Q4").hide();
        $("#Q5").show();
    }

    function wrongQ4() {
        $(".Q4theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(5000)
        });
        $("#Q4").hide();
        $("#Q5").show();
    }

    // Question 5 to 6
    function correctQ5() {
        $(".Q5theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(6000);
        });
        $("#Q5").hide();
        $("#Q6").show();
    }

    function wrongQ5() {
        $(".Q5theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(6000)
        });
        $("#Q5").hide();
        $("#Q6").show();
    }

    // Question 6 to 7
    function correctQ6() {
        $(".Q6theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(7000);
        });
        $("#Q6").hide();
        $("#Q7").show();
    }

    function wrongQ6() {
        $(".Q6theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(7000)
        });
        $("#Q6").hide();
        $("#Q7").show();
    }

    // Question 7 to 8
    function correctQ7() {
        $(".Q7theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(8000);
        });
        $("#Q7").hide();
        $("#Q8").show();
    }

    function wrongQ7() {
        $(".Q7theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(8000)
        });
        $("#Q7").hide();
        $("#Q8").show();
    }

    // Question 8 to 9
    function correctQ8() {
        $(".Q8theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(9000);
        });
        $("#Q8").hide();
        $("#Q9").show();
    }

    function wrongQ8() {
        $(".Q8theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(9000)
        });
        $("#Q8").hide();
        $("#Q9").show();
    }

    // Question 9 to 10
    function correctQ9() {
        $(".Q9theFourQuestions").hide();
        setTimeout(function () {
            $(".correct").text("CORRECT!").hide(10000);
        });
        $("#Q9").hide();
        $("#Q10").show();
    }

    function wrongQ9() {
        $(".Q9theFourQuestions").hide();
        setTimeout(function () {
            $(".wrong").text("WRONG!").animate().hide(10000)
        });
        $("#Q9").hide();
        $("#Q10").show();
    }


    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // CHECK TO SEE IF ANSWER IS RIGHT OR WRONG

    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // ANSWER CHECK 1
    function answerCheck1() {
        $(".answer1A").on("click", function () {
            if (Q1.rightAnswer1 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer1B").on("click", function () {
            if (Q1.rightAnswer1 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer1C").on("click", function () {
            if (Q1.rightAnswer1 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer1D").on("click", function () {
            if (Q1.rightAnswer1 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 2
    function answerCheck2() {
        $(".answer2A").on("click", function () {
            if (Q2.rightAnswer2 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer2B").on("click", function () {
            if (Q2.rightAnswer2 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer2C").on("click", function () {
            if (Q2.rightAnswer2 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer2D").on("click", function () {

            if (Q2.rightAnswer2 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 3
    function answerCheck3() {

        $(".answer3A").on("click", function () {
            if (Q3.rightAnswer3 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer3B").on("click", function () {
            if (Q3.rightAnswer3 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer3C").on("click", function () {
            if (Q3.rightAnswer3 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer3D").on("click", function () {
            if (Q3.rightAnswer3 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 4
    function answerCheck4() {

        $(".answer4A").on("click", function () {

            if (Q4.rightAnswer4 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer4B").on("click", function () {

            if (Q4.rightAnswer4 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer4C").on("click", function () {

            if (Q4.rightAnswer4 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer4D").on("click", function () {

            if (Q4.rightAnswer4 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 5
    function answerCheck5() {

        $(".answer5A").on("click", function () {

            if (Q5.rightAnswer5 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer5B").on("click", function () {

            if (Q5.rightAnswer5 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer5C").on("click", function () {

            if (Q5.rightAnswer5 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer5D").on("click", function () {

            if (Q5.rightAnswer5 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 6
    function answerCheck6() {

        $(".answer6A").on("click", function () {

            if (Q6.rightAnswer6 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer6B").on("click", function () {

            if (Q6.rightAnswer6 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer6C").on("click", function () {

            if (Q6.rightAnswer6 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer6D").on("click", function () {

            if (Q6.rightAnswer6 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 7
    function answerCheck7() {

        $(".answer7A").on("click", function () {

            if (Q7.rightAnswer7 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer7B").on("click", function () {

            if (Q7.rightAnswer7 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer7C").on("click", function () {

            if (Q7.rightAnswer7 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer7D").on("click", function () {

            if (Q7.rightAnswer7 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 8
    function answerCheck8() {

        $(".answer8A").on("click", function () {

            if (Q8.rightAnswer8 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer8B").on("click", function () {

            if (Q8.rightAnswer8 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer8C").on("click", function () {

            if (Q8.rightAnswer8 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer8D").on("click", function () {

            if (Q8.rightAnswer8 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 9
    function answerCheck9() {

        $(".answer9A").on("click", function () {

            if (Q9.rightAnswer9 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer9B").on("click", function () {

            if (Q9.rightAnswer9 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer9C").on("click", function () {

            if (Q9.rightAnswer9 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer9D").on("click", function () {

            if (Q9.rightAnswer9 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }

    // ANSWER CHECK 10
    function answerCheck10() {

        $(".answer10A").on("click", function () {

            if (Q10.rightAnswer10 === "A") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer10B").on("click", function () {

            if (Q10.rightAnswer10 === "B") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer10C").on("click", function () {

            if (Q10.rightAnswer10 === "C") {
                correct()
            } else {
                wrong()
            }
        });

        $(".answer10D").on("click", function () {

            if (Q10.rightAnswer10 === "D") {
                correct()
            } else {
                wrong()
            }
        });
    }
});



