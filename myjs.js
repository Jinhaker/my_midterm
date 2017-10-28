function expandMenu(){
    var background = document.getElementById("background")
    document.getElementById("Menu").addEventListener("click",function(){
        document.getElementById("controls").style.top = "600px"; 
});
    
};


function changeimg () {
    var val = document.getElementById("file").value
    if (val == "horse"){
        background.style.backgroundImage = "url('img/bg1.jpg')";
    } else if (val == "night"){
        background.style.backgroundImage = "url('img/bg2.jpg')";
    } else if (val == "mountain"){
        background.style.backgroundImage = "url('img/bg3.jpg')";
    } else if (val == "epic"){
        background.style.backgroundImage = "url('img/bg4.jpg')";
    }
};

document.getElementById("file").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeimg();
    }
});

var TitleInp = document.getElementById("disptitle");
var DescInp = document.getElementById("dispdesc");

function Title(){
    TitleInp.addEventListener("keyup", function(ev){
        document.getElementById("title").innerHTML = "<h1>"+TitleInp.value+"</h>"
    })
};

function Description(){
    DescInp.addEventListener("keyup", function(ev){
        document.getElementById("desc").innerHTML = ""+DescInp.value+""
    })
};

function Color(){
    var col = document.getElementById("color").value
    document.getElementById("color").addEventListener("change", function(){
        document.getElementById("title").style.color = "col";
    })
};

expandMenu()
Title()
Description()
Color()