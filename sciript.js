var destination= new Date("jun 23, 2024 00:00").getTime();

var set=setInterval(function(){
    var currentDate= new Date().getTime();
    var duration= destination-currentDate;
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((duration % (1000 * 60)) / 1000);
    document.getElementById('timer').innerHTML=days +"days :" +hours + "h :" +minutes + "min :" + seconds + "sec"

    if(duration < 0){
        clearInterval(set);
        var box=document.getElementById('timer').innerHTML="Yohoo! Wish You A Very Happy Birthday  "
        box.style.fontSize=4+"rem";
    }
},)