function clock(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    if (hours < 10){
        hours = "0"+hours;
    }if (minutes < 10){
        minutes = "0"+minutes;
    }if (seconds < 10){
        seconds = "0"+seconds;
    }
  
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds; 
    
    if (5 <= hours || hours < 17) {//Morning
        document.body.style.backgroundImage = "url('day.png')";
        document.body.style.color = "white";
    }
    if ( 17 <= hours || hours < 5) {//Morning
        document.body.style.backgroundImage = "url('web2.png.webp')";
        document.body.style.color = "white";
    }

}
setInterval(clock,100);

let clockDigital = document.getElementById("clockDigital");

document.getElementById("playButton").onclick = function(){
    clockDigital.classList.add('changeSize');
};

document.getElementById("backButton").onclick = function(){
    clockDigital.classList.remove('changeSize');
};
