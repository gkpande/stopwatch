var isStop=true;
var s=0,min=0,hr=0;
function start(){
    if(isStop==true){
        isStop=false;
        timer();
    }
}

function timer(){
    if(isStop==false){
        s=parseInt(s);
        min=parseInt(min);
        hr=parseInt(hr);
        s++;
        if(s==60){
            min++;
            s=0;
        }
        if(min==60){
            hr++;
            min=0;
        }
        if(s<10){
            s="0"+ s;
        }
        if(min<10){
            min="0"+ min;
        }
        if(hr<10){
            hr="0"+ hr;
        }
        stopwatch.innerHTML=hr +" : " + min + " : " + s;
        setTimeout("timer()",1000);
        
    }
}

function stop(){
    isStop=true;
}

function reset(){
    isStop=true;
    h=0;
    min=0;
    hr=0;
    stopwatch.innerHTML=" 00 : 00 : 00 "
}