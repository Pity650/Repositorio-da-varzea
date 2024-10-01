// function soma (number1,number2) {
//    return number1+number2;
// }
// console.log(soma(2,3));
// function área (number1,number2) {
//     return number1*number2;
// }
// let áreatrapezio= function (h,B,b){
//     return (B+b)*h/2
// }
// console.log (áreatrapezio (2,3,4))

// let nomes = prompt ('nome?');
// document.write (nome);

// parseInt (prompt('nome?'))

// let médiavalores = function (a,b,c) {
//     return a+b+c/3
// }

// console.log (médiavalores)

let nome = ['joão', 'marina', 'felipe', 'barbosa', 'luis', 'diogo', 'lucas', 'paulo', 'neymar', 'carlos', 'danilo', 'vinicius', 'natan', 'julia', 'lorena', 'diego', 'giovana', 'gabriel', 'gustavo', 'caio']

let i=0
    while (i<nome.length){
        console.log(i);
        i++; 
    }

    for (let i=0;i<nome.length;i++) {
        console.log(i);
        console.log(nome[i]);
    }

    let idade= 16;
    if (idade>16){
        console.log('Pode dirigir');
    }
        else{
            console.log('ilegal dirigir');
        }