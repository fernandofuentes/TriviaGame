/*
                       .-.
                      |_:_|
                     /(_Y_)\
                    ( \/M\/ )
 '.               _.'-/'-'\-'._
   ':           _/.--'[[[[]'--.\_
     ':        /_'  : |::"| :  '.\
       ':     //   ./ |oUU| \.'  :\
         ':  _:'..' \_|___|_/ :   :|
           ':.  .'  |_[___]_|  :.':\
            [::\ |  :  | |  :   ; : \
             '-'   \/'.| |.' \  .;.' |
             |\_    \  '-'   :       |
             |  \    \ .:    :   |   |
             |   \    | '.   :    \  |
             /       \   :. .;       |
            /     |   |  :__/     :  \\
           |  |   |    \:   | \   |   ||
          /    \  : :  |:   /  |__|   /|
          |     : : :_/_|  /'._\  '--|_\
          /___.-/_|-'   \  \
                         '-'
 */

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

    var correctScore = 0;
    var wrongScore = 0;


    $("#numberCorrect").text(correctScore);
    $("#numberWrong").text(wrongScore);

    var Q1 = {
        questionNumber1: "#1",
        question1: "Who is Luke's Daddy?",
        answer1A: "Anakin",
        answer1B: "Darth Fader",
        answer1C: "Darth Mader",
        answer1D: "Darth Wader",
        rightAnswer1: "A"
    };

    var Q2 = {
        questionNumber2: "#2",
        question2: "Who directed the Star Wars movies?",
        answer2A: "J K Rowling",
        answer2B: "Charles Dickens",
        answer2C: "William Shakespeare",
        answer2D: "George Lucas",
        rightAnswer2: "D"
    };

    var Q3 = {
        questionNumber3: "#3",
        question3: "What species is Count Dooku?",
        answer3A: "Martian",
        answer3B: "Humanoid",
        answer3C: "Wookiee",
        answer3D: "Gungan",
        rightAnswer3: "B"
    };

    var Q4 = {
        questionNumber4: "#4",
        question4: "Who were the apprentices of Darth Sidious?",
        answer4A: "Maul, Vader",
        answer4B: "Anakin, Luke",
        answer4C: "Darth Jedi, Darth Sith",
        answer4D: "Darth Fader, Darth Mader",
        rightAnswer4: "A"
    };

    var Q5 = {
        questionNumber5: "#5",
        question5: "How many Death Stars were built?",
        answer5A: "1",
        answer5B: "2",
        answer5C: "5",
        answer5D: "1 for every movie",
        rightAnswer5: "B"
    };

    var Q6 = {
        questionNumber6: "#6",
        question6: "Who is fluent in over 6,000,000 forms of communication",
        answer6A: "C-3PO",
        answer6B: "R2-D2",
        answer6C: "R4-P17",
        answer6D: "Jar Jar",
        rightAnswer6: "A"
    };

    var Q7 = {
        questionNumber7: "#7",
        question7: "The Clone Wars were between...",
        answer7A: "Episodes I and II",
        answer7B: "Episodes II and III",
        answer7C: "Episodes III and IV",
        answer7D: "Episodes IV and V",
        rightAnswer7: "B"
    };

    var Q8 = {
        questionNumber8: "#8",
        question8: "Which major battle did the Rebel Alliance lose?",
        answer8A: "Battle of Yavin IV",
        answer8B: "Battle of Hoth",
        answer8C: "Battle of Endor",
        answer8D: "Battle of Death Star III",
        rightAnswer8: "B"
    };

    var Q9 = {
        questionNumber9: "#9",
        question9: "Luke Skywalker is the son of whom?",
        answer9A: "Anakin and Padme",
        answer9B: "Vader and Shmi",
        answer9C: "Palpatine and Asajj Ventress",
        answer9D: "Han and Leia",
        rightAnswer9: "A"
    };

    var Q10 = {
        questionNumber10: "#10",
        question10: "Who said the following:\n" + "\"No, I am your Father!\"",
        answer10A: "Luke Skywalker",
        answer10B: "Emperor Palpatine",
        answer10C: "Darth Vader",
        answer10D: "Harry Potter",
        rightAnswer10: "C"
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

    // CHECK TO SEE IF ANSWER IS RIGHT OR WRONG

    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    // ANSWER CHECK 1
    function answerCheck1() {
        $(".answer1A").on("click", function () {
            if (Q1.rightAnswer1 === "A") {
                correctScore = correctScore + 1;
                correctQ1();


            } else {
                wrongScore = wrongScore + 1;
                wrongQ1();

            }
        });

        $(".answer1B").on("click", function () {
            if (Q1.rightAnswer1 === "B") {
                correctScore = correctScore + 1;
                correctQ1();

            } else {
                wrongScore = wrongScore + 1;
                wrongQ1();

            }
        });

        $(".answer1C").on("click", function () {
            if (Q1.rightAnswer1 === "C") {
                correctScore = correctScore + 1;
                correctQ1();

            } else {
                wrongScore = wrongScore + 1;
                wrongQ1();

            }
        });

        $(".answer1D").on("click", function () {
            if (Q1.rightAnswer1 === "D") {
                correctScore = correctScore + 1;
                correctQ1();

            } else {
                wrongScore = wrongScore + 1;
                wrongQ1();

            }
        });
    }

    // ANSWER CHECK 2
    function answerCheck2() {
        $(".answer2A").on("click", function () {
            if (Q2.rightAnswer2 === "A") {
                correctQ2()
                correctScore = correctScore + 1;
            } else {
                wrongQ2()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer2B").on("click", function () {
            if (Q2.rightAnswer2 === "B") {
                correctQ2()
                correctScore = correctScore + 1;
            } else {
                wrongQ2()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer2C").on("click", function () {
            if (Q2.rightAnswer2 === "C") {
                correctQ2()
                correctScore = correctScore + 1;
            } else {
                wrongQ2()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer2D").on("click", function () {

            if (Q2.rightAnswer2 === "D") {
                correctQ2()
                correctScore = correctScore + 1;
            } else {
                wrongQ2()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 3
    function answerCheck3() {

        $(".answer3A").on("click", function () {
            if (Q3.rightAnswer3 === "A") {
                correctQ3()
                correctScore = correctScore + 1;
            } else {
                wrongQ3()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer3B").on("click", function () {
            if (Q3.rightAnswer3 === "B") {
                correctQ3()
                correctScore = correctScore + 1;
            } else {
                wrongQ3()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer3C").on("click", function () {
            if (Q3.rightAnswer3 === "C") {
                correctQ3()
                correctScore = correctScore + 1;
            } else {
                wrongQ3()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer3D").on("click", function () {
            if (Q3.rightAnswer3 === "D") {
                correctQ3()
                correctScore = correctScore + 1;
            } else {
                wrongQ3()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 4
    function answerCheck4() {

        $(".answer4A").on("click", function () {

            if (Q4.rightAnswer4 === "A") {
                correctQ4()
                correctScore = correctScore + 1;
            } else {
                wrongQ4()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer4B").on("click", function () {

            if (Q4.rightAnswer4 === "B") {
                correctQ4()
                correctScore = correctScore + 1;
            } else {
                wrongQ4()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer4C").on("click", function () {

            if (Q4.rightAnswer4 === "C") {
                correctQ4()
                correctScore = correctScore + 1;
            } else {
                wrongQ4()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer4D").on("click", function () {

            if (Q4.rightAnswer4 === "D") {
                correctQ4()
                correctScore = correctScore + 1;
            } else {
                wrongQ4()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 5
    function answerCheck5() {

        $(".answer5A").on("click", function () {

            if (Q5.rightAnswer5 === "A") {
                correctQ5()
                correctScore = correctScore + 1;
            } else {
                wrongQ5()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer5B").on("click", function () {

            if (Q5.rightAnswer5 === "B") {
                correctQ5()
                correctScore = correctScore + 1;
            } else {
                wrongQ5()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer5C").on("click", function () {

            if (Q5.rightAnswer5 === "C") {
                correctQ5()
                correctScore = correctScore + 1;
            } else {
                wrongQ5()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer5D").on("click", function () {

            if (Q5.rightAnswer5 === "D") {
                correctQ5()
                correctScore = correctScore + 1;
            } else {
                wrongQ5()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 6
    function answerCheck6() {

        $(".answer6A").on("click", function () {

            if (Q6.rightAnswer6 === "A") {
                correctQ6()
                correctScore = correctScore + 1;
            } else {
                wrongQ6()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer6B").on("click", function () {

            if (Q6.rightAnswer6 === "B") {
                correctQ6()
                correctScore = correctScore + 1;
            } else {
                wrongQ6()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer6C").on("click", function () {

            if (Q6.rightAnswer6 === "C") {
                correctQ6()
                correctScore = correctScore + 1;
            } else {
                wrongQ6()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer6D").on("click", function () {

            if (Q6.rightAnswer6 === "D") {
                correctQ6()
                correctScore = correctScore + 1;
            } else {
                wrongQ6()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 7
    function answerCheck7() {

        $(".answer7A").on("click", function () {

            if (Q7.rightAnswer7 === "A") {
                correctQ7()
                correctScore = correctScore + 1;
            } else {
                wrongQ7()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer7B").on("click", function () {

            if (Q7.rightAnswer7 === "B") {
                correctQ7()
                correctScore = correctScore + 1;
            } else {
                wrongQ7()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer7C").on("click", function () {

            if (Q7.rightAnswer7 === "C") {
                correctQ7()
                correctScore = correctScore + 1;
            } else {
                wrongQ7()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer7D").on("click", function () {

            if (Q7.rightAnswer7 === "D") {
                correctQ7()
                correctScore = correctScore + 1;
            } else {
                wrongQ7()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 8
    function answerCheck8() {

        $(".answer8A").on("click", function () {

            if (Q8.rightAnswer8 === "A") {
                correctQ8()
                correctScore = correctScore + 1;
            } else {
                wrongQ8()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer8B").on("click", function () {

            if (Q8.rightAnswer8 === "B") {
                correctQ8()
                correctScore = correctScore + 1;
            } else {
                wrongQ8()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer8C").on("click", function () {

            if (Q8.rightAnswer8 === "C") {
                correctQ8()
                correctScore = correctScore + 1;
            } else {
                wrongQ8()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer8D").on("click", function () {

            if (Q8.rightAnswer8 === "D") {
                correctQ8()
                correctScore = correctScore + 1;
            } else {
                wrongQ8()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 9
    function answerCheck9() {

        $(".answer9A").on("click", function () {

            if (Q9.rightAnswer9 === "A") {
                correctQ9()
                correctScore = correctScore + 1;
            } else {
                wrongQ9()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer9B").on("click", function () {

            if (Q9.rightAnswer9 === "B") {
                correctQ9()
                correctScore = correctScore + 1;
            } else {
                wrongQ9()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer9C").on("click", function () {

            if (Q9.rightAnswer9 === "C") {
                correctQ9()
                correctScore = correctScore + 1;
            } else {
                wrongQ9()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer9D").on("click", function () {

            if (Q9.rightAnswer9 === "D") {
                correctQ9()
                correctScore = correctScore + 1;
            } else {
                wrongQ9()
                wrongScore = wrongScore + 1;
            }
        });
    }

    // ANSWER CHECK 10
    function answerCheck10() {

        $(".answer10A").on("click", function () {

            if (Q10.rightAnswer10 === "A") {
                correctQ10()
                correctScore = correctScore + 1;
            } else {
                wrongQ10()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer10B").on("click", function () {

            if (Q10.rightAnswer10 === "B") {
                correctQ10()
                correctScore = correctScore + 1;
            } else {
                wrongQ10()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer10C").on("click", function () {

            if (Q10.rightAnswer10 === "C") {
                correctQ10()
                correctScore = correctScore + 1;
            } else {
                wrongQ10()
                wrongScore = wrongScore + 1;
            }
        });

        $(".answer10D").on("click", function () {

            if (Q10.rightAnswer10 === "D") {
                correctQ10()
                correctScore = correctScore + 1;
            } else {
                wrongQ10()
                wrongScore = wrongScore + 1;
            }
        });
    }


// Question 1 to 2
    function correctQ1() {
        $(".Q1theFourQuestions").hide();


        setTimeout(function () {
            $(".correctQ1").text("CORRECT!");
        });

        $("#Q1").hide();
        $("#Q2").show();
    }

    function wrongQ1() {
        $(".Q1theFourQuestions").hide();

        $(".wrongQ1").text("WRONG!").hide(1000);

        $("#Q1").hide();
        $("#Q2").show();
    }

// Question 2 to 3
    function correctQ2() {
        $(".Q2theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ2").text("CORRECT!").hide(1000);
        });
        $("#Q2").hide();
        $("#Q3").show();
    }

    function wrongQ2() {
        $(".Q2theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ2").text("WRONG!").hide(1000);
        });
        $("#Q2").hide();
        $("#Q3").show();
    }

// Question 3 to 4
    function correctQ3() {
        $(".Q3theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ3").text("CORRECT!").hide(1000);
        });
        $("#Q3").hide();
        $("#Q4").show();
    }

    function wrongQ3() {
        $(".Q3theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ3").text("WRONG!").hide(1000);
        });
        $("#Q3").hide();
        $("#Q4").show();
    }

// Question 4 to 5
    function correctQ4() {
        $(".Q4theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ4").text("CORRECT!").hide(1000);
        });
        $("#Q4").hide();
        $("#Q5").show();
    }

    function wrongQ4() {
        $(".Q4theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ4").text("WRONG!").hide(1000);
        });
        $("#Q4").hide();
        $("#Q5").show();
    }

// Question 5 to 6
    function correctQ5() {
        $(".Q5theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ5").text("CORRECT!").hide(1000);
        });
        $("#Q5").hide();
        $("#Q6").show();
    }

    function wrongQ5() {
        $(".Q5theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ5").text("WRONG!").hide(1000);
        });
        $("#Q5").hide();
        $("#Q6").show();
    }

// Question 6 to 7
    function correctQ6() {
        $(".Q6theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ6").text("CORRECT!").hide(1000);
        });
        $("#Q6").hide();
        $("#Q7").show();
    }

    function wrongQ6() {
        $(".Q6theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ6").text("WRONG!").hide(1000);
        });
        $("#Q6").hide();
        $("#Q7").show();
    }

    // Question 7 to 8
    function correctQ7() {
        $(".Q7theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ7").text("CORRECT!").hide(1000);
        });
        $("#Q7").hide();
        $("#Q8").show();
    }

    function wrongQ7() {
        $(".Q7theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ7").text("WRONG!").hide(1000);
        });
        $("#Q7").hide();
        $("#Q8").show();
    }


// Question 8 to 9
    function correctQ8() {
        $(".Q8theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ8").text("CORRECT!").hide(1000);
        });
        $("#Q8").hide();
        $("#Q9").show();
    }

    function wrongQ8() {
        $(".Q8theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ8").text("WRONG!").hide(1000);
        });
        $("#Q8").hide();
        $("#Q9").show();
    }

// Question 9 to 10
    function correctQ9() {
        $(".Q9theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ9").text("CORRECT!").hide(1000);
        });
        $("#Q9").hide();
        $("#Q10").show();
    }

    function wrongQ9() {
        $(".Q9theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ9").text("WRONG!").hide(1000);
        });
        $("#Q9").hide();
        $("#Q10").show();
    }

    // Question 10 to 10
    function correctQ10() {
        $(".Q10theFourQuestions").hide();
        setTimeout(function () {
            $(".correctQ10").text("CORRECT!").hide(1000);
        });
        $("#Q10").hide();
        $("#doneWithTrivia").show();
    }

    function wrongQ10() {
        $(".Q10theFourQuestions").hide();
        setTimeout(function () {
            $(".wrongQ10").text("WRONG!").hide(1000);
        });
        $("#Q10").hide();
        $("#doneWithTrivia").show();
    }


});



