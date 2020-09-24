var timerEl = document.getElementById("timer");
var main = document.getElementById("main");
var choice;
var count = 60;
var answer =[
    "10",
    "9",
    "45",
    "20"
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
    question1();
    question2();
    question3();
    question4();
    question5();
}
function question1(){
    main.textContent = question1;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer[i];
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
function question2(){
    main.textContent = question1;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer[i];
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
    //alert(count);
}
function question3(){
    main.textContent = question1;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer[i];
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
    //alert(count);
}
function question4(){
    main.textContent = question1;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer[i];
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
    //alert(count);
}
function question5(){
    main.textContent = question1;
    var result = document.createElement("p");
    result.textContent = "";
    main.appendChild(result);
    for(var i = 0; i <answer.length; i++){
        var button = document.createElement("button");
        button.textContent = answer[i];
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