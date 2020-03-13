// function charCount (str){
//     let count = {};
//     for(let i=0; i<str.length; i++){
//         let char = str[i].toLowerCase()
//         if(count[char] > 0){
//             count[char]++
//         }else{
//             count[char] = 1
//         }
//     }
//     return count
// }
// //console.log(count)
// console.log(charCount("HHhello"))


// function Arr(x,y){
//     if(x.length !== y.length){
//         return false
//     }

//     for(let i=0; i<x.length; i++){
//         let correctIndex = y.indexOf(x[i]**2)
//         if(correctIndex === -1){
//             return false
//         }else {
//             y.splice(correctIndex,1)
//         }
//     }
//     return true
      
// }

// console.log(Arr([1,2,3],[1,4,9]))

// function loop(x,y){
//     if(x.length !== y.length){
//         return false
//     }
//     let Arr1 ={};
//     let Arr2 = {}
//     for(let val of x){
//         Arr1[val] = (Arr1[val] )
//     }
//     for(let val of y){
//         Arr2[val] = (Arr2[val])
//     }

//     console.log(Arr1)
//     console.log(Arr2)

//     for(let key in Arr1){
//         // if(!(key**2 in Arr2)){
//         //     return false
//         // }
//         if(Arr2[key**2] !== Arr1[key]){
//                 return false
//         }
//     }
//     return true
// }
// console.log(loop([1,2,3],[1,4,9]))

// function anagram(x,y){
//     if(x.length !== y.length){
//         return false
//     }

//     const lookup = {}

//     for(let i=0; i< x.length; i++){
//         let letter = x[i]
//         lookup[letter] ? lookup[letter] =+1 : lookup[letter]= 1
//     }
//     for(let i=0; i<y.length; i++){
//         let letter = y[i]
//         if(!lookup[letter]){
//             return false
//         }else{
//            lookup[letter] -=1
//         }
//     }
//     return true
// }

// console.log(anagram(["q,w,e"],["q,w,eq"]))

// function count(num) {
//     for (let i=num; i>0; i--){
//         console.log(i)
//     }
//     console.log("done")
// }
// count(6)

//RECURSION

// function rnge(num){
//     if(num === 1) return 1;
//     return num + rnge(num-1)
// }
// console.log(rnge(4))

// function fact(num){
//     let total=1;
//     for(let i=num; i> 1; i-- ){
//         total *= i
//     }
//     return total
// }
// console.log(fact(3))

// RECURRSION FACTORIZATION
// function factorial(num){
//     if(num === 1) return 1;   //Always use base line
//     return num * factorial(num-1)
// }
// console.log(factorial(5))

// function pureRecur(num){
//     let newarr =[];

//     if(num.length === 0){
//         return newarr
//     }

//     if(num[0] % 2 !== 0){
//         newarr.push(num[0])
//     }
//     newarr = newarr.concat(pureRecur(num.slice(1)))
//     return newarr
// }
// console.log(pureRecur([1,2,3,4,5,6,7]))

//SEARCHING ALGORITHM

// function search(num,val){
//     for(let i=0; i<num.length; i++){
//         if(num[i] === val)
//         return i
//     } 
//     return -1
// }

// console.log(search([1,2,3,4,565,66,65,6,0],6))

function binary(num, val){
    let start = 0;
    let end = num.length-1;
    let middle = Math.floor((start+end)/2)

    while(num[middle] !== val && start <= end){
        if(val < num[middle]) end=middle-1;
        else start=middle+1;
        middle =Math.floor((start+end)/2)
    }
    return num[middle] === val ? middle : -1
}

console.log(binary([0,1,2,3,4,5,6,7,8,9],55))