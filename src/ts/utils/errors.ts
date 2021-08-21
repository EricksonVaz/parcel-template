export function displayErroOnBody(msgTxt){
    document.body.style.fontWeight ="bold";
    document.body.style.background= "white";
    document.body.innerHTML = msgTxt;
}