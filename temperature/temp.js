let temp = document.getElementById("temp")
let btn = document.getElementById("post")
let temps = []

btn.addEventListener("click", handleClick)

function handleClick(){
    temp.value
    if(temp<10){
        alert("Temp Fbl")
    } else if(temp>=10 && temp<20){
        alert("Temp Nrml")
    } else {
        alert("Temp Hte")
    }
}

/*if(temp<10){
    console.log("Température faible")
} else{
    null
}

if(temp>10){
    console.log("Température normale")
} else{
    null
}

if(temp>20){
    console.log("Température Haute")
} else{
    null
}*/

//c'est cheesy mais j'ai la flemme de fair mieux
//shit

/*if(temp<10){
    console.log("Temp Fbl")
} else if(temp>=10 && temp<20){
    console.log("Temp Nrml")
} else{
    console.log("Temp hte")
}*/
