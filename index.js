const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")
let input1 = document.getElementById("input-1")
let errorMsg = document.getElementById("error-msg")
let passBox1 = document.getElementById("pass-box1")
let passBox2 = document.getElementById("pass-box2")




function passwordGenerator(){
    let pLength = parseInt(input1.value)
    console.log(input1.value)

    if (isNaN(pLength) || pLength<1){
        errorMsg.textContent = "Please enter a valid password length"
    }
    else {
        errorMsg.textContent = ""
    }

    let password1 = ""
    let password2 = ""

    for (i=0 ;i<pLength ;i++){
        password1 += characters[Math.floor(Math.random()*characters.length)]
        password2 += characters[Math.floor(Math.random()*characters.length)]       
    }

    passEl1.textContent = password1
    passEl2.textContent = password2
    
}

passBox1.addEventListener("click", function c(){
    errorMsg.textContent = "password has been copied"
    let passx1 = document.getElementById("pass1").textContent  
    navigator.clipboard.writeText(passx1)

})

passBox2.addEventListener("click", function c(){
    errorMsg.textContent = "password has been copied"
    let passx2 = document.getElementById("pass2").textContent
    navigator.clipboard.writeText(passx2)
})







