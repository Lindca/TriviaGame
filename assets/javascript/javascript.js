        //******can I hide Html until button is clicked then show it when the timer starts?
        $(window).on("load", displayBegin);
        $("#beginGame").on("click", displayGame);
        // if time is up then show Results and hideBegin, hideGame
        setTimeout(displayResults, 120000);
        setInterval(decrement, 1000)
        var time = 120;
        function decrement() {
            $('#timeDisplay').text('00:00')
                time--;
                var converted = timeConverter(time);
                console.log(converted);
                $("#timeDisplay").text(converted);
            function timeConverter(t) {

                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);

                if (seconds < 10) {
                    seconds = "0" + seconds;
                }

                if (minutes === 0) {
                    minutes = "00";
                }
                else if (minutes < 10) {
                    minutes = "0" + minutes;
                }

                return minutes + ":" + seconds;
            }
        }
        function displayBegin() {
            $(".container1").show();
            $(".container2").hide();
            $(".container3").hide();
        }
        function displayGame() {
            $(".container1").hide();
            $(".container2").show();
            $(".container3").hide();
        }
        function displayResults() {
            $(".container1").hide();
            $(".container2").hide();
            $(".container3").show();
            $("#correctAnswers").text(correctArray.length);
            $("#incorrectAnswers").text(incorrectArray.length);
            if (correctArray.length + incorrectArray.length !== 15) {
                unansweredQuestions = 15 - (incorrectArray.length + correctArray.length);
                $("#unansweredQuestions").html(unansweredQuestions)
            }
        }

        var correctArray = [];
        var incorrectArray = [];
        var unansweredQuestions = [];
        $("#Q1").on("click", function (event) {
            if (event.target.value == "Q1b") {
                correctArray.push(event.target.value);
                $("#Q1").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q1").hide();
            }
        })
        $("#Q2").on("click", function (event) {
            if (event.target.value == "Q2c") {
                correctArray.push(event.target.value);
                $("#Q2").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q2").hide();
            }
        })
        $("#Q3").on("click", function (event) {
            if (event.target.value == "Q3d") {
                correctArray.push(event.target.value);
                $("#Q3").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q3").hide();
            }
        })
        $("#Q4").on("click", function (event) {
            if (event.target.value == "Q4c") {
                correctArray.push(event.target.value);
                $("#Q4").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q4").hide();
            }
        })
        $("#Q5").on("click", function (event) {
            if (event.target.value == "Q5b") {
                correctArray.push(event.target.value);
                $("#Q5").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q5").hide();
            }
        })
        $("#Q6").on("click", function (event) {
            if (event.target.value == "Q6c") {
                correctArray.push(event.target.value);
                $("#Q6").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q6").hide();
            }
        })
        $("#Q7").on("click", function (event) {
            if (event.target.value == "Q7d") {
                correctArray.push(event.target.value);
                $("#Q7").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q7").hide();
            }
        })
        $("#Q8").on("click", function (event) {
            if (event.target.value == "Q8b") {
                correctArray.push(event.target.value);
                $("#Q8").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q8").hide();
            }
        })
        $("#Q9").on("click", function (event) {
            if (event.target.value == "Q9a") {
                correctArray.push(event.target.value);
                $("#Q9").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q9").hide();
            }
        })
        $("#Q10").on("click", function (event) {
            if (event.target.value == "Q10a") {
                correctArray.push(event.target.value);
                $("#Q10").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q10").hide();
            }
        })
        $("#Q11").on("click", function (event) {
            if (event.target.value == "Q11d") {
                correctArray.push(event.target.value);
                $("#Q11").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q11").hide();
            }
        })
        $("#Q12").on("click", function (event) {
            if (event.target.value == "Q12c") {
                correctArray.push(event.target.value);
                $("#Q12").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q12").hide();
            }
        })
        $("#Q13").on("click", function (event) {
            if (event.target.value == "Q13b") {
                correctArray.push(event.target.value);
                $("#Q13").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q13").hide();
            }
        })
        $("#Q14").on("click", function (event) {
            if (event.target.value == "Q14a") {
                correctArray.push(event.target.value);
                $("#Q14").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q14").hide();
            }
        })
        $("#Q15").on("click", function (event) {
            if (event.target.value == "Q15a") {
                correctArray.push(event.target.value);
                $("#Q15").hide();
            }
            else {
                incorrectArray.push(event.target.value);
                $("#Q15").hide();
            }
        })