function skill(){
    const btn1 = document.querySelector("#skills");
    btn1.style.display="block";
   
}

function exprience(){
    const btn2 = document.querySelector("#exprience");
    btn2.style.display="block";
}

function work(){
    const btn3 = document.querySelector("#work");
    btn3.style.display="block";
}

function ask(){
    let name = prompt("Please enter Lambert to proceed, first letter is capital");
    switch(name){
        case "Lambert": alert("press ok");
        break;
        case null:document.write("You press Cancel see you later");
        break;

        default: document.write("sorry, you cannot press OK without entering Lambert or the name you typed  is wrong");
    }
 
  

  
}