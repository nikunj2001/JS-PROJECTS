setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime = d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform= `rotate(${hrotation}deg)`;
    minute.style.transform= `rotate(${mrotation}deg)`;
    second.style.transform= `rotate(${srotation}deg)`;
    if(stime%2==0){
        document.getElementById("clockContainer").style.borderLeftColor="green";
        document.getElementById("clockContainer").style.borderRightColor="red";
        document.getElementById("clockContainer").style.borderBottomColor="yellow";
        document.getElementById("clockContainer").style.borderTopColor="blue";
    }else{
        document.getElementById("clockContainer").style.borderLeftColor="red";
        document.getElementById("clockContainer").style.borderRightColor="green";
        document.getElementById("clockContainer").style.borderBottomColor="blue";
        document.getElementById("clockContainer").style.borderTopColor="yellow";
    }
}, 1000);