function snapCrackel(maxValue){
    let resultado = [];

    for (let i = 1; i <= maxValue; i++){
        if(i % 2 > 0 && i % 5 === 0){
            resultado.push("SnapCrackel");
        }else if(i % 2 > 0){
            resultado.push("Snap");
        }else if(i % 5 === 0 ){
            resultado.push("Crackel");
        }else{
            resultado.push(i);
        }
    }

    return(resultado);


}