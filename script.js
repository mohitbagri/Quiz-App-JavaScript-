/* eslint-disable func-names */
/* eslint-disable no-alert */
/* eslint-disable prefer-const */
(function () {

    // var body = document.getElementsByTagName('body');
    document.body.innerHTML += '<h1> CIS 557 HW2 QUIZ</h1> ';
    document.body.innerHTML += '<form name="myForm" id="myForm"> ';
    // document.body.innerHTML += '     <form name="userForm" id="userForm"> ';
    document.body.innerHTML += '        <input type="text" name="username" id="username" placeholder="Enter your username here" /> ';
    document.body.innerHTML += '     </form> ';

    document.body.innerHTML += '<button id="ok">Submit</button> ';
    document.body.innerHTML += '<div class="quiz-container"> ';
    document.body.innerHTML += '        <div id="quiz"></div> ';
    document.body.innerHTML += '</div> ';
    document.body.innerHTML += '<input id="textField1" type="text" value="0" align="right" size="30" /><br>';

    document.body.innerHTML += '<input id = "textField2" type = "text" value = "0" align = "right" size = "30" /> <br>';
    document.body.innerHTML += '<input id="textField3" type="text" value="0" align="right" size="30" /><br>';
    document.body.innerHTML += '<button id="previous"> Previous Question</button> ';
    document.body.innerHTML += '<button id="next"> Next Question</button> ';
    document.body.innerHTML += '<button id="show"> Show Result</button> ';
    document.body.innerHTML += '<button id="submit"> Restart Quiz</button> ';
    document.body.innerHTML += ' </form> ';
    document.body.innerHTML += ' <div id="results"> </div> ';


    let maxScore = 0;
    let username = document.getElementById("username");
    let name = username.value;

    window.localStorage.clear();
    // Functions
    window.localStorage.setItem('maxScore', maxScore);
    window.localStorage.setItem(username.value, 0);
    document.getElementById("textField3").value = 0;

    if (name.length === 0) {

        document.getElementById("textField3").value = 0;
    }




    function main() {


        let quizContainer = document.getElementById('quiz');
        let resultsContainer = document.getElementById('results');
        let submitButton = document.getElementById('submit');
        let showButton = document.getElementById('show');
        const previousButton = document.getElementById("previous");
        const nextButton = document.getElementById("next");
        const okButton = document.getElementById("ok");
        let currentSlide = 0;
        nextButton.disabled = true;

        let myQuestions = [
            {
                question: "https://s.abcnews.com/images/Entertainment/WireAP_91d6741d1954459f9993bd7a2f62b6bb_16x9_992.jpg",
                answers: {
                    a: "Dwyane (The Rock) Johson",
                    b: "Stone man",
                    c: "Brittany Spears",
                    d: "Mustafa"
                },
                correctAnswer: "a"
            },
            {
                question: "https://www.byrdie.com/thmb/4_qMkGKchnx8ThwW1NCiaDAZ790=/1067x800/smart/filters:no_upscale()/rihana-5178adbd22af42f9b6a745ad502c2c8e.jpg",
                answers: {
                    a: "Beyonce",
                    b: "Rihanna",
                    c: "Adele",
                    d: "Bryan Adams"
                },
                correctAnswer: "b"
            },
            {
                question: "https://www.refinery29.com/images/9601067.jpg?format=webp&width=720&height=864&quality=85&crop=5%3A6",
                answers: {
                    a: "Brad Pitt",
                    b: "George Clooney",
                    c: "Tom Hanks",
                    d: "Garfield"
                },
                correctAnswer: "c"
            },
            {
                question: "https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTM5ODkxNzYyODU1NDIwOTM4%2Fed-sheeran-gettyimages-494227430_1600jpg.jpg",
                answers: {
                    a: "50 Cent",
                    b: "Superman",
                    c: "Ed Sheeran",
                    d: "Brad Pitt"
                },
                correctAnswer: "c"
            },
            {
                question: "https://cdn.lolwot.com/wp-content/uploads/2016/02/10-celebrities-that-hate-being-famous-1.jpg",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Superman",
                    c: "Ed Sheeran",
                    d: "Brad Pitt"
                },
                correctAnswer: "a"
            },
            {
                question: "https://tbsnews.net/sites/default/files/styles/big_2/public/images/2020/07/01/priyanka_chopra.jpeg?itok=jAIA8ddH&timestamp=1593589260",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Priyanka Chopra",
                    c: "Ed Sheeran",
                    d: "Brad Pitt"
                },
                correctAnswer: "b"
            },
            {
                question: "https://ichef.bbci.co.uk/news/976/cpsprodpb/2D45/production/_92798511_afp_gomez.jpg",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Priyanka Chopra",
                    c: "Ed Sheeran",
                    d: "Selena Gomez"
                },
                correctAnswer: "d"
            },
            {
                question: "https://image.cnbcfm.com/api/v1/image/106635599-1595938600994SG-Gates-072820-02-jpg?v=1595938650",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Bill Gates",
                    c: "Ed Sheeran",
                    d: "Selena Gomez"
                },
                correctAnswer: "b"
            },
            {
                question: "https://filmdaily.co/wp-content/uploads/2020/08/ellencelebs-lede-1300x949.jpg",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Ellen DeGeneres",
                    c: "Ed Sheeran",
                    d: "Selena Gomez"
                },
                correctAnswer: "b"
            },
            {
                question: "https://assets.entrepreneur.com/content/3x2/2000/20150203155721-beyonce-3.jpeg",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Ellen DeGeneres",
                    c: "Beyonce",
                    d: "Selena Gomez"
                },
                correctAnswer: "c"
            },
            {
                question: "https://www.biography.com/.image/t_share/MTU0MTU0MTcyMTU2MDI4MzE1/jay-z-attends-2017-roc-nation-pre-grammy-brunch-at-owlwood-estate-on-february-11-2017-in-los-angeles-california-photo-by-ari-perilsteingetty-images-for-roc-nation-500.jpg",
                answers: {
                    a: "Jay Z",
                    b: "Ellen DeGeneres",
                    c: "Beyonce",
                    d: "Selena Gomez"
                },
                correctAnswer: "a"
            },
            {
                question: "https://cdn.cnn.com/cnnnext/dam/assets/181220114358-20181220-elon-musk-large-169.jpg",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Ellen DeGeneres",
                    c: "Elon Musk",
                    d: "Selena Gomez"
                },
                correctAnswer: "c"
            },
            {
                question: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
                answers: {
                    a: "Jennifer Aniston",
                    b: "Ellen DeGeneres",
                    c: "Elon Musk",
                    d: "Steve Jobs"
                },
                correctAnswer: "d"
            },
            {
                question: "https://cdn.vox-cdn.com/thumbor/sKobvhE31vUDeQrW_WNKH0MKQUo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19378373/1164343509.jpg.jpg",
                answers: {
                    a: "Miley Cyrus",
                    b: "Wonder Woman",
                    c: "Casper",
                    d: "Taylor Swift"
                },
                correctAnswer: "d"
            }
        ];

        function randomize(obj) {
            let index;
            let temp;
            let newObj = obj;
            for (let i = obj.length - 1; i > 0; i -= 1) {
                index = Math.floor((Math.random() * i));
                temp = newObj[index];
                newObj[index] = newObj[i];
                newObj[i] = temp;
            }

            return newObj;

        }

        function buildQuiz(myQ) {

            let output = [];

            myQ.forEach(
                (currentQuestion, questionNumber) => {

                    let answers = [];

                    Object.keys(currentQuestion.answers).forEach(letter => {

                        answers.push(
                            `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                                ${letter} :${currentQuestion.answers[letter]}
                            </label>`
                        );
                    })


                    output.push(
                        `<div class="slide">
                <img class="question" id="i1"
                    src="${currentQuestion.question}">
                    <div class="answers"> ${answers.join("")} </div>
                    </div>`
                    );
                }


            );

            quizContainer.innerHTML = output.join('');

        }



        function showResults() {

            let answerContainers = quizContainer.querySelectorAll('.answers');
            let numCorrect = 0;

            myQuestions.forEach((currentQuestion, questionNumber) => {

                let answerContainer = answerContainers[questionNumber];
                let selector = `input[name=question${questionNumber}]:checked`;
                let userAnswer = (answerContainer.querySelector(selector) || {}).value;
                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect += 1;
                }
            });

            let temp = window.localStorage.getItem('maxScore');
            temp = Math.max(temp, numCorrect)
            window.localStorage.setItem('maxScore', temp);

            let userMaxScore = window.localStorage.getItem(username.value);
            userMaxScore = Math.max(userMaxScore, numCorrect);
            window.localStorage.setItem(username.value, userMaxScore);

            resultsContainer.innerHTML = `Thank you ${username.value} for completing the quiz you got ${numCorrect} correct. Please press restart for another attempt. `;
            document.getElementById("textField1").value = `Max Score ${window.localStorage.getItem('maxScore')}`;
            document.getElementById("textField3").value = `${username.value} Best Score ${userMaxScore}/14`;
            document.getElementById("textField2").value = `${username.value} Current Score ${numCorrect}/14`;

        }

        function originalState() {


            document.getElementById("username").value = "";
            nextButton.disabled = true;
            main()

        }

        function resetQuiz() {
            document.getElementById('results').innerHTML = "";
            originalState();
        }

        let slides = '';

        myQuestions = randomize(myQuestions);
        buildQuiz(myQuestions);
        slides = document.querySelectorAll(".slide");

        function showSlide(n) {


            let answerContainers = quizContainer.querySelectorAll('.answers');
            let numCorrect = 0;

            myQuestions.forEach((currentQuestion, questionNumber) => {

                let answerContainer = answerContainers[questionNumber];
                let selector = `input[name=question${questionNumber}]:checked`;
                let userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect += 1;
                }
            });

            let temp = window.localStorage.getItem('maxScore');
            temp = Math.max(temp, numCorrect)
            window.localStorage.setItem('maxScore', temp);

            let userMaxScore = window.localStorage.getItem(username.value);
            userMaxScore = Math.max(userMaxScore, numCorrect);
            window.localStorage.setItem(username.value, userMaxScore);

            document.getElementById("textField1").value = `Max Score ${window.localStorage.getItem('maxScore')}`;

            if (username.value.length === 0) {
                document.getElementById("textField2").value = 0;
                document.getElementById("textField3").value = 0;

            } else {
                let userPrevScore = window.localStorage.getItem(username.value);
                document.getElementById("textField3").value = `${username.value} Best Score ${userPrevScore}/14`;
                document.getElementById("textField2").value = `${username.value} Current Score ${numCorrect}/14`;
            }

            slides[currentSlide].classList.remove('active-slide');
            slides[n].classList.add('active-slide');
            currentSlide = n;
            submitButton.style.display = 'inline-block';

            if (numCorrect >= 10) {
                showButton.style.display = 'inline-block';

            } else {
                showButton.style.display = 'none';
            }

            if (currentSlide === 0) {
                previousButton.style.display = 'none';
                nextButton.style.display = 'inline-block';
            }
            else {
                nextButton.style.display = 'inline-block';
                previousButton.style.display = 'inline-block';
            }
            if (currentSlide === slides.length - 1) {
                nextButton.style.display = 'none';
                submitButton.style.display = 'inline-block';
                showButton.style.display = 'inline-block';
            }

        }
        showSlide(currentSlide);

        function showNextSlide() {
            showSlide(currentSlide + 1);
        }

        function showPreviousSlide() {
            showSlide(currentSlide - 1);
        }

        function showUserDetails() {

            if (username.value.length === 0) {
                originalState();
            }

            if (username.value.length > 0) {

                let exp2 = /^[a-zA-Z0-9 ]+$/i;
                if (!username.value.match(exp2)) {
                    alert("ENTERED WRONG NAME FORMAT");
                    originalState();
                } else {
                    nextButton.disabled = false;
                }

                let userPrevScore = window.localStorage.getItem(username.value);
                document.getElementById("textField2").value = `${username.value} Current Score 0/14`;

                if (userPrevScore === null) {
                    document.getElementById("textField3").value = `${username.value} Best Score 0/14`;
                } else {
                    document.getElementById("textField3").value = `${username.value} Best Score ${userPrevScore}/14`;
                }

            } else {
                document.getElementById("textField3").value = 0;
            }

        }

        showButton.addEventListener("click", showResults);
        submitButton.addEventListener("click", resetQuiz);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
        okButton.addEventListener("click", showUserDetails);

    }

    main();

})();