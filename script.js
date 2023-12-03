function coca() {
    document.getElementById("fr").setAttribute("src","images/cocacan.png");
    document.getElementById("orga").setAttribute("src","images/cap.png");
    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    document.getElementById("bg").innerText = "Coca-Cola";
    document.getElementById("bok").style.backgroundColor = "red";
    document.getElementById("next").style.backgroundColor = "red";
    document.getElementById("lea1").style.transform = "rotate(45deg)";
    document.getElementById("lea2").style.transform = "translateY(10px)";
    document.getElementById("fr").style.transform = "rotateZ(45deg)";
}

function sprite() {
    document.getElementById("fr").setAttribute("src","images/sprite.png");
    document.getElementById("orga").setAttribute("src","images/lemon.png");
    document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    document.getElementById("bg").innerText = "Sprite";
    document.getElementById("bok").style.backgroundColor = "green";
    document.getElementById("next").style.backgroundColor = "green";
    document.getElementById("lea1").style.transform = "rotate(90deg)";
    document.getElementById("lea2").style.transform = "translateY(-10px)";
    document.getElementById("fr").style.transform = "rotateZ(25deg)";
}

function orange() {
    document.getElementById("fr").setAttribute("src","images/orangecan.webp");
    document.getElementById("orga").setAttribute("src","images/orange.png");
    document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
    document.getElementById("bg").innerText = "Orange";
    document.getElementById("bok").style.backgroundColor = "Orange";
    document.getElementById("next").style.backgroundColor = "Orange";
    document.getElementById("lea1").style.transform = "rotate(60deg)";
    document.getElementById("lea2").style.transform = "translateY(10px)";
    document.getElementById("fr").style.transform = "rotateZ(-35deg)";
}

