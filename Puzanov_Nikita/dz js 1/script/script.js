
let value = [22, 32, 54, 33, 11, 4, 12 ];

function flex(value){
    let cont = {};
    let max = 0;
    for (let i = 0; i < value.length; i++){
        for (let g = 0; g <= value[i]; g++){
            if (max<g){
                max = g;
            }
        }
    }
    cont.max = max;
    let min = max;
    for (let i = 0; i < value.length; i++){
        for (let g = max; g >= value[i]; g--){
            if (min>g){
                min = g;
            }
        } 
    }
    cont.min = min;
    let sum = 0;
    for (let i = 0; i < value.length; i++){
        sum = sum + value[i];
    }
    let avg = sum / value.length;
    let count = value.length;
    cont.avg = avg;
    cont.count = count;
    console.log(cont);
    return cont;
}

flex(value);

