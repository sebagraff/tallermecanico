/*1*/
let lista=[10,3,4,8,21,17,23,14,31,32];

/*2*/
let acumulador=0

for (let i = 0; i < lista.length; i++) {
     if ((lista[i]%2) == 0){
         acumulador += 1
     }
}
console.log(acumulador)

/*3*/
function maxArray(array, index){
    let copyarray=array.slice();
    let compare=copyarray.sort();
    let popItem = compare.pop();
    if(array[index]>=(popItem)){
        console.log("es mayor");
    }else{
        console.log("no es mayor");
    }
}
maxArray([6,4,5,8,1,10],);
maxArray([3,3,6,5,9,6],0);

/*4*/
function calification(a){
    if(a==10){
        console.log("Sobresaliente");
    }else if(9>=a>=8){
        console.log("Notable");
    }else if(a==7){
        console.log("Bien");
    }else if (a==6){
        console.log("Suficiente");
    }else if(5>=a>=4){
        console.log("Insuficiente");
    }else if(3>=a>=0){
        console.log("Muy deficiente");
    }
};
calification(7);

/*5*/
function repeated(list){
    let acum=0
    for(let i=0; i<list.length; i++){
        for(let j=i+1; j<list.length; j++){
            if(list[i]==list[j]){
                acum += 1;
                }
            }
        };
    console.log("Hay "+acum+" "+"números repetidos");    
};
repeated([6,4,5,1,5,6,8,1,3,2]);
repeated([1,2,3,2,4,5,6,7]);
repeated([9,8,7,6,5,4]);
     





