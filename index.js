function multi9Lantern(){
    multiLantern();
    multiLantern();
    multiLantern();
    multiLantern();
    multiLantern();
    multiLantern();
    multiLantern();
    multiLantern();
    multiLantern();
}
function multiLantern(){
    var FLantern = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*100)+10;
    
    FLantern.src = "SVG/skylantern.svg";
    FLantern.className = "skylanterns";
    FLantern.style.left = mleft + "%";
    FLantern.style.width = mdim + "px";
    FLantern.style.zIndex = 3;
    
    document.getElementById("wrapper").appendChild(FLantern);
    
    if(mdim > 100){
        FLantern.style.transition = "bottom 6s";
        FLantern.style.opacity = "1.0";
    } else if (mdim > 70) {
        FLantern.style.transition = "bottom 8s";
        FLantern.style.opacity = "0.8";
    } else if (mdim > 50) {
        FLantern.style.transition = "bottom 10s";
        FLantern.style.opacity = "0.7";
    } else {
        FLantern.style.transition = "bottom 12s";
        FLantern.style.opacity = "0.5";
    }
    
    setTimeout(function(){
        FLantern.style.bottom = "150%";
        setTimeout(function(){
            document.getElementById("wrapper").removeChild(FLantern);
        }, 10000);
    }, 10);
    
}
function increase(x) {
    x.style.width = "360px";   
}
function normal(x) {
    x.style.width = "350px";
}
var flyL = null;

document.getElementById("FLantern").addEventListener("click", function(){
   document.getElementById("FLantern").style.top = "-400px";
    document.getElementById("FLantern").style.opacity = "0";
    document.getElementById("FLantern").style.transition = "5s";
    document.getElementById("boy").style.bottom = "-320px";
    document.getElementById("girl").style.bottom = "-300px";
    document.getElementById("boy").style.opacity = "0";
    document.getElementById("girl").style.opacity = "0";
    document.getElementById("title").style.display = "block";
    document.getElementById("moon").style.width = "700px";
    document.getElementById("year").style.top = "10px";
    document.getElementById("year").style.opacity = "1.0";
    document.getElementById("enter").style.opacity = "1.0";
    document.getElementById("enter").style.bottom = "10px";
    
    flyL = setTimeout(multi9Lantern, 100);
});
document.getElementById("year").addEventListener("mouseover", mouseOver);
document.getElementById("year").addEventListener("mouseout", mouseOut);
document.getElementById("enter").addEventListener("mouseover", EmouseOver);
document.getElementById("enter").addEventListener("mouseout", EmouseOut);

function mouseOver(){
    document.getElementById("year").style.width = "210px";
    document.getElementById("year").style.transition = "0s";
}
function mouseOut(){
    document.getElementById("year").style.width = "200px";
    document.getElementById("year").style.transition = "0s";
}
function EmouseOver(){
    document.getElementById("enter").style.width = "310px";
    document.getElementById("enter").style.transition = "0s";
}
function EmouseOut(){
    document.getElementById("enter").style.width = "300px";
    document.getElementById("enter").style.transition = "0s";
}
document.getElementById("year").addEventListener("click", function(){
    flyL = setTimeout(multi9Lantern, 100);
})

document.getElementById("enter").addEventListener("click", function(){
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("wrapper2").style.display= "block";
})

document.getElementById("handlantern").addEventListener("mouseover", HmouseOver);
document.getElementById("handlantern").addEventListener("mouseout", HmouseOut);

function HmouseOver(){
    document.getElementById("handlantern").style.width = "105px";
}
function HmouseOut(){
    document.getElementById("handlantern").style.width = "100px";
}

var num = 1;
document.getElementById("handlantern").addEventListener("click", function(){
    num = num + 1;
    document.getElementById("handlantern").src = "SVG/lantern" + num + ".svg";
    
    if(num >= 3){
        num = 0;
        document.getElementById("fact").style.display = "block";
        document.getElementById("facttext").innerHTML = "<p>Chinese Lanterns were traditionally made of silk, paper and even glass. Although the most common is the typical red balloon lantern, nowadays Chinese Lanterns come in a variety of shapes, sizes and colors.</p>";
        document.getElementById("styshadow").src = "SVG/lantern3.svg";
    }
});

function Smulti9Lantern(){
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
    SmultiLantern();
}
function SmultiLantern(){
    var SLantern = document.createElement("img");
    var Sleft = Math.round(Math.random()*100);
    var Sdim = Math.round(Math.random()*40)+10;
    
    SLantern.src = "SVG/skylantern.svg";
    SLantern.className = "skylanterns";
    SLantern.style.left = Sleft + "%";
    SLantern.style.width = Sdim + "px";
    SLantern.style.zIndex = 3;
    
    document.getElementById("sky").appendChild(SLantern);
    
    if(Sdim > 40){
        SLantern.style.transition = "bottom 6s";
        SLantern.style.opacity = "1.0";
    } else if (Sdim > 20) {
        SLantern.style.transition = "bottom 8s";
        SLantern.style.opacity = "0.8";
    } else if (Sdim > 5) {
        SLantern.style.transition = "bottom 10s";
        SLantern.style.opacity = "0.7";
    } else {
        SLantern.style.transition = "bottom 12s";
        SLantern.style.opacity = "0.5";
    }
    
    setTimeout(function(){
        SLantern.style.bottom = "150%";
        setTimeout(function(){
            document.getElementById("sky").removeChild(SLantern);
        }, 5000);
    }, 10);
    
}
document.getElementById("Flyinglantern").addEventListener("click", function(){
    flyL = setTimeout(Smulti9Lantern, 100);
    document.getElementById("Flyshadow").src = "SVG/skylantern.svg";
    document.getElementById("Flyinglantern").style.top = "-100px";
    document.getElementById("Flyinglantern").style.transition = "6s";
    document.getElementById("fact").style.display = "block";
    document.getElementById("facttext").innerHTML = "<p>The lanterns are released to represent the longer daylight hours and the light from the full moon.</p>";
});


document.getElementById("bowl").addEventListener("mouseover", SmouseOver);
document.getElementById("bowl").addEventListener("mouseout", SmouseOut);

function SmouseOver(){
    document.getElementById("spoon").style.bottom = "320px";
    document.getElementById("spoon").style.transition= "2s";
}
function SmouseOut(){
    document.getElementById("spoon").style.bottom = "280px";
    document.getElementById("spoon").style.transition= "2s";
}

document.getElementById("Blantern").addEventListener("mouseover", BLmouseOver);
document.getElementById("Blantern").addEventListener("mouseout", BLmouseOut);
document.getElementById("Mlantern").addEventListener("mouseover", MLmouseOver);
document.getElementById("Mlantern").addEventListener("mouseout", MLmouseOut);
document.getElementById("Slantern").addEventListener("mouseover", SLmouseOver);
document.getElementById("Slantern").addEventListener("mouseout", SLmouseOut);

function BLmouseOver(){
    document.getElementById("Blantern").style.transform = "rotate(5deg)";
    document.getElementById("Blantern").style.left = "590px";
}
function BLmouseOut(){
    document.getElementById("Blantern").style.transform = "rotate(0deg)";
    document.getElementById("Blantern").style.left = "600px";
}
function MLmouseOver(){
    document.getElementById("Mlantern").style.transform = "rotate(-5deg)";
    document.getElementById("Mlantern").style.left = "460px";
}
function MLmouseOut(){
    document.getElementById("Mlantern").style.transform = "rotate(0deg)";
    document.getElementById("Mlantern").style.left = "450px";
}
function SLmouseOver(){
    document.getElementById("Slantern").style.transform = "rotate(5deg)";
    document.getElementById("Slantern").style.left = "310px";
}
function SLmouseOut(){
    document.getElementById("Slantern").style.transform = "rotate(0deg)";
    document.getElementById("Slantern").style.left = "320px";
}

document.getElementById("Blantern").addEventListener("click", function(){
    document.getElementById("Lanshadow").src = "SVG/Lantern.svg";
    document.getElementById("fact").style.display = "block";
    document.getElementById("facttext").innerHTML = "<p>Red Lanterns have traditionally been a sign of joy and vitality, when placed on the doorways, it was a way of participating a birth or impending marriage.</p>";
})

/*
function removeheart() {
    setTimeout(function(){
        document.getElementById("heart").remove();
    }, 1000);
}
*/

document.getElementById("couple").addEventListener("click", function(){
    document.getElementById("Heartshadow").src = "SVG/heart.svg";
    document.getElementById("heart").style.opacity = "1.0";
    document.getElementById("heart").style.top = "300px";
    document.getElementById("fact").style.display = "block";
    document.getElementById("facttext").innerHTML = "<p>The festival has long been the Chinese equivalent of the West's Valentine's Day since it was one of the few days single women were allowed to leave the house unaccompanied.</p>";
    //removeheart();
})

document.getElementById("lionhead").addEventListener("click", function(){
    document.getElementById("lionshadow").src = "SVG/Lionhead.svg";
    document.getElementById("fact").style.display = "block";
    document.getElementById("facttext").innerHTML = "<p>Ancient people regarded the lion as a symbol of bravery and strength, and thought that it could drive away evil and protect people and their livestock. Therefore, lion dances are performed at important events, especially the Lantern Festival, to ward off evil and pray for good fortune and safety.</p>";
})

document.getElementById("moon2").addEventListener("click",function(){
    document.getElementById("moonshadow").src = "SVG/moon.svg";
    document.getElementById("fact").style.display = "block";
    document.getElementById("facttext").innerHTML = "<p>The lanterns are released to represent the longer daylight hours and the light from the full moon.</p>";
})

document.getElementById("bowl").addEventListener("click",function(){
    document.getElementById("yuanshadow").src = "SVG/tanyang.svg";
    document.getElementById("fact").style.display = "block";
    document.getElementById("facttext").innerHTML = "<p>Families simply gather after dinner to eat rice ball, also known as Tang Yuan, which resemble the shape of the full moon and symbolise family unity.</p>";
})

document.getElementById("open").addEventListener("click", function(){
    document.getElementById("items").style.right = "0px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
})
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("items").style.right = "-870px";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
})

document.getElementById("closefact").addEventListener("click", function(){
    document.getElementById("fact").style.display = "none";
})

document.getElementById("c15").addEventListener("click",function(){
    document.getElementById("fact").style.display = "block";
    document.getElementById("facttext").innerHTML = "<p>The Lantern Festival takes place on the 15th day of the first month in the lunar calendar to mark the first full moon of the Chinese year and the coming of Spring.</p>";
})

document.getElementById("c0").addEventListener("mouseover", c0mouseOver);
document.getElementById("c0").addEventListener("mouseout", c0mouseOut);

function c0mouseOver(){
    document.getElementById("c0").style.transform = "rotate(5deg)";
    document.getElementById("c0").style.top = "100px";
    
}
function c0mouseOut(){
    document.getElementById("c0").style.transform = "rotate(0deg)";
    document.getElementById("c0").style.top = "94px";
}

var calendarNum = 0;
document.getElementById("c0").addEventListener("click",function(){
    calendarNum = calendarNum + 1;
    if (calendarNum > 14) {
        document.getElementById("c0").style.display = "none";
        document.getElementById("fact").style.display = "block";
        document.getElementById("facttext").innerHTML = "<p>The Lantern Festival takes place on the 15th day of the first month in the lunar calendar to mark the first full moon of the Chinese year and the coming of Spring.</p>";
        document.getElementById("Calshadow").src = "SVG/calendar15.svg";
    }
    document.getElementById("c0").src = "SVG/calendar" + calendarNum + ".svg";
})