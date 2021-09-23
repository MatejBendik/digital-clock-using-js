
document.getElementById("hours").innerHTML = "";
document.getElementById("minutes").innerHTML = "";
document.getElementById("seconds").innerHTML = "";

function formatTime(number){
    if(number<10){
        return "0" + number.toString();
    } else{
        return number.toString();
    }
}

window.setInterval(function(){

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    document.getElementById("hours").innerHTML = formatTime(hours) + "   :";
    document.getElementById("minutes").innerHTML = formatTime(minutes) + "   :";
    document.getElementById("seconds").innerHTML = formatTime(seconds);

},1000)
