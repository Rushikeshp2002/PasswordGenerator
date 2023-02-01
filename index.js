const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass-el1")
let passEl2 = document.getElementById("pass-el2")

function genpass(){
    let num = ""
    let num2 =""
    for(let i = 0; i<16;i++){
        let gen1 = Math.floor(Math.random()*characters.length)
        num += characters[gen1]
        
        let gen2 = Math.floor(Math.random()*characters.length)
        num2 += characters[gen2]    
    }
    passEl1.textContent = num
    passEl2.textContent = num2
}

let themeEL = document.getElementById("theme-el")



function theme(){
    if(themeEL.textContent === "Black"){
        themeEL.textContent = "White"
    }
    else{
        themeEL.textContent = "Black"

    }

    
}
