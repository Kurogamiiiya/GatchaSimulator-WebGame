function roll(){

    let arrContainer=[];
    for(let i = 0; i<100;i++){
    arrContainer[i] = "common";
    }           

    let yellow = "yellow",gray = "gray",purple ="purple";
    let legendary,epic,result;

    //what u pull'in
    let pull = Math.floor(Math.random() * 100);

    //legendary 1%
    legendary = Math.floor(Math.random() * 100);
    arrContainer[legendary] = "legendary";  

    //epic 10%
    epic = [];
    for(let i = 0; i<10;i++){
        epic[i] = Math.floor(Math.random() * 100);
        while(epic[i] == legendary){
            epic[i] = Math.floor(Math.random() * 100);
        }  
        arrContainer[epic[i]] = "epic";
    }

    result = arrContainer[pull];
    if(result == "legendary"){
        // console.log(result);

        return yellow;
    }else if(result == "epic"){
        // console.log(result);

        return purple;
    }else{
        // console.log(result);

        return gray;
    }
}

function drawCard(color){
    const container = document.getElementById("container");
    const div = document.createElement('div');

    div.classList.add("container-child");
    div.classList.add("shrink");
    div.style.backgroundColor=color;
    

    // console.log(color);

    switch(color){
        case 'yellow':
            div.textContent="Legendary";
            break;
        case 'purple':
            div.textContent="Epic";
            break;
        case 'gray':
            div.textContent="Common";
    }

    div.style.textAlign="center";

    container.appendChild(div);
}

function removeCard(){
    const container = document.getElementById("container");
    const div = document.querySelector(".container-child");
    if(div == null){
        return;
    }
    container.removeChild(div);
}

function singleRoll(){
    for(let i = 0; i < 10;i++){
        removeCard();
    }
    let color;
    color = roll();
    drawCard(color);
}

function tenRoll(){
    for(let i = 0; i < 10;i++){
        removeCard();
     }
    for(let i = 0; i < 10;i++){
        let color;
        color = roll();
        drawCard(color);
    }
}


