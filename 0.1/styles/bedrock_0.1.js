function checkMobile(){
    if (screen.width <= 800){
        window.location = "http://mobile.moar-nilla.com";
    }
}

function setBackground(){
    var thisDate = new Date();
    var thisHour = thisDate.getHours();
    
    if ( thisHour >= 0 && thisHour < 5 ){ 
        document.body.className = "lateNight";
    } else if ( thisHour >= 5 && thisHour < 9 ){
        document.body.className = "morning";
    } else if ( thisHour >= 9 && thisHour < 12 ){
        document.body.className = "lateMorning";
    } else if ( thisHour >= 12 && thisHour < 16 ){
        document.body.className = "afternoon";
    } else if ( thisHour >= 16 && thisHour < 18 ){
        document.body.className = "lateAfternoon";
    } else if ( thisHour >= 18 && thisHour < 20 ){
        document.body.className = "evening";
    } else if ( thisHour >= 20 && thisHour < 21 ){
        document.body.className = "lateEvening";
    } else if ( thisHour >= 21 && thisHour < 24 ){
        document.body.className = "night";
    }  
}

function clickFeed(){
    if (screen.width <= 800){
        window.location = "http://blog.moar-nilla.com";
    } else {
        document.getElementById("article").innerHTML='<iframe src="http://moar-nilla.blogspot.com"></iframe>';
        document.getElementById("popout").innerHTML = '<a href="http://blog.moar-nilla.com">popout <img src=/resources/images/popout.png></a>';
    }
}

function clickInfo(){
    document.getElementById("article").innerHTML='<iframe src="http://moar-nilla.com/rules.html"></iframe>';
    document.getElementById("popout").innerHTML = ' ';
}

function clickForums(){
    document.getElementById("article").innerHTML='<iframe src="http://forums.moar-nilla.com"></iframe>';  
    document.getElementById("popout").innerHTML = '<a href="http://forums.moar-nilla.com">popout <img src=/resources/images/popout.png></a>';    
}

function clickDynmap(){
    document.getElementById("article").innerHTML='<iframe src="http://mc.moar-nilla.com:8123"></iframe>';
    document.getElementById("popout").innerHTML = '<a href="http://mc.moar-nilla.com:8123">popout <img src=/resources/images/popout.png></a>';
}