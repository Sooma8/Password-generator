const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
   
 
 let passwordLengthNum = 10

 const passwordLengthEl = document.getElementById("password-length")
 const lengthSlider = document.querySelector(".slider")
 
 
 const generateBtn = document.getElementById("generate-btn")
 const password1 = document.getElementById("password-1")
 const password2 = document.getElementById("password-2")
 const copyBtn = document.querySelector(".copy-btn")


lengthSlider.addEventListener("input", function(){
    let passwordLengthNum = lengthSlider.value
    passwordLengthEl.textContent = passwordLengthNum
})


function generatePassword(){
    let randomPassword = ""
    for(let i = 0; i < passwordLengthNum; i++){
        let randomCharecter = Math.floor(Math.random() * characters.length)
        randomPassword += characters[randomCharecter]
    }
    return randomPassword
    
}

generateBtn.addEventListener("click", function(){
    password1.textContent = generatePassword()
    password2.textContent = generatePassword()
})


copyBtn.addEventListener("click", function() {
   const password =  passowrd1.value;
   navigator.clipboard.writeText(password).then (() => {
    alert("password copied")
   })
})
