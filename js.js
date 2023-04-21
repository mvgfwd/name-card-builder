function printNama(){
    document.getElementById('outputNama').innerHTML=namaMu.value
}
function printProfesi(){
    document.getElementById('outputProfesi').innerHTML=profesiMu.value
}
function warnaBg() {
    var bgWarna = document.getElementById('bgKartu').value;
    document.getElementById('card').style.background=bgWarna
}
function warnaTeks() {
    var tekzKolor = document.getElementById('warnaTexts').value;
    document.getElementById('card').style.color=tekzKolor;
}
function textAlign(selected_id){
    document.getElementById('card').className=selected_id;
}
function printTelpon(){
    document.getElementById('outputTelpon').innerHTML=telponMu.value
}
function printEmail(){
    document.getElementById('outputEmail').innerHTML=emailMu.value
}
function printWeb(){
    document.getElementById('outputWeb').innerHTML=webMu.value
}
function printAlamat(){
    alamatKamu = document.getElementById('outputAlamat').innerHTML=alamatMu.value;
}

function formReset() {
    window.location.reload();
}
function formSubmit(){
    if(!namaMu.value){
        alert("Please Input All Required Section")
    }
    if(!profesiMu.value){
        alert("Please Input All Required Section")
    }
}