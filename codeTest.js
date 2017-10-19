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