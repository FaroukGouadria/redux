//filter
//map
//reduce

//**************simple************** */
const data = [1,2,3,4,5,6,7,8,9,10];
// var output = 0;
// for(var i=0;i<data.length;i++){
//     output = output + data[i]
// }

// console.log(output);


//reduce//

var sum=0;

const somme = data.reduce((sum,currentValue)=>{
    return sum + currentValue
});

console.log(somme)