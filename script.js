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

// Encrypt function

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

// Decrypt function

function buttonDecrypt(){
    const decryptText = decrypt(textArea.value)
    message.value = decryptText;
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function decrypt(decryptString){
    let keywordCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    decryptString = decryptString.toLowerCase();

    for(let i = 0; i < keywordCode.length; i++){
        if(decryptString.includes(keywordCode[i][1])){
            decryptString = decryptString.replaceAll(keywordCode[i][1], keywordCode[i][0])
        }
    }
    return decryptString;
}


// Copy button function

function buttonCopy(){
    
}