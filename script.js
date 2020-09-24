var timerEl = document.getElementById("timer");
var main = document.getElementById("main");
var choice;
var count = 60;
var question1 = "JavaScript uses reserved keyword var to declare a ________";
var question2 = "What is the HTML tag under which one can write the JavaScript code?";
var question3 = "Which of the following is the correct syntax to display “Hello World” in an alert box using JavaScript?";
var question4 = "What is the correct syntax for referring to an external script called “script.js”?";
var question5 = "What is the correct syntax for an array using JavaScript?";
var answer1 =[
    "integer",
    "variable",
    "boolian",
    "string"
]
var answer2 =[
    "javascript",
    "scripted",
    "script",
    "js"
]
var answer3 =[
    "alertbox(“Hello World”);",
    "msg(“Hello World”);",
    "msgbox(“Hello World”);",
    "alert(“Hello World”);"
]
var answer4 =[
    "<script src=”script.js”>",
    "<script href=”script.js”>",
    "<script ref=”script.js”>",
    "<script name=”script.js”>"
]
var answer5 =[
    "var array=()",
    "var array=[]",
    "var array()",
    "var array[]"
]
function timer(){
    var timer = setInterval(function(){
        count--;
        var newCount = count;
        timerEl.textContent = "Timer: " + newCount;
        if(count == 0){
            gameOver();
            clearInterval(timer);
        }
    }, 1000);
}
function quiz(){
    timer();
    quiz1();
    quiz2();
    quiz3();
    quiz4();
    quiz5();

}
function quiz1(){
    main.textContent = question1;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer1[i];
        main.appendChild(button);
        button.setAttribute("id", "answer" +i);
    }
    answer0.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
    answer1.addEventListener("click", function(){
        result.textContent = "correct!"
    });
    answer2.addEventListener("click", function(){
       //alert("wrong");
       result.textContent = "wrong!"
    });
    answer3.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
}
function quiz2(){
    main.textContent = question2;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer2[i];
        main.appendChild(button);
        button.setAttribute("id", "answer" +i);
    }
    answer0.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
    answer1.addEventListener("click", function(){
        result.textContent = "wrong!"
    });
    answer2.addEventListener("click", function(){
       //alert("wrong");
       result.textContent = "correct!"
    });
    answer3.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
    //alert(count);
}
function quiz3(){
    main.textContent = question3;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer3[i];
        main.appendChild(button);
        button.setAttribute("id", "answer" +i);
    }
    answer0.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
    answer1.addEventListener("click", function(){
        result.textContent = "wrong!"
    });
    answer2.addEventListener("click", function(){
       //alert("wrong");
       result.textContent = "wrong!"
    });
    answer3.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "correct!"
    });
    //alert(count);
}
function quiz4(){
    main.textContent = question4;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer4[i];
        main.appendChild(button);
        button.setAttribute("id", "answer" +i);
    }
    answer0.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "correct!"
    });
    answer1.addEventListener("click", function(){
        result.textContent = "wrong!"
    });
    answer2.addEventListener("click", function(){
       //alert("wrong");
       result.textContent = "wrong!"
    });
    answer3.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
    //alert(count);
}
function quiz5(){
    main.textContent = question5;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer5[i];
        main.appendChild(button);
        button.setAttribute("id", "answer" +i);
    }
    answer0.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
    answer1.addEventListener("click", function(){
        result.textContent = "correct!"
        gameOver();
    });
    answer2.addEventListener("click", function(){
       //alert("wrong");
       result.textContent = "wrong!"
    });
    answer3.addEventListener("click", function(){
        //alert("wrong");
        result.textContent = "wrong!"
    });
    //alert(count);
}

function gameOver(){
    main.textContent = "game over";
}
start.addEventListener("click",function(){
    /*
    var timer = setInterval(function(){
        count--;
        timerEl.textContent = "Timer: " + count;
        if(count == 0){
            gameOver();
            clearInterval(timer);
        }
    }, 1000);*/
    quiz();
});