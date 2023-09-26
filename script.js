let cargador = ['pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!'];
function chauchat(arr) {
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
chauchat(cargador);

function piumOK(){
    if (cargador.length > 0){
        cargador.pop();
        console.log("pium!");
        console.log("pium!");
        console.log("pium!");
        console.log(" ");
    }else{
        console.log("Cargador vacío");
        }
    }

function gatilloPush() {
    let tipoDisparo = Math.floor(Math.random() * 100);
    if(tipoDisparo < 10){
        console.log("Illo, me he quedao pillá!");
    }else if (tipoDisparo < 20){
        console.log("Illo, me he quedao pillá!");
    }else if (tipoDisparo < 30){
        console.log("Illo, me he quedao pillá!");
    }else if (tipoDisparo < 40){
        console.log("Illo, me he quedao pillá!");
    }else if (tipoDisparo < 50){
        console.log("Illo, me he quedao pillá!");
    }else if (tipoDisparo < 60){
        console.log("Illo, me he quedao pillá!");
    }else if (tipoDisparo < 70){
        console.log("Illo, me he quedao pillá!");
    }else if (tipoDisparo < 80){
        console.log("Illo, me he quedao pillá!");
    }else{
        piumOK();
    }

}

function recarga(){
    cargador.push('pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!');
}