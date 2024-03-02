// variables
const textArea = document.querySelector("#encrypt-textarea")
const message = document.querySelector(".decrypt-textarea") 



// document.getElementById("encrypt-button").onclick = 
function buttonEncrypt(){
    const encryptText = encrypt(textArea.value)
    message.value = encryptText;
    textArea.value = "";
    message.style.backgroundImage = "none";
    message.style.backgroundColor = "#7dd0cc"
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

// function buttonCopy(){
//     var text = document.getElementById(".decrypt-textarea");
// navigator.clipboard.writeText(text).then(function() {
//   console.log('Async: Copying to clipboard was successful!');
// }, function(err) {
//   console.error('Async: Could not copy text: ', err);
// });
// }

function buttonCopy() {
    let copyText = document.getElementById("textarea");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    console.log("Copied the text: " + copyText.value);

    message.style.backgroundColor = "#84d07d"
    message.value = "";
  } 