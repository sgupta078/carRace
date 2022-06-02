var oppCar1 = document.getElementById("oppCar1");
var oppCar2 = document.getElementById("oppCar2");
var userCar = document.getElementById("userCar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("gameCon");
var jumpsound = document.getElementById("jumpsound");
var start = document.getElementById("start");
var counter = 0;


// start the game via button and enter key

document.querySelector("#stbtn").addEventListener("click", function(){
    start.style.display = "none";
    game.style.display = "block";
});



// generating random lanes for opponent cars (traffic cars)

oppCar1.addEventListener("animationiteration", function(){
    var random1 = ((Math.floor(Math.random()*3))*130);
    if(random1 == 0){
        oppCar1.style.textAlign = "right";   
    }
    if(random1 == 130){
        oppCar1.style.textAlign = "center";
    }
    if(random1 == 260){
        oppCar1.style.textAlign = "left";
    }
    oppCar1.style.left = random1 + "px";
    counter++;
});

oppCar2.addEventListener("animationiteration", function(){
    var random2 = ((Math.floor(Math.random()*3))*130);
    if(random2 == 0){
        oppCar2.style.textAlign = "right";   
    }
    if(random2 == 130){
        oppCar2.style.textAlign = "center";
    }
    if(random2 == 260){
        oppCar2.style.textAlign = "left";
    }
    oppCar2.style.left = random2 + "px";
    counter++;
});


// moving the user car with arrow keys... keycode of right key is 39 and left key is 37

window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){
        var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
        if(userCarLeft < 260){
            userCar.style.left = (userCarLeft + 130) + "px";
            jumpsound.play();
        } 
    }
    if(e.keyCode == "37"){
        var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
        if(userCarLeft > 0){
            userCar.style.left = (userCarLeft - 130) + "px";
            jumpsound.play();
        }
    }
    var userUpdatedLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if(userUpdatedLeft == 0){
        userCar.style.textAlign = "right";
    }
    if(userUpdatedLeft == 130){
        userCar.style.textAlign = "center";
    }
    if(userUpdatedLeft == 260){
        userCar.style.textAlign = "left";
    }
});


// moving usercar with key buttons

document.querySelector("#left").addEventListener("click", function(e){
    var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if(userCarLeft > 0){
        userCar.style.left = (userCarLeft - 130) + "px";
        jumpsound.play();
    }
    var userUpdatedLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if(userUpdatedLeft == 0){
        userCar.style.textAlign = "right";
    }
    if(userUpdatedLeft == 130){
        userCar.style.textAlign = "center";
    }
    if(userUpdatedLeft == 260){
        userCar.style.textAlign = "left";
    }
    document.querySelector("#left").classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#left").classList.remove("pressed");
    }, 100);
});

document.querySelector("#right").addEventListener("click", function(e){
    var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if(userCarLeft < 260){
        userCar.style.left = (userCarLeft + 130) + "px";
        jumpsound.play();
    }
    var userUpdatedLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if(userUpdatedLeft == 0){
        userCar.style.textAlign = "right";
    }
    if(userUpdatedLeft == 130){
        userCar.style.textAlign = "center";
    }
    if(userUpdatedLeft == 260){
        userCar.style.textAlign = "left";
    }
    document.querySelector("#right").classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#right").classList.remove("pressed");
    }, 100);
});


// game over conditions

setInterval(function Gameover(){
    var oppCarTop1 = parseInt(window.getComputedStyle(oppCar1).getPropertyValue("top"));
    var oppCarTop2 = parseInt(window.getComputedStyle(oppCar2).getPropertyValue("top"));
    var oppCarLeft1 = parseInt(window.getComputedStyle(oppCar1).getPropertyValue("left"));
    var oppCarLeft2 = parseInt(window.getComputedStyle(oppCar2).getPropertyValue("left"));
    var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if(((oppCarLeft1==userCarLeft) && (oppCarTop1 > 385) && (oppCarTop1 < 585)) || 
    ((oppCarLeft2==userCarLeft) && (oppCarTop2 > 250) && (oppCarTop2 < 485))){
        result.style.display="block"; 
        game.style.display = "none";
        score.innerHTML = `Score: ${counter} `;
        counter=0;
    }
}, 10);