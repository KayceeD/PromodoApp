let base;
let playPause = 0;
let musicBtn = 0;

function play() {
    base = setInterval(timer, 10);
}

function stop() {
    clearInterval(base);
}

//milisecond update
function updateTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//default value
let millisecond = 100;
let second = 0;
let minute = 20;

//return value
let millisecondVal = 0;
let secondVal = 0;
let minuteVal = 0;

function timer() {
    millisecondVal = updateTime(millisecond);
    secondVal = updateTime(second);
    minuteVal = updateTime(minute);

    millisecond = --millisecond;
    if (millisecond === 0) {
        millisecond = 100;
        second = --second;
    }
    if (second == 00) {
        second = 59;
        minute = --minute;
    }
    if (minute == -1) {
        alertNoti();
        minute = 20;
        second = 0;
    }
    $("#second").text(secondVal);
    $("#minute").text(minuteVal);
}

function playFunc() {

    playPause = playPause + 1;
    document.getElementById("music").play();
    if (playPause === 1) {
        play();
        document.getElementById("play").classList.add("pause");
        document.getElementById("status").innerHTML = "Timer is running";
        document.getElementById("status").style.color="#ED872D";
        $("#animateCircle").addClass("addAnimation");
        $("#animateCircle.addAnimation").css("animation-play-state", "running");
    } else if (playPause === 2) {
        document.getElementById("play").classList.remove("pause");
        document.getElementById("status").innerHTML = "Timer is stop now";
        document.getElementById("status").style.color="gray";
        $("#animateCircle").css("animation-play-state", "paused");
        playPause = 0;
        stop();
    }
}

function resetFunc() {
    millisecond = 100;
    second = 0;
    minute = 20;
    $("#second").text("00");
    $("#minute").text("20");
}

function stopFunc() {
    clearInterval();
    resetFunc();

    if ($("#play").hasClass("pause")) {
        $("#animateCircle").removeClass("addAnimation");
        playFunc();
    }
    document.getElementById("music").pause();
}



function alertNoti() {
    alert("Promodo finished");
}

function musicPlay(){
    musicBtn=musicBtn+1;
    if(musicBtn===1){
        document.getElementById("music").pause();
        document.getElementById("reset").classList.add("volume");
    }else if(musicBtn===2){
        document.getElementById("music").play();
        document.getElementById("reset").classList.remove("volume");
        musicBtn=0;
    }
}