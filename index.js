let blackBox1 = document.getElementById("black-box1")
let blackBox2 =document.getElementById("black-box2")
console.log("hiii")
let count1 = 0
blackBox1.textContent = count1
let count2 = 0
blackBox2.textContent = count2

function addh1(){
    count1 += 1
    blackBox1.textContent = count1
}

function addh2(){
    count1 += 2
    blackBox1.textContent = count1
}

function addh3(){
    count1 += 3
    blackBox1.textContent = count1
}


function addg1(){
    count2 += 1
    blackBox2.textContent = count2
}

function addg2(){
    count2 += 2
    blackBox2.textContent = count2
}

function addg3(){
    count2 += 3
    blackBox2.textContent = count2
}

function clearh(){
    count1 = 0
     blackBox1.textContent = count1
}

function clearg(){
    count2 = 0
    blackBox2.textContent = count2
}


