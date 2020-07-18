var currentLevel = 0;
document.getElementById("next-level").addEventListener("click",function(){
    console.log('x');
    if(currentLevel == 0){
        console.log('cc');
        document.getElementById("level1").innerHTML = "The Duck as Self Reflection";
        currentLevel += 1;
    }
    else if(currentLevel == 1){
        document.getElementById("level2").innerHTML = "Peer";
        currentLevel += 1;
    }
    else if (currentLevel == 2){
        document.getElementById("level3").innerHTML = "Coach";
        currentLevel += 1;
    }

    else if (currentLevel ==3){
        document.getElementById("level4").innerHTML = "Tech Team";
        currentLevel += 1;
        document.getElementById("next-level").innerHTML = "Reset Triangle";
    }
    else{
        // make all blank again
        document.getElementById("level1").innerHTML = "";
        document.getElementById("level2").innerHTML = "";
        document.getElementById("level3").innerHTML = "";
        document.getElementById("level4").innerHTML = "";
        document.getElementById("next-level").innerHTML = "Click for next level of support";
        currentLevel = 0;
    }
});