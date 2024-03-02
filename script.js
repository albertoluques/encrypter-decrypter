// variables
const textArea = document.querySelector("#encrypt-textarea")
const message = document.querySelector(".decrypt-textarea") 



// document.getElementById("encrypt-button").onclick = 
function buttonEncrypt(){
    const encryptText = encrypt(textArea.value)
    message.value = encryptText;
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function encrypt(encryptString){
    let keywordCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    encryptString = encryptString.toLowerCase();

    for(let i = 0; i < keywordCode.length; i++){
        if(encryptString.includes(keywordCode[i][0])){
            encryptString = encryptString.replaceAll(keywordCode[i][0], keywordCode[i][1])
        }
    }
    return encryptString;
}


